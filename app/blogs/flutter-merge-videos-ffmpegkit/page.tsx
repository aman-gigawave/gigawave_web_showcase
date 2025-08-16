import { Metadata } from "next";
import FFmpegMergePage from "./components/FFmpegMerge";

export const runtime = "edge";

export const metadata: Metadata = {
  title: "Merge Videos in Flutter with FFmpegKit",
  description:
    "Learn how to merge two videos with timestamp and logo overlays in Flutter using FFmpegKit. Build pro-level video editing features in your mobile app.",
};

const Page = () => {
  return <FFmpegMergePage />;
};

export default Page;
