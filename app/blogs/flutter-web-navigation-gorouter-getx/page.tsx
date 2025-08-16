import { Metadata } from "next";
import WebNavigationPage from "./components/WebNavigation";

export const runtime = "edge";

export const metadata: Metadata = {
  title: "Flutter Web Navigation: GoRouter + GetX Without GetMaterialApp",
  description:
    "Combine GoRouter's structured navigation with GetX overlays to build robust, web-friendly Flutter apps—no hacks or broken routes required.",
};

const Page = () => {
  return <WebNavigationPage />;
};

export default Page;
