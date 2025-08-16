import { Metadata } from "next";
import FlutterFieldingPositionPage from "./components/FlutterFielding";

export const runtime = "edge";

export const metadata: Metadata = {
  title: "Flutter Fielding Position Picker with CustomPainter",
  description:
    "Build an animated fielding position picker with Flutter's CustomPainter, GestureDetector, and smooth animations for a cricket game interface.",
};

const Page = () => {
  return <FlutterFieldingPositionPage />;
};

export default Page;
