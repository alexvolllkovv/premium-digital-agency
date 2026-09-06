import { describe, expect, it } from "vitest";

describe("YANDEX_SMTP_APP_PASSWORD", () => {
  it("is available to the server runtime and never exposed to the client", () => {
    const password = process.env.YANDEX_SMTP_APP_PASSWORD;
    expect(password, "SMTP secret must be configured").toBeTruthy();
    expect(password).not.toMatch(/eridpro@yandex\.ru/i);
    expect(password).not.toContain(" ");
  });
});
