"use client";
import {
  BlogContent,
  BlogHighlighter,
  BlogKeyValue,
  BlogList,
  BlogSubTitle,
  BlogTable,
  BlogTips,
  WriterInfo,
} from "@/app/components/BlogComponents";
import CustomTitle from "@/components/custom/CustomTitle";
import { CodeBlock } from "@/components/ui/code-block";
import { BLOG_AUTHORS, BLOG_PREVIEWS } from "@/lib/constants";
import { usePathname } from "next/navigation";
import React from "react";
import { Film, Package, Lightbulb, Pin } from "lucide-react";
import RelatedNextBlogButton from "@/app/components/RelatedNextBlogButton";
import TagsList from "@/components/custom/TagsList";

export const WidgetVideoPage = () => {
  const author = BLOG_AUTHORS[0];
  // const blogPreview = BLOG_PREVIEWS;
  const pathname = usePathname().split("/")[2];
  const tags = BLOG_PREVIEWS.find((blog) => blog.slug === pathname)?.tags || [];

  // Next blog logic
  // const currentIndex = BLOG_PREVIEWS.findIndex(
  //   (blog) => blog.slug === pathname
  // );
  // const nextIndex = (currentIndex + 1) % BLOG_PREVIEWS.length;
  // const nextBlog = BLOG_PREVIEWS[nextIndex];

  return (
    <div className="min-h-screen text-white p-6 md:p-10 leading-relaxed">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="md:my-10">
          <TagsList tags={tags} />
          <CustomTitle
            headingClassName="!text-start"
            heading={
              <>
                Capture widget as video in flutter using
                <span className="secondary-gradient-text ">FFmpeg</span> package
              </>
            }
          />
          <WriterInfo
            image={author.image}
            name={author.name}
            role={author.role}
            readTime="4"
            date="June 14, 2025"
          />
        </header>

        <section className="mb-16">
          <BlogContent>
            We want to record a widget&apos;s UI as PNG images (frames) and then
            combine those frames into a video using FFmpeg.
          </BlogContent>
          <BlogList
            items={[
              "Capture the widget's UI as PNG images (frames).",
              "Combine those frames into a video using FFmpeg.",
            ]}
          />
        </section>

        <BlogSubTitle> 1. Wrapping the Widget </BlogSubTitle>
        <section className="mb-16">
          <div className="space-y-12">
            <div>
              <CodeBlock
                language="dart"
                filename="app/main.dart"
                code={`final GlobalKey _globalKey = GlobalKey();

@override
Widget build(BuildContext context) {
  return RepaintBoundary(
    key: _globalKey,
    child: widget.child,
  );
}`}
              />
              <BlogList
                items={[
                  <BlogKeyValue
                    key="repaint-boundary"
                    title="RepaintBoundary"
                    value="This allows you to snapshot the widget's current UI."
                  />,
                  <BlogKeyValue
                    key="global-key"
                    title="GlobalKey"
                    value="Used to get access to this widget later during image capture."
                  />,
                ]}
              />
            </div>

            <div className="space-y-8">
              <BlogSubTitle> 2. Capturing a Frame </BlogSubTitle>
              <CodeBlock
                language="dart"
                filename="app/main.dart"
                code={`final RenderRepaintBoundary? boundary =
  _globalKey.currentContext?.findRenderObject() as RenderRepaintBoundary?;

final ui.Image image = await boundary.toImage(pixelRatio: widget.pixelRatio);
final byteData = await image.toByteData(format: ui.ImageByteFormat.png);
await File(framePath).writeAsBytes(byteData.buffer.asUint8List());`}
              />

              <BlogList
                items={[
                  <BlogKeyValue
                    key="boundary"
                    title={
                      <BlogHighlighter>boundary.toImage(...)</BlogHighlighter>
                    }
                    value="Takes a screenshot of the widget."
                  />,
                  <BlogKeyValue
                    key="pixelRatio"
                    title={<BlogHighlighter>pixelRatio</BlogHighlighter>}
                    value="Controls resolution/quality of captured frame."
                  />,
                  <BlogKeyValue
                    key="imageByteFormat"
                    title={
                      <BlogHighlighter>ImageByteFormat.png</BlogHighlighter>
                    }
                    value="Saves it in PNG format (required by FFmpeg)."
                  />,
                  <BlogContent key="frame-naming">
                    It saves the frame with a sequential name like:{" "}
                    <BlogHighlighter>frame_0000.png</BlogHighlighter>,{" "}
                    <BlogHighlighter>frame_0001.png</BlogHighlighter>, etc.
                  </BlogContent>,
                ]}
              />
            </div>

            <div className="space-y-8">
              <BlogSubTitle> 3. Scheduling the Captures </BlogSubTitle>
              <CodeBlock
                language="dart"
                filename="app/main.dart"
                code={`_timer = Timer.periodic(Duration(milliseconds: 100), (timer) {
  captureFrame(frameCount, framesDir.path);
  ...
});`}
              />
              <BlogList
                items={[
                  "Runs every 100ms (which means 10 frames per second).",
                  "Continues for the duration you set (widget.duration), collecting all frames.",
                ]}
              />
            </div>
          </div>
        </section>

        <section className="mb-16 space-y-7">
          <BlogSubTitle>
            <Film className="inline-block mr-2 text-primary" size={20} /> FFmpeg
            Magic — Combine Images into Video
          </BlogSubTitle>
          <CodeBlock
            language="dart"
            filename="app/main.dart"
            code={`await FFmpegKit.executeWithArguments([
  '-y',                               // Overwrite output if it exists
  '-framerate', '10',                 // Input frame rate: 10 FPS
  '-f', 'image2',                     // Input format is a series of images
  '-pattern_type', 'sequence',       // Expect a sequence (frame_0000.png)
  '-start_number', '0',              // Start from frame_0000
  '-i', '.../frame_%04d.png',        // Input path (%04d means 4-digit padded number)
  '-vcodec', 'mpeg4',                // Output video codec
  '-pix_fmt', 'yuv420p',             // Pixel format for Android/iOS support
  '-an',                             // No audio
  'output_video.mp4',                // Final video file
]);`}
          />

          <BlogSubTitle> Explanation of Each FFmpeg Option:</BlogSubTitle>
          <BlogTable
            title="Flag"
            description="Purpose"
            data={[
              {
                title: <BlogHighlighter key="-y">-y</BlogHighlighter>,
                description: "Auto overwrite output file if it exists",
              },
              {
                title: (
                  <BlogHighlighter key="-framerate">
                    -framerate 10
                  </BlogHighlighter>
                ),
                description: "Read input at 10 frames per second",
              },
              {
                title: <BlogHighlighter key="-f">-f image2</BlogHighlighter>,
                description: "Use raw image input format",
              },
              {
                title: (
                  <BlogHighlighter key="-pattern_type">
                    -pattern_type sequence
                  </BlogHighlighter>
                ),
                description: "Accept sequential file names (frame_0001.png)",
              },
              {
                title: (
                  <BlogHighlighter key="-start_number">
                    -start_number 0
                  </BlogHighlighter>
                ),
                description: "Start from image frame_0000.png",
              },
              {
                title: (
                  <BlogHighlighter key="-i">-i frame_%04d.png</BlogHighlighter>
                ),
                description: "Read frames in order: 0000, 0001, 0002, etc.",
              },
              {
                title: (
                  <BlogHighlighter key="-vcodec">-vcodec mpeg4</BlogHighlighter>
                ),
                description: "Use MPEG-4 video codec",
              },
              {
                title: (
                  <BlogHighlighter key="-pix_fmt">
                    -pix_fmt yuv420p
                  </BlogHighlighter>
                ),
                description:
                  "Required format for wide compatibility (especially iOS/Android players)",
              },
              {
                title: <BlogHighlighter key="-an">-an</BlogHighlighter>,
                description: "Skip audio (you can add later if needed)",
              },
            ]}
          />
        </section>

        <section className="mb-16 space-y-7">
          <BlogSubTitle>
            <Package className="inline-block mr-2 text-orange-400" size={20} />{" "}
            Output Example
          </BlogSubTitle>
          <BlogContent>
            Let&apos;s say you recorded for 5 seconds at 10 FPS. You&apos;ll
            get:
          </BlogContent>
          <BlogList
            items={[
              <React.Fragment key="pngs">
                50 PNG images inside{" "}
                <BlogHighlighter>tempDir/frames/</BlogHighlighter>{" "}
              </React.Fragment>,
              <React.Fragment key="mp4">
                A single .mp4 file like{" "}
                <BlogHighlighter>output_video.mp4</BlogHighlighter> in your temp
                directory
              </React.Fragment>,
              "That video is playable, shareable, and storable, all from a widget & visuals.",
            ]}
          />
        </section>

        <section className="mb-16 space-y-7">
          <BlogSubTitle>
            <Lightbulb className="inline-block mr-2 text-primary" size={20} />{" "}
            What You Can Customize
          </BlogSubTitle>
          <BlogTable
            title="Feature"
            description="How to change"
            data={[
              {
                title: "Frame rate",
                description: (
                  <>
                    Change <BlogHighlighter>-framerate</BlogHighlighter> and
                    timer interval
                  </>
                ),
              },
              {
                title: "Resolution",
                description: (
                  <>
                    Change <BlogHighlighter>pixelRatio</BlogHighlighter> or
                    scale images before FFmpeg
                  </>
                ),
              },
              {
                title: "Add Audio",
                description: (
                  <>
                    Add <BlogHighlighter>-i audio.mp3</BlogHighlighter> before{" "}
                    <BlogHighlighter>-i image</BlogHighlighter>, then{" "}
                    <BlogHighlighter>-shortest</BlogHighlighter>
                  </>
                ),
              },
              {
                title: "Export Path",
                description: (
                  <>
                    Change <BlogHighlighter>outputVideoPath</BlogHighlighter>as
                    per your needs
                  </>
                ),
              },
            ]}
          />
        </section>

        <section className="mb-16 space-y-5">
          <BlogSubTitle>
            <Pin className="inline-block mr-2 text-orange-400" size={20} />{" "}
            Summary of FFmpeg Command Flow:
          </BlogSubTitle>
          <CodeBlock
            language="dart"
            filename="app/main.dart"
            code={`PNG images (frame_0000.png, ...)  \n     ↓  \nFFmpeg processes each frame  \n     ↓  \nCompress into MP4 with MPEG4 codec  \n     ↓  \n✅ Final video created`}
          />
        </section>

        <BlogTips
          title="Pro Tip"
          description="Keep frame count low and resolution reasonable for better performance!"
        />

        <RelatedNextBlogButton currentSlug={pathname} currentTags={tags} />
      </div>
    </div>
  );
};
