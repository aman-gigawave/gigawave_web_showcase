import { Metadata } from "next";
import { WidgetVideoPage } from "./components/WidgetVideoPage";

export const runtime = "edge";

export const metadata: Metadata = {
  title: "Capture Flutter Widget as Video with FFmpeg",
  description:
    "Turn any Flutter widget into an MP4 video using FFmpeg. Capture, convert, and customize your UI recordings easily. Full guide with code samples.",
};

const Page = () => {
  return <WidgetVideoPage />;
};

export default Page;
