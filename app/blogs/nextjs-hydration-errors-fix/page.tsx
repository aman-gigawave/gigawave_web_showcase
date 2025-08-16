import { Metadata } from "next";
import HydrationErrorPage from "./components/HydrationError";

export const runtime = "edge";

export const metadata: Metadata = {
  title: "Fixing Hydration Errors in Next.js: A Complete Guide",
  description:
    "Hydration errors in Next.js can break your UI. This guide explains why they happen and how to fix them—using dynamic imports, suppress warnings, and more",
};

const Page = () => {
  return <HydrationErrorPage />;
};

export default Page;
