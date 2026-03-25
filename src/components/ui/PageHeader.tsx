import Image from "next/image";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  subtitle?: string;
  title: string;
  className?: string;
}

export default function PageHeader({
  subtitle,
  title,
  className,
}: PageHeaderProps) {
  return (
    <section
      className={cn(
        "relative flex min-h-[300px] items-center justify-center bg-[#0a0a0a] py-20 md:min-h-[400px]",
        "bg-gradient-to-b from-[rgba(0,0,45,0.5)] to-[#0a0a0a]",
        className
      )}
    >
      <div className="text-center">
        {subtitle && (
          <h6 className="mb-2 text-sm font-medium uppercase tracking-widest text-[#33cc33]">
            {subtitle}
          </h6>
        )}
        <Image
          src="/images/separator.svg"
          alt="separator"
          width={120}
          height={20}
          className="mx-auto mb-4"
        />
        <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
          {title}
        </h1>
      </div>
    </section>
  );
}
