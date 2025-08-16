import { Metadata } from "next";
import FlutterPackagesPage from "./components/FlutterPackages";

export const runtime = "edge";

export const metadata: Metadata = {
  title: "Top Flutter Packages Every Developer Should Use",
  description:
    "Explore powerful Flutter packages that save time, reduce bugs, and scale beautifully. From state management to layout, these tools are must-haves.",
};

const Page = () => {
  return <FlutterPackagesPage />;
};

export default Page;
