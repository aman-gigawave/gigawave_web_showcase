import { GridPattern } from "@/components/ui/GridPattern";
import { cn } from "@/lib/utils";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <GridPattern
        width={100}
        height={100}
        x={-1}
        y={-1}
        opacity={0.5}
        strokeDasharray={"4 5"}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
        )}
      />
      {children}
    </>
  );
}
