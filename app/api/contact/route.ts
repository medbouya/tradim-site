import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/forms/schemas";
import { makeRequestId } from "@/lib/utils";

type ApiResponse = {
  success: boolean;
  requestId?: string;
  errorCode?: string;
  message?: string;
};

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json<ApiResponse>(
      {
        success: false,
        errorCode: "INVALID_JSON",
        message: "Requête invalide.",
      },
      { status: 400 },
    );
  }

  const result = contactSchema.safeParse({
    ...((payload as Record<string, unknown>) ?? {}),
    consent: (payload as Record<string, unknown>)?.consent === true || (payload as Record<string, unknown>)?.consent === "true",
  });

  if (!result.success) {
    return NextResponse.json<ApiResponse>(
      {
        success: false,
        errorCode: "VALIDATION_FAILED",
        message: result.error.issues[0]?.message ?? "Validation échouée.",
      },
      { status: 422 },
    );
  }

  if (result.data.website) {
    return NextResponse.json<ApiResponse>(
      {
        success: false,
        errorCode: "SPAM_DETECTED",
        message: "Requête bloquée.",
      },
      { status: 400 },
    );
  }

  const requestId = makeRequestId("contact");

  return NextResponse.json<ApiResponse>({
    success: true,
    requestId,
    message: "Message reçu.",
  });
}
