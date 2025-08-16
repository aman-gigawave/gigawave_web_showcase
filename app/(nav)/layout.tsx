import { LimelightNav } from "../components/LimeLight";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <LimelightNav className="bg-card border-accent/50 rounded-full" />
    </>
  );
}
