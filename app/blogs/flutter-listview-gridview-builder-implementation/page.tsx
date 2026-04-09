import { Metadata } from "next";
import FlutterPackagesPage from "./components/FlutterPackages";

export const runtime = "edge";

export const metadata: Metadata = {
  title: "Mastering ListView.builder and GridView.builder in Flutter",
  description:
    "Learn to implement efficient ListView.builder and GridView.builder in Flutter with practical code, performance guidance, and production-safe patterns.",
};

const Page = () => {
  return <FlutterPackagesPage />;
};

export default Page;
