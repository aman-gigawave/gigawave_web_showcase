import RBACMiddlewarePage from "./components/RBAMiddleware";
import { Metadata } from "next";

export const runtime = "edge";

export const metadata: Metadata = {
  title: "Next.js Role-Based Access Control Middleware",
  description:
    "Learn how to implement role-based access control (RBAC) in Next.js using middleware and JWTs. A full guide with code examples and best practices.",
};

const Page = () => {
  return <RBACMiddlewarePage />;
};

export default Page;
