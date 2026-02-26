"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

type ResponseState = {
  type: "idle" | "success" | "error";
  message: string;
};

const initialState: ResponseState = { type: "idle", message: "" };

export function QuoteForm() {
  const [status, setStatus] = useState<ResponseState>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true);
    setStatus(initialState);

    try {
      const payload = Object.fromEntries(formData.entries());
      const response = await fetch("/api/request-quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { success: boolean; message?: string };
      if (!response.ok || !result.success) {
        setStatus({
          type: "error",
          message: result.message ?? "Impossible de soumettre votre devis.",
        });
      } else {
        setStatus({
          type: "success",
          message: "Votre demande de devis a été transmise.",
        });
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
          <input name="phone" required className="w-full rounded-md border border-slate-300 px-3 py-2" />
        </label>
        <label className="space-y-1 text-sm">
          <span className="font-medium text-ink">Entreprise</span>
          <input name="company" className="w-full rounded-md border border-slate-300 px-3 py-2" />
        </label>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-1 text-sm">
          <span className="font-medium text-ink">Produit ciblé</span>
          <input name="productInterest" className="w-full rounded-md border border-slate-300 px-3 py-2" />
        </label>
        <label className="space-y-1 text-sm">
          <span className="font-medium text-ink">Localisation</span>
          <input name="location" className="w-full rounded-md border border-slate-300 px-3 py-2" />
        </label>
      </div>
      <label className="space-y-1 text-sm">
        <span className="font-medium text-ink">Détails du projet</span>
        <textarea name="projectDetails" required rows={6} className="w-full rounded-md border border-slate-300 px-3 py-2" />
      </label>
      <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
      <label className="flex items-center gap-2 text-sm text-muted">
        <input type="checkbox" name="consent" value="true" required />
        J&apos;autorise TRADIM à me recontacter.
      </label>
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Envoi..." : "Soumettre"}
      </Button>
      {status.type !== "idle" ? (
        <p className={status.type === "success" ? "text-sm text-green-700" : "text-sm text-red-700"}>
          {status.message}
        </p>
      ) : null}
    </form>
  );
}
