import nodemailer from "nodemailer";
import { ENV } from "./_core/env";

const recipient = "eridpro@yandex.ru";

export type ContactMailInput = {
  name: string;
  company?: string;
  phone: string;
  email: string;
  comment?: string;
  selectedService?: string;
};

export function isEmailConfigured() {
  return Boolean(ENV.yandexSmtpAppPassword);
}

export async function sendContactMail(input: ContactMailInput) {
  if (!isEmailConfigured()) {
    return { sent: false, configured: false, recipient } as const;
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.yandex.ru",
    port: 465,
    secure: true,
    auth: { user: recipient, pass: ENV.yandexSmtpAppPassword },
  });

  await transporter.sendMail({
    from: `Сайт eridpro.ru <${recipient}>`,
    to: recipient,
    replyTo: input.email,
      subject: `Новая заявка с сайта: ${input.selectedService ? `${input.selectedService} — ` : ""}${input.name}`,
    text: [
      `Имя: ${input.name}`,
      `Компания: ${input.company || "Не указана"}`,
      `Телефон: ${input.phone}`,
      `Email: ${input.email}`,
      `Услуга: ${input.selectedService || "Не выбрана"}`,
      `Комментарий: ${input.comment || "Не указан"}`,
    ].join("\\n"),
  });

  return { sent: true, configured: true, recipient } as const;
}
