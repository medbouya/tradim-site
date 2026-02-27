import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-70",
  {
    variants: {
      intent: {
        primary: "bg-accent text-white hover:bg-orange-700 focus-visible:ring-accent",
        secondary:
          "border border-ink/20 bg-white text-ink hover:bg-slate-100 focus-visible:ring-ink",
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
