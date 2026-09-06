import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { ENV } from "./_core/env";
import { isEmailConfigured, sendContactMail } from "./email";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),
  contact: router({
    submit: publicProcedure
      .input(z.object({
        name: z.string().trim().min(2).max(120),
        company: z.string().trim().max(160).optional(),
        phone: z.string().trim().min(10).max(32),
        email: z.string().email().max(320),
        comment: z.string().trim().max(2000).optional(),
        consent: z.literal(true),
      }))
      .mutation(async ({ input }) => {
        const configured = isEmailConfigured();
        if (ENV.isProduction && configured) {
          await sendContactMail(input);
          return { accepted: true, configured: true, recipient: "eridpro@yandex.ru", message: "Заявка отправлена." } as const;
        }
        return {
          accepted: false,
          configured,
          recipient: "eridpro@yandex.ru",
          message: configured ? "Заявка проверена в demo-режиме; отправка включится в production." : "SMTP ещё не настроен.",
        } as const;
      }),
  }),

  // TODO: add feature routers here, e.g.
  // todo: router({
  //   list: protectedProcedure.query(({ ctx }) =>
  //     db.getUserTodos(ctx.user.id)
  //   ),
  // }),
});

export type AppRouter = typeof appRouter;
