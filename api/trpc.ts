import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { initTRPC } from "@trpc/server";
import { z } from "zod";
import nodemailer from "nodemailer";

const t = initTRPC.create();

const appRouter = t.router({
  contact: t.router({
    submit: t.procedure
      .input(
        z.object({
          name: z.string().trim().min(2).max(120),
          company: z.string().trim().max(160).optional(),
          phone: z.string().trim().min(10).max(32),
          email: z.string().email().max(320),
          comment: z.string().trim().max(2000).optional(),
          selectedService: z.string().trim().max(160).optional(),
          consent: z.literal(true),
        })
      )
      .mutation(async ({ input }) => {
        const smtpPassword = process.env.YANDEX_SMTP_APP_PASSWORD ?? "";
        const recipient = "eridpro@yandex.ru";

        if (!smtpPassword) {
          return {
            accepted: false,
            configured: false,
            recipient,
            message: "SMTP ещё не настроен.",
          };
        }

        const transporter = nodemailer.createTransport({
          host: "smtp.yandex.ru",
          port: 465,
          secure: true,
          auth: {
            user: recipient,
            pass: smtpPassword,
          },
        });

        await transporter.sendMail({
          from: `Сайт eridpro.ru <${recipient}>`,
          to: recipient,
          replyTo: input.email,
          subject: `Новая заявка с сайта: ${
            input.selectedService
              ? `${input.selectedService} — `
              : ""
          }${input.name}`,
          text: [
            `Имя: ${input.name}`,
            `Компания: ${input.company || "Не указана"}`,
            `Телефон: ${input.phone}`,
            `Email: ${input.email}`,
            `Услуга: ${input.selectedService || "Не выбрана"}`,
            `Комментарий: ${input.comment || "Не указан"}`,
          ].join("\n"),
        });

        return {
          accepted: true,
          configured: true,
          recipient,
          message: "Заявка отправлена.",
        };
      }),
  }),
});

const handler = (req: Request) => {
  const url = new URL(
    req.url,
    `https://${req.headers.get("host") || "eridpro.ru"}`
  );

  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req: new Request(url, req),
    router: appRouter,
    createContext: () => ({}),
  });
};

export default handler;
