import { cn } from "@/lib/utils";

export default function WrapperContent({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn(className, "p-4 pb-20 flex flex-col")}>{children}</div>
  );
}
