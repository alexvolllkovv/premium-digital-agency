import { describe, expect, it } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

const ctx = {
  user: null,
  req: {} as TrpcContext["req"],
  res: {} as TrpcContext["res"],
} as TrpcContext;

describe("contact.submit", () => {
  it("validates and keeps delivery disabled until SMTP is configured", async () => {
    const result = await appRouter.createCaller(ctx).contact.submit({
      name: "Валерий",
      company: "ИП Лобанов Валерий Алексеевич",
      phone: "+79877332525",
      email: "eridpro@yandex.ru",
      comment: "Тестовое обращение",
      consent: true,
    });

    expect(result.accepted).toBe(false);
    expect(result.configured).toBe(false);
    expect(result.recipient).toBe("eridpro@yandex.ru");
  });

  it("rejects invalid email before any delivery attempt", async () => {
    await expect(appRouter.createCaller(ctx).contact.submit({
      name: "Валерий",
      phone: "+79877332525",
      email: "not-an-email",
      consent: true,
    })).rejects.toThrow();
  });
});
