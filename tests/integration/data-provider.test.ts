import { describe, expect, it } from "vitest";
import { products, getProductBySlug } from "@/lib/content/products";
import { projects } from "@/lib/content/projects";
import { testimonials } from "@/lib/content/testimonials";

describe("Static content fallback", () => {
  it("products list is non-empty and has required fields", () => {
    expect(products.length).toBeGreaterThan(0);
    products.forEach((p) => {
      expect(p.slug).toBeTruthy();
      expect(p.name).toBeTruthy();
    });
  });

  it("getProductBySlug returns correct product", () => {
    const first = products[0];
    expect(getProductBySlug(first.slug)).toEqual(first);
  });

  it("returns undefined for unknown slug", () => {
    expect(getProductBySlug("unknown-slug")).toBeUndefined();
  });

  it("projects list is non-empty", () => {
    expect(projects.length).toBeGreaterThan(0);
  });

  it("testimonials list is non-empty", () => {
    expect(testimonials.length).toBeGreaterThan(0);
  });
});
