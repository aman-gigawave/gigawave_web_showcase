import { Metadata } from "next";
import GeneratedBlogPage from "./components/GeneratedBlogPage";

export const runtime = "edge";

export const metadata: Metadata = {
  title: "CHANGE_THIS_TOPIC_EACH_RUN",
  description: "CHANGE_THIS_TOPIC_EACH_RUN",
};

const Page = () => {
  return <GeneratedBlogPage />;
};

export default Page;
