import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

// Sanity sends a POST request with a secret in the header when content changes.
// Configure this webhook in Sanity: Manage → API → Webhooks

export async function POST(request: Request) {
  const secret = request.headers.get("x-sanity-revalidate-secret");

  if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  let body: { _type?: string } = {};
  try {
    body = await request.json();
  } catch {
    // Webhook with no body — revalidate everything
  }

  const type = body?._type;

  if (!type || type === "product") {
    revalidatePath("/products", "page");
    revalidatePath("/products/[slug]", "page");
    revalidatePath("/", "page");
  }
  if (!type || type === "project") {
    revalidatePath("/projects", "page");
    revalidatePath("/", "page");
  }
  if (!type || type === "testimonial") {
    revalidatePath("/", "page");
  }
  if (!type || type === "settings") {
    revalidatePath("/", "layout");
  }

  return NextResponse.json({ revalidated: true, type: type ?? "all" });
}
