import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function makeRequestId(prefix: string) {
  const date = new Date().toISOString().replace(/[-:.TZ]/g, "");
  const random = Math.floor(Math.random() * 1_000_000)
    .toString()
    .padStart(6, "0");

  return `${prefix}-${date}-${random}`;
}
