import { describe, expect, it } from "vitest";
import { MockDataProvider } from "@/lib/data/adapters/mock";

describe("MockDataProvider", () => {
  const provider = new MockDataProvider();

  it("returns products filtered by category", async () => {
    const products = await provider.getProducts({ category: "panneaux" });
    expect(products.length).toBeGreaterThan(0);
    expect(products.every((item) => item.category === "panneaux")).toBe(true);
  });

  it("returns null for unknown product slug", async () => {
    const product = await provider.getProductBySlug("unknown");
    expect(product).toBeNull();
  });
});
