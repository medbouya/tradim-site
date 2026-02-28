import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-sm px-6 py-3 text-sm font-semibold tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      intent: {
        primary: "bg-accent text-white hover:bg-red-700",
        secondary: "border border-white/25 text-white hover:bg-white/10",
        outline: "border border-ink/20 text-ink hover:bg-slate-100",
      },
    },
    defaultVariants: {
      intent: "primary",
    },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    children: ReactNode;
  };

type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof buttonVariants> & {
    href: string;
    children: ReactNode;
  };

export function Button({ className, intent, children, ...props }: ButtonProps) {
  return (
    <button className={cn(buttonVariants({ intent }), className)} {...props}>
      {children}
    </button>
  );
}

export function LinkButton({
  className,
  intent,
  href,
  children,
  ...props
}: LinkButtonProps) {
  return (
    <Link href={href} className={cn(buttonVariants({ intent }), className)} {...props}>
      {children}
    </Link>
  );
}
