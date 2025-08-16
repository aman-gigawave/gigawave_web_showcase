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
import { usePathname } from "next/navigation";
import React from "react";
import RelatedNextBlogButton from "@/app/components/RelatedNextBlogButton";
import TagsList from "@/components/custom/TagsList";
import {
  Activity,
  Star,
  Lightbulb,
  Hammer,
  Shuffle,
  Settings,
  Hand,
  Disc,
  Map,
  Palette,
  CheckCircle,
  Rocket,
  Wrench,
} from "lucide-react";

const FlutterFieldingPositionPage = () => {
  const author = BLOG_AUTHORS[0];

  const pathname = usePathname().split("/")[2];
  const tags = BLOG_PREVIEWS.find((blog) => blog.slug === pathname)?.tags || [];
  return (
    <div className="min-h-screen text-white p-6 md:p-10 leading-relaxed">
      <div className="max-w-4xl mx-auto space-y-10">
        <header className="md:my-10">
          <TagsList tags={tags} />
          <CustomTitle
            headingClassName="!text-start"
            heading={
              <>
                <Activity
                  className="inline-block mr-2 text-primary"
                  size={24}
                />{" "}
                Flutter Fielding Position Picker Using{" "}
                <span className="secondary-gradient-text">CustomPainter</span>
              </>
            }
          />
          <WriterInfo
            image={author.image}
            name={author.name}
            role={author.role}
            readTime="5"
            date="June 14, 2025"
          />
        </header>

        <BlogSubTitle>
          <Star className="inline-block mr-2 text-primary" size={20} /> What We
          Are Building
        </BlogSubTitle>
        <BlogContent>
          We&apos;ll create a screen (
          <BlogHighlighter>PitchScreen</BlogHighlighter>) that shows a circular
          cricket field. When the user taps anywhere inside this field, a line
          will animate from the pitch center to the tap point, and it will
          automatically calculate the fielding position based on the angle. A
          button lets users save their selected position.
        </BlogContent>

        <BlogSubTitle>
          <Lightbulb className="inline-block mr-2 text-orange-400" size={20} />{" "}
          Key Concepts Covered
        </BlogSubTitle>
        <BlogList
          items={[
            <>
              Flutter <BlogHighlighter>GestureDetector</BlogHighlighter> for tap
              detection
            </>,
            <>
              Drawing with <BlogHighlighter>CustomPainter</BlogHighlighter>
            </>,
            <>
              Angle calculation using <BlogHighlighter>atan2</BlogHighlighter>
            </>,
            <>
              Flutter animations using{" "}
              <BlogHighlighter>AnimationController</BlogHighlighter>
            </>,
            <>
              Dynamic UI with <BlogHighlighter>ValueNotifier</BlogHighlighter>{" "}
              and <BlogHighlighter>ValueListenableBuilder</BlogHighlighter>
            </>,
          ]}
        />

        <BlogSubTitle>
          <Hammer className="inline-block mr-2 text-primary" size={20} />{" "}
          PitchScreen Breakdown
        </BlogSubTitle>
        <CodeBlock
          language="dart"
          filename="app/main.dart"
          code={`class PitchScreen extends StatefulWidget {
  @override
  _PitchScreenState createState() => _PitchScreenState();
}`}
        />
        <BlogContent>
          This is the entry point. It&apos;s a stateful widget because we need
          to trigger animations and update the UI dynamically.
        </BlogContent>

        <BlogSubTitle>
          <Shuffle className="inline-block mr-2 text-orange-400" size={20} />{" "}
          State Management and Animation
        </BlogSubTitle>
        <CodeBlock
          language="dart"
          filename="app/main.dart"
          code={`late AnimationController _controller;
late Animation<Offset> _animation;
ValueNotifier<Offset> endPoint = ValueNotifier(Offset.zero);`}
        />
        <BlogList
          items={[
            <BlogKeyValue
              key="controller"
              title={<BlogHighlighter>_controller</BlogHighlighter>}
              value="handles animation timing"
            />,
            <BlogKeyValue
              key="animation"
              title={<BlogHighlighter>_animation</BlogHighlighter>}
              value="moves a line from the center to the tap position"
            />,
            <BlogKeyValue
              key="endPoint"
              title={<BlogHighlighter>endPoint</BlogHighlighter>}
              value="updates dynamically when the user taps"
            />,
          ]}
        />

        <BlogSubTitle>
          <Settings className="inline-block mr-2 text-primary" size={20} />{" "}
          Initializing Animation
        </BlogSubTitle>
        <CodeBlock
          language="dart"
          filename="app/main.dart"
          code={`_controller = AnimationController(
  vsync: this,
  duration: Duration(milliseconds: 250),
);

_animation = Tween<Offset>(
  begin: startPoint,
  end: endPoint.value,
).animate(CurvedAnimation(parent: _controller, curve: Curves.easeInOut));`}
        />
        <BlogContent>
          This defines a short, smooth animation from the pitch center to the
          user&apos;s tapped position.
        </BlogContent>

        <BlogSubTitle>
          <Hand className="inline-block mr-2 text-orange-400" size={20} />{" "}
          Handling Taps
        </BlogSubTitle>
        <CodeBlock
          language="dart"
          filename="app/main.dart"
          code={`GestureDetector(
  onTapDown: (TapDownDetails details) {
    _selectedFieldingPosition = getFieldingPosition(
      _startAnimation(details.localPosition, MediaQuery.of(context).size),
    );
    endPoint.notifyListeners();
  },
)`}
        />
        <BlogContent>When the user taps, the app:</BlogContent>
        <BlogList
          items={[
            "Calculates the angle",
            <>
              Maps the angle to a{" "}
              <BlogHighlighter>FIELDINGPOSITION</BlogHighlighter>
            </>,
            "Animates the line to that point",
          ]}
        />

        <BlogSubTitle>
          <Disc className="inline-block mr-2 text-primary" size={20} /> Angle
          Logic
        </BlogSubTitle>
        <CodeBlock
          language="dart"
          filename="app/main.dart"
          code={`double calculateAngle(Offset center, Offset target) {
  double angleRadians = atan2(target.dy - center.dy, target.dx - center.dx);
  return angleRadians * (180 / pi); // in degrees
}`}
        />
        <BlogContent>
          This function gives the angle from the pitch center to the user&apos;s
          tap.
        </BlogContent>

        <BlogSubTitle>
          <Map className="inline-block mr-2 text-orange-400" size={20} />{" "}
          Mapping Angle to Fielding Position
        </BlogSubTitle>
        <CodeBlock
          language="dart"
          filename="app/main.dart"
          code={`FIELDINGPOSITION getFieldingPosition(double angle) {
  double adjustedAngle = (angle + 250) % 360;
  ...
}`}
        />
        <BlogContent>
          We divide the circle into 8 slices (each 45°) and map each to a
          cricket fielding position like:
        </BlogContent>
        <BlogList
          items={[
            <BlogHighlighter key="LONG_OFF">LONG_OFF</BlogHighlighter>,
            <BlogHighlighter key="THIRD_MAN">THIRD_MAN</BlogHighlighter>,
            <BlogHighlighter key="DEEP_POINT">DEEP_POINT</BlogHighlighter>,
            "etc.",
          ]}
        />

        <BlogSubTitle>
          <Palette className="inline-block mr-2 text-primary" size={20} />{" "}
          Drawing the Field: CircleDividerPainter
        </BlogSubTitle>
        <CodeBlock
          language="dart"
          filename="app/main.dart"
          code={`canvas.drawCircle(center, bigRadius, bigCirclePaint);
canvas.drawCircle(center, bigRadius * .93, smallCirclePaintLine);
canvas.drawCircle(center, smallRadius, smallCirclePaint);`}
        />
        <BlogContent>
          - Draws a big green circle (field)
          <br />- A slightly smaller stroked circle (boundary)
          <br />- A small center circle (pitch)
          <br />- A rectangular pitch using{" "}
          <BlogHighlighter>canvas.drawRect</BlogHighlighter>
        </BlogContent>

        <BlogSubTitle>
          <Map className="inline-block mr-2 text-orange-400" size={20} />{" "}
          Division Lines and Labels
        </BlogSubTitle>
        <CodeBlock
          language="dart"
          filename="app/main.dart"
          code={`for (int i = 0; i < 8; i++) {
  double angle = (pi / 4) * i;
  Offset end = Offset(centerX + bigRadius * .9 * cos(angle), ...);
  canvas.drawLine(center, end, linePaint);
}`}
        />
        <BlogContent>
          Splits the field into 8 sections using lines. Each angle maps to a
          fielding label using{" "}
          <BlogHighlighter>getBattingAngleFromRadians()</BlogHighlighter>
        </BlogContent>

        <BlogSubTitle>
          <Palette className="inline-block mr-2 text-primary" size={20} />{" "}
          Drawing Position Labels
        </BlogSubTitle>
        <CodeBlock
          language="dart"
          filename="app/main.dart"
          code={`TextPainter textPainter = TextPainter(
  text: TextSpan(
    text: "FIELDING_POSITION_NAME",
    style: AppTextstyles.LowText(...),
  ),
);`}
        />
        <BlogContent>
          Adds readable labels like <BlogHighlighter>LONG_ON</BlogHighlighter>,{" "}
          <BlogHighlighter>DEEP_POINT</BlogHighlighter> on each arc
        </BlogContent>

        <BlogSubTitle>
          <CheckCircle
            className="inline-block mr-2 text-orange-400"
            size={20}
          />{" "}
          Saving the Selection
        </BlogSubTitle>
        <CodeBlock
          language="dart"
          filename="app/main.dart"
          code={`AppButton(
  onPressed: () {
    if (_selectedFieldingPosition != null) {
      Get.back<FIELDINGPOSITION>(result: _selectedFieldingPosition);
    } else {
      AppCommon.toast(...);
    }
  },
  title: "save",
)`}
        />
        <BlogContent>
          Tapping this button returns the chosen{" "}
          <BlogHighlighter>FIELDINGPOSITION</BlogHighlighter> to the previous
          screen. If none is selected, a toast is shown.
        </BlogContent>

        <BlogSubTitle>
          <Rocket className="inline-block mr-2 text-primary" size={20} />{" "}
          Summary
        </BlogSubTitle>
        <BlogContent>
          With just <BlogHighlighter>GestureDetector</BlogHighlighter>,{" "}
          <BlogHighlighter>CustomPainter</BlogHighlighter>, and animation, we
          built a beautiful, interactive way to select fielding positions on a
          cricket field. This can be extended to allow multiple player markers,
          edit positions, or integrate with scoring systems.
        </BlogContent>

        <BlogSubTitle>
          <Wrench className="inline-block mr-2 text-orange-400" size={20} />{" "}
          Potential Improvements
        </BlogSubTitle>
        <BlogList
          items={[
            "Add player icons where tapped",
            "Allow zooming and panning the field",
            "Add undo/reset options",
            "Show dynamic player stats at each position",
          ]}
        />
        <RelatedNextBlogButton currentSlug={pathname} currentTags={tags} />
      </div>
    </div>
  );
};

export default FlutterFieldingPositionPage;
