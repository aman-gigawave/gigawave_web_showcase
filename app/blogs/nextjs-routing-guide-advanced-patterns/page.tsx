import { Metadata } from "next";
import NextJSRoutingPage from "./components/NextRouting";

export const runtime = "edge";

export const metadata: Metadata = {
  title: "Mastering Next.js Routing: From Basics to Advanced",
  description:
    "Explore Next.js routing from file-based basics to advanced patterns like dynamic routes, intercepting, and middleware. Build scalable apps with ease.",
};

const Page = () => {
  return <NextJSRoutingPage />;
};

export default Page;
