import { Metadata } from "next";
import GeneratedBlogPage from "./components/GeneratedBlogPage";

export const runtime = "edge";

export const metadata: Metadata = {
  title: "how to install flutter in windows 11",
  description: "how to install flutter in windows 11",
};

const Page = () => {
  return <GeneratedBlogPage />;
};

export default Page;
