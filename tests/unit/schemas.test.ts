import { describe, expect, it } from "vitest";
import { contactSchema, quoteSchema } from "@/lib/forms/schemas";

describe("contactSchema", () => {
  it("accepts a valid contact payload", () => {
    const result = contactSchema.safeParse({
      name: "Jean Test",
      email: "jean@example.com",
      message: "Message test assez long.",
      consent: true,
      website: "",
    });
    expect(result.success).toBe(true);
  });

  it("rejects invalid email", () => {
    const result = contactSchema.safeParse({
      name: "Jean Test",
      email: "bad-email",
      message: "Message test assez long.",
      consent: true,
      website: "",
    });
    expect(result.success).toBe(false);
  });
});

describe("quoteSchema", () => {
  it("accepts a valid quote payload", () => {
    const result = quoteSchema.safeParse({
      name: "Client Test",
      email: "client@example.com",
      phone: "+22245123456",
      projectDetails: "Nous souhaitons équiper un entrepôt de 5000m2.",
      consent: true,
      website: "",
    });
    expect(result.success).toBe(true);
  });
});
