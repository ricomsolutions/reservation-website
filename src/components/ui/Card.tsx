import { type ReactNode, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export default function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl bg-[#1a1a2e] p-6 shadow-lg",
        "transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
