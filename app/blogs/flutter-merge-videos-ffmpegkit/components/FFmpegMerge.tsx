"use client";
import {
  BlogContent,
  BlogHighlighter,
  BlogKeyValue,
  BlogList,
  BlogSubTitle,
  WriterInfo,
} from "@/app/components/BlogComponents";
import CustomTitle from "@/components/custom/CustomTitle";
import { CodeBlock } from "@/components/ui/code-block";
import { BLOG_AUTHORS, BLOG_PREVIEWS } from "@/lib/constants";
import {
  Clapperboard,
  Package,
  Rocket,
  Brain,
  AlertTriangle,
  CheckCircle,
  Link2,
  Lightbulb,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import RelatedNextBlogButton from "@/app/components/RelatedNextBlogButton";
import TagsList from "@/components/custom/TagsList";

const FFmpegMergePage = () => {
  const author = BLOG_AUTHORS[0];

  const pathname = usePathname().split("/")[2];
  const tags = BLOG_PREVIEWS.find((blog) => blog.slug === pathname)?.tags || [];
  return (
    <div className="min-h-screen text-white p-6 md:p-10 leading-relaxed">
      <div className="max-w-4xl mx-auto space-y-12">
        <header className="md:my-10">
          <TagsList tags={tags} />
          <CustomTitle
            headingClassName="!text-start"
            heading={
              <>
                <Clapperboard
                  className="inline-block mr-2 text-primary"
                  size={24}
                />{" "}
                Merge Two Videos in Flutter Using{" "}
                <span className="secondary-gradient-text">FFmpegKit</span>
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

        <BlogSubTitle className="!mb-0">
          <Package className="inline-block mr-2 text-orange-400" size={20} />{" "}
          Packages Required
        </BlogSubTitle>
        <BlogList
          items={[
            <BlogKeyValue
              key="ffmpeg"
              title={
                <BlogHighlighter>ffmpeg_kit_flutter_full_gpl</BlogHighlighter>
              }
              value="to run FFmpeg commands in Dart"
            />,
            <BlogKeyValue
              key="path_provider"
              title={<BlogHighlighter>path_provider</BlogHighlighter>}
              value="to access temporary directories"
            />,
          ]}
        />

        <BlogSubTitle className="!mt-10">
          <Rocket className="inline-block mr-2 text-primary" size={20} />{" "}
          Overview of the Merging Function
        </BlogSubTitle>
        <BlogContent className="!mb-5">
          The main Dart function responsible for merging and overlaying the
          videos is:
        </BlogContent>
        <CodeBlock
          language="dart"
          filename="app/main.dart"
          code={`Future<String> mergerVideoAndOverlay(...)`}
        />

        <BlogSubTitle className="w-full">
          <Brain className="inline-block mr-2 text-orange-400" size={20} />{" "}
          Step-by-Step Explanation of the Code
        </BlogSubTitle>
        <BlogSubTitle> 1. Getting Overlay Position</BlogSubTitle>
        <CodeBlock
          language="dart"
          filename="app/main.dart"
          code={`String position = getOverlayPosition(logoPosition);`}
        />
        <BlogContent className="!mt-0 pt-0">
          This method fetches the correct coordinates (e.g.,{" "}
          <BlogHighlighter>W-w:0</BlogHighlighter>) for the logo overlay based
          on user selection (top-left, top-right, etc.).
        </BlogContent>

        <BlogSubTitle>2. Create Temporary Output Paths</BlogSubTitle>
        <CodeBlock
          language="dart"
          filename="app/main.dart"
          code={`final tempDir = await getTemporaryDirectory();
final resizedPath = 'TEMP_DIR_PATH/resized_...';
final outputPath = 'TEMP_DIR_PATH/final_output_...';`}
        />
        <BlogContent>
          These are temporary paths for storing intermediate and final merged
          videos.
        </BlogContent>

        <BlogSubTitle>3. Resize the Original Camera Video</BlogSubTitle>
        <CodeBlock
          language="dart"
          filename="app/main.dart"
          code={`final resizeSession = await FFmpegKit.executeWithArguments([
  '-y',
  '-i', cameraVideoPath,
  '-vf', 'scale=1080:1920:force_original_aspect_ratio=decrease',
  '-r', '24',
  resizedPath,
]);`}
        />
        <BlogContent>
          This step ensures the camera video fits the standard mobile resolution{" "}
          <b>(1080x1920)</b> while maintaining its aspect ratio.
        </BlogContent>

        <BlogSubTitle>4. Build FFmpeg Input List</BlogSubTitle>
        <CodeBlock
          language="dart"
          filename="app/main.dart"
          code={`'-i', timeOverlayVideoPath, // [0:v]
'-i', logoOverlayImageFilePath, // [1:v] if logo
'-i', resizedPath, // [2:v] if logo`}
        />
        <BlogContent>
          We prepare FFmpeg input streams depending on whether the logo overlay
          is required or not.
        </BlogContent>

        <BlogSubTitle>5. Construct filter_complex</BlogSubTitle>
        <BlogContent className="!mb-5">
          The <BlogHighlighter>filter_complex</BlogHighlighter> section is the
          most powerful part of FFmpeg:
        </BlogContent>
        <CodeBlock
          language="dart"
          filename="app/main.dart"
          code={`// Scale time overlay
'[0:v]scale=width:height[ovrl1];'
// Overlay time on base video
'[resized_video][ovrl1]overlay=0:0[tmp1];'
// If logo is included
'[1:v]scale=width:height[ovrl2];[tmp1][ovrl2]overlay=position[v]'
// If no logo
'[tmp1]copy[v]'`}
        />
        <BlogList
          className="!mt-5"
          items={[
            "Resize the timestamp overlay",
            <>
              Apply it at position <BlogHighlighter>(0,0)</BlogHighlighter>
            </>,
            "If logo is present, scale and overlay it using dynamic coordinates",
          ]}
        />

        <BlogSubTitle>6. Add Output Flags and Run Merge</BlogSubTitle>
        <CodeBlock
          language="dart"
          filename="app/main.dart"
          code={`'-filter_complex', filter,
'-map', '[v]',
'-pix_fmt', 'yuv420p',
'-vsync', 'cfr',
'-r', '24',
outputPath,`}
        />
        <BlogContent>
          These FFmpeg options finalize the encoding format and output video
          path.
        </BlogContent>

        <BlogSubTitle>7. Verify the Merge</BlogSubTitle>
        <CodeBlock
          language="dart"
          filename="app/main.dart"
          code={`final mergeSession = await FFmpegKit.executeWithArguments(ffmpegCommand);
final fileExists = await File(outputPath).exists();`}
        />
        <BlogContent>
          Once FFmpeg finishes, we check if the final file was successfully
          created.
        </BlogContent>

        <BlogSubTitle>
          <AlertTriangle className="inline-block mr-2 text-primary" size={20} />{" "}
          Error Handling
        </BlogSubTitle>
        <CodeBlock
          language="dart"
          filename="app/main.dart"
          code={`catch (e, stacktrace) {
  CustomLogger.error("Error in process and merge: $e");
  rethrow;
}`}
        />
        <BlogContent>
          All exceptions and FFmpeg logs are captured for debugging and logged
          using a custom logger.
        </BlogContent>

        <BlogSubTitle>
          <CheckCircle
            className="inline-block mr-2 text-orange-400"
            size={20}
          />{" "}
          Output Example
        </BlogSubTitle>
        <BlogContent>
          You get a new video with the timestamp overlaid from a separate video
          file, and optionally a logo in your chosen corner.
        </BlogContent>

        <BlogSubTitle>
          <Link2 className="inline-block mr-2 text-primary" size={20} /> Useful
          Links
        </BlogSubTitle>
        <BlogList
          items={[
            <Link
              key="ffmpeg-github"
              href="https://github.com/tanersener/ffmpeg-kit"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400 hover:text-sky-600"
            >
              FFmpegKit GitHub
            </Link>,
            <Link
              key="ffmpeg-flutter-gpl"
              href="https://pub.dev/packages/ffmpeg_kit_flutter_full_gpl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400 hover:text-sky-600"
            >
              FFmpegKit Flutter GPL Package
            </Link>,
            <Link
              key="ffmpeg-filters"
              href="https://ffmpeg.org/ffmpeg-filters.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400 hover:text-sky-600"
            >
              FFmpeg Filters Documentation
            </Link>,
          ]}
        />

        <BlogSubTitle>
          <Lightbulb className="inline-block mr-2 text-orange-400" size={20} />{" "}
          Final Words
        </BlogSubTitle>
        <BlogContent>
          This method gives you complete flexibility to{" "}
          <b>overlay dynamic content like timestamps or branding</b> in Flutter.
          With <BlogHighlighter>FFmpegKit</BlogHighlighter>, it&apos;s now
          easier than ever to build <b>professional video editing features</b>{" "}
          right inside your mobile app.
        </BlogContent>
        <BlogContent>
          If you found this helpful, consider sharing or bookmarking this page!
        </BlogContent>
        <RelatedNextBlogButton currentSlug={pathname} currentTags={tags} />
      </div>
    </div>
  );
};

export default FFmpegMergePage;
