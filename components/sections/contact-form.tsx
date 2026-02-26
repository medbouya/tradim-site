"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

type ResponseState = {
  type: "idle" | "success" | "error";
  message: string;
};

const initialState: ResponseState = { type: "idle", message: "" };

export function ContactForm() {
  const [status, setStatus] = useState<ResponseState>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true);
    setStatus(initialState);

    try {
      const payload = Object.fromEntries(formData.entries());
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { success: boolean; message?: string };
      if (!response.ok || !result.success) {
        setStatus({ type: "error", message: result.message ?? "Envoi impossible." });
      } else {
        setStatus({ type: "success", message: "Message envoyé avec succès." });
      }
    } catch {
      setStatus({ type: "error", message: "Erreur réseau." });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form action={handleSubmit} className="space-y-4 rounded-xl border border-slate-200 bg-white p-6">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-1 text-sm">
          <span className="font-medium text-ink">Nom complet</span>
          <input name="name" required className="w-full rounded-md border border-slate-300 px-3 py-2" />
        </label>
        <label className="space-y-1 text-sm">
          <span className="font-medium text-ink">Email</span>
          <input type="email" name="email" required className="w-full rounded-md border border-slate-300 px-3 py-2" />
        </label>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-1 text-sm">
          <span className="font-medium text-ink">Téléphone</span>
          <input name="phone" className="w-full rounded-md border border-slate-300 px-3 py-2" />
        </label>
        <label className="space-y-1 text-sm">
          <span className="font-medium text-ink">Entreprise</span>
          <input name="company" className="w-full rounded-md border border-slate-300 px-3 py-2" />
        </label>
      </div>
      <label className="space-y-1 text-sm">
        <span className="font-medium text-ink">Message</span>
        <textarea name="message" required rows={5} className="w-full rounded-md border border-slate-300 px-3 py-2" />
      </label>
      <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
      <label className="flex items-center gap-2 text-sm text-muted">
        <input type="checkbox" name="consent" value="true" required />
        J&apos;accepte la politique de confidentialité.
      </label>
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Envoi..." : "Envoyer"}
      </Button>
      {status.type !== "idle" ? (
        <p className={status.type === "success" ? "text-sm text-green-700" : "text-sm text-red-700"}>
          {status.message}
        </p>
      ) : null}
    </form>
  );
}
