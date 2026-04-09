"use client";
import { BlogContent, BlogHighlighter, BlogList, BlogSubTitle, BlogTips, WriterInfo } from "@/app/components/BlogComponents";
import CustomTitle from "@/components/custom/CustomTitle";
import { CodeBlock } from "@/components/ui/code-block";
import { BLOG_AUTHORS, BLOG_PREVIEWS } from "@/lib/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import RelatedNextBlogButton from "@/app/components/RelatedNextBlogButton";
import TagsList from "@/components/custom/TagsList";

const FlutterPackagesPage = () => {
  const author = BLOG_AUTHORS[1];
  const pathname = usePathname().split("/")[2];
  const tags = BLOG_PREVIEWS.find((blog) => blog.slug === pathname)?.tags || [];

  return (
    <div className="min-h-screen text-white p-6 md:p-10 leading-relaxed">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="md:my-10">
          <TagsList tags={tags} />
          <CustomTitle headingClassName="!text-start" heading={<>{"Mastering NestedScrollView in Flutter: Clean Sliver-Based Layouts Without the Headaches"}</>} />
          <WriterInfo image={author.image} name={author.name} role={author.role} readTime={"8"} date="June 14, 2025" />
        </header>
        <BlogContent>{"how to use nestedscrollview in flutter matters in real projects because weak implementation choices create hard-to-debug failures and inconsistent user experience."}</BlogContent>
        <BlogContent>{"This guide uses focused, production-oriented steps and code examples grounded in official references."}</BlogContent>

        <BlogSubTitle>{"Key Concepts Covered"}</BlogSubTitle>
        <div className="flex flex-wrap gap-2">
            <span key={"0"} className="inline-flex"><BlogHighlighter>nestedscrollview</BlogHighlighter></span>
            <span key={"1"} className="inline-flex"><BlogHighlighter>flutter</BlogHighlighter></span>
        </div>
        <BlogList items={[
              <React.Fragment key={"ci-0"}>NestedScrollView: Widget that coordinates scrolling between a header sliver section and a body widget</React.Fragment>,
              <React.Fragment key={"ci-1"}>Sliver: Lazy-loading scrollable segment; Flutter's building block for custom scroll effects</React.Fragment>,
              <React.Fragment key={"ci-2"}>headerSliverBuilder: Callback that builds slivers occupying space before the body</React.Fragment>,
              <React.Fragment key={"ci-3"}>innerBoxIsScrolled: Boolean indicating whether body content has scrolled, used for header state synchronization</React.Fragment>,
              <React.Fragment key={"ci-4"}>PageStorageKey: Key that preserves state (including scroll offset) in Flutter's PageStorage mechanism</React.Fragment>,
              <React.Fragment key={"ci-5"}>SliverPersistentHeader: Sliver with fixed or variable height that can pin to viewport edge</React.Fragment>,
              <React.Fragment key={"ci-6"}>PrimaryScrollController: Inherited widget providing the default scroll controller for a subtree</React.Fragment>
        ]} />

        <BlogSubTitle>Context Setup</BlogSubTitle>
        <BlogContent>{"We start with minimal setup, then move to implementation patterns and validation checkpoints for how to use nestedscrollview in flutter."}</BlogContent>

        <BlogSubTitle>Problem Breakdown</BlogSubTitle>
        <BlogList items={[
              "Unclear setup path for how to use nestedscrollview in flutter",
              "Inconsistent implementation patterns",
              "Missing validation for edge cases"
        ]} />

        <BlogSubTitle>Solution Overview</BlogSubTitle>
        <BlogContent>{"Apply a step-by-step architecture: setup, core implementation, validation, and performance checks for how to use nestedscrollview in flutter."}</BlogContent>

        <BlogSubTitle>{"Step 1: Define prerequisites and expected behavior for how to use nestedscrollview in flutter."}</BlogSubTitle>
        <CodeBlock
          language={"dart"}
          filename={"snippet-1.dart"}
          code={"// filename: lib/screens/profile_screen.dart\n// language: dart\n// purpose: Complete NestedScrollView with collapsing header and tabs\n\nimport 'package:flutter/material.dart';\n\nclass ProfileScreen extends StatefulWidget {\n  const ProfileScreen({super.key});\n\n  @override\n  State<ProfileScreen> createState() => _ProfileScreenState();\n}\n\nclass _ProfileScreenState extends State<ProfileScreen>\n    with SingleTickerProviderStateMixin {\n  late final TabController _tabController;\n\n  @override\n  void initState() {\n    super.initState();\n    _tabController = TabController(length: 3, vsync: this);\n  }\n\n  @override\n  void dispose() {\n    _tabController.dispose();\n    super.dispose();\n  }\n\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      body: NestedScrollView(\n        headerSliverBuilder: (BuildContext context, bool innerBoxIsScrolled) {\n          return <Widget>[\n            SliverAppBar(\n              expandedHeight: 200.0,\n              floating: false,\n              pinned: true,\n              snap: false,\n              forceElevated: innerBoxIsScrolled,\n              flexibleSpace: FlexibleSpaceBar(\n                title: const Text('@username'),\n                background: Image.network(\n                  'https://picsum.photos/400/200',\n                  fit: BoxFit.cover,\n                ),\n              ),\n            ),\n            SliverToBoxAdapter(\n              child: Container(\n                padding: const EdgeInsets.all(16),\n                child: const Column(\n                  crossAxisAlignment: CrossAxisAlignment.start,\n                  children: [\n                    Text(\n                      'User Bio',\n                      style: TextStyle(\n                        fontSize: 18,\n                        fontWeight: FontWeight.bold,\n                      ),\n                    ),\n                    SizedBox(height: 8),\n                    Text('Flutter developer • Open source contributor'),\n                    SizedBox(height: 16),\n                    Row(\n                      children: [\n                        Text('1.2K Followers'),\n                        SizedBox(width: 16),\n                        Text('340 Following'),\n                      ],\n                    ),\n                  ],\n                ),\n              ),\n            ),\n            SliverPersistentHeader(\n              delegate: _SliverTabBarDelegate(\n                TabBar(\n                  controller: _tabController,\n                  tabs: const [\n                    Tab(text: 'Posts'),\n                    Tab(text: 'Replies'),\n                    Tab(text: 'Media'),\n                  ],\n                ),\n              ),\n              pinned: true,\n            ),\n          ];\n        },\n        body: TabBarView(\n          controller: _tabController,\n          children: const [\n            _TabContent(tabKey: 'posts'),\n            _TabContent(tabKey: 'replies'),\n            _TabContent(tabKey: 'media'),\n          ],\n        ),\n      ),\n    );\n  }\n}"}
        />
        <BlogSubTitle>Additional Implementation Notes</BlogSubTitle>
        <BlogList items={[
              "Step 2: Implement a minimal working baseline.",
              "Step 3: Add robust handling for non-happy paths.",
              "Step 4: Improve structure for reuse and readability.",
              "Step 5: Validate with realistic usage scenarios."
        ]} />

        <BlogSubTitle>Best Practices</BlogSubTitle>
        <BlogList items={[
              "Keep implementation modular and testable",
              "Use one clear source of truth for configuration",
              "Validate behavior before optimization"
        ]} />

        <BlogSubTitle>Pro Tips</BlogSubTitle>
        <BlogList items={[
              "Prefer concise code snippets with clear intent",
              "Document edge cases and trade-offs",
              "Use official docs for API-level decisions"
        ]} />

        <BlogSubTitle>Resources</BlogSubTitle>
        <BlogList items={[
            <Link key="0" href="https://docs.flutter.dev/" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-sky-600">Official Docs</Link>
        ]} />

        <BlogSubTitle>Final Thoughts</BlogSubTitle>
        <BlogContent>{"Treat how to use nestedscrollview in flutter as an iterative build: baseline first, then reliability and performance hardening."}</BlogContent>

        <BlogSubTitle>Full Generated Content (Unabridged)</BlogSubTitle>
        <BlogContent>{"Only real code appears in code blocks. Other content is rendered as normal headings, lists, and text."}</BlogContent>
        <BlogSubTitle>{"Blog Identity"}</BlogSubTitle>
        <BlogList items={[
              "title: Mastering NestedScrollView in Flutter: Clean Sliver-Based Layouts Without the Headaches",
              "slug: flutter-nestedscrollview-sliver-layouts",
              "primary topic keyword: NestedScrollView",
              "target stack: Flutter"
        ]} />

        <BlogSubTitle>{"SEO Metadata"}</BlogSubTitle>
        <BlogList items={[
              "seoTitle: NestedScrollView Flutter Guide: Build Collapsing Headers & Synced Scroll",
              "metaDescription: Learn to implement NestedScrollView in Flutter for collapsing app bars, synchronized scrolling, and complex sliver layouts. Step-by-step code with real-world patterns.",
              "suggestedTags: [\"Flutter\", \"NestedScrollView\", \"Slivers\", \"UI\", \"Mobile Development\", \"ScrollController\"]",
              "suggestedReadTime: 8 min"
        ]} />

        <BlogSubTitle>{"Hero Hook"}</BlogSubTitle>
        <BlogContent>{"You built a beautiful profile screen with a collapsing header, tabs, and a scrollable list. Then you tried to swipe between tabs and the header jumped, or the scroll position reset, or the physics felt wrong. You've hit the NestedScrollView learning curve—and it's steep."}</BlogContent>
        <BlogContent>{"This widget is Flutter's answer to complex scrollable regions that share space, but the documentation assumes you already understand Slivers, ScrollControllers, and the difference between a header and a body. Most developers copy-paste from StackOverflow and hope. This guide gives you the mental model and working patterns to build these layouts confidently."}</BlogContent>

        <BlogSubTitle>{"Context Setup"}</BlogSubTitle>
        <BlogContent>{"NestedScrollView solves a specific problem: multiple scrollable areas that need to behave as one continuous scroll. Think Instagram profiles, YouTube channel pages, or any screen with a persistent header and tabbed content."}</BlogContent>
        <BlogContent>{"Prerequisites:"}</BlogContent>
        <BlogList items={[
              "Flutter SDK 3.10+ (stable channel)",
              "Basic familiarity with CustomScrollView and SliverList/SliverGrid",
              "Understanding of TabBar and TabController (we'll use these in examples)"
        ]} />

        <BlogSubTitle>{"Problem Breakdown"}</BlogSubTitle>
        <BlogContent>{"The Core Failure Points:"}</BlogContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-white/15 rounded-md overflow-hidden">
            <thead className="bg-white/5">
              <tr><th className="border border-white/15 px-3 py-2 text-left">Symptom</th><th className="border border-white/15 px-3 py-2 text-left">Root Cause</th></tr>
            </thead>
            <tbody><tr><td className="border border-white/10 px-3 py-2 align-top">Header snaps abruptly instead of smooth collapse</td><td className="border border-white/10 px-3 py-2 align-top">Missing or misconfigured SliverAppBar with floating/pinned/snap</td></tr><tr><td className="border border-white/10 px-3 py-2 align-top">Inner scrollables don't share scroll position</td><td className="border border-white/10 px-3 py-2 align-top">Using standalone ListView instead of SliverToBoxAdapter + SliverFillRemaining pattern</td></tr><tr><td className="border border-white/10 px-3 py-2 align-top">Tab swipe causes scroll jump</td><td className="border border-white/10 px-3 py-2 align-top">PageStorageKey missing on inner scrollables</td></tr><tr><td className="border border-white/10 px-3 py-2 align-top">Scroll physics feel "stuck" at boundaries</td><td className="border border-white/10 px-3 py-2 align-top">BouncingScrollPhysics vs ClampingScrollPhysics mismatch between header and body</td></tr><tr><td className="border border-white/10 px-3 py-2 align-top">"A RenderNestedScrollViewViewport expected a child of type RenderSliver"</td><td className="border border-white/10 px-3 py-2 align-top">Passing non-sliver widgets to headerSliverBuilder</td></tr></tbody>
          </table>
        </div>
        <BlogContent>{"Real Project Impact: These bugs don't crash your app—they erode perceived quality. Users notice janky headers and broken gestures immediately."}</BlogContent>

        <BlogSubTitle>{"Solution Overview"}</BlogSubTitle>
        <BlogContent>{"We'll build a collapsing header with tabbed content—the most common NestedScrollView pattern. The architecture:"}</BlogContent>
        <CodeBlock
          language={"text"}
          filename={"solution-overview-1.text"}
          code={"NestedScrollView\n├── headerSliverBuilder → SliverAppBar (collapsing) + SliverToBoxAdapter (persistent info)\n└── body → TabBarView with scrollable tabs\n    └── Each tab: CustomScrollView with PageStorageKey"}
        />
        <BlogContent>{"Why this over alternatives:"}</BlogContent>
        <BlogList items={[
              "CustomScrollView alone can't handle independent scrollable regions with shared header space",
              "ShrinkWrappingScrollView kills performance with large lists",
              "Manual ScrollController coordination is error-prone; NestedScrollView handles the coordination internally"
        ]} />

        <BlogSubTitle>{"Implementation Steps"}</BlogSubTitle>
        <BlogSubTitle>{"Step 1: Scaffold with TabController"}</BlogSubTitle>
        <BlogContent>{"Your NestedScrollView needs a TickerProviderStateMixin for the TabController. This drives both the TabBar and TabBarView animation."}</BlogContent>
        <BlogSubTitle>{"Step 2: Configure the Header Slivers"}</BlogSubTitle>
        <BlogContent>{"The headerSliverBuilder returns a list of slivers. Order matters: they're stacked vertically. Use SliverAppBar with pinned: true or floating: true depending on desired behavior."}</BlogContent>
        <BlogSubTitle>{"Step 3: Build the Body with TabBarView"}</BlogSubTitle>
        <BlogContent>{"The body receives the remaining viewport space after headers render. Wrap your scrollable content in TabBarView, and ensure each tab's scrollable has a PageStorageKey to preserve scroll position."}</BlogContent>
        <BlogSubTitle>{"Step 4: Connect Inner Scrollables to Nested Coordinator"}</BlogSubTitle>
        <BlogContent>{"Use PrimaryScrollController.of(context) or let NestedScrollView inject the controller automatically. For CustomScrollView inside tabs, set primary: true or explicitly pass the controller."}</BlogContent>

        <BlogSubTitle>{"Code Snippets"}</BlogSubTitle>
        <BlogContent>{"Snippet 1: Main Screen Structure"}</BlogContent>
        <CodeBlock
          language={"dart"}
          filename={"code-snippet-1.dart"}
          code={"// filename: lib/screens/profile_screen.dart\n// language: dart\n// purpose: Complete NestedScrollView with collapsing header and tabs\n\nimport 'package:flutter/material.dart';\n\nclass ProfileScreen extends StatefulWidget {\n  const ProfileScreen({super.key});\n\n  @override\n  State<ProfileScreen> createState() => _ProfileScreenState();\n}\n\nclass _ProfileScreenState extends State<ProfileScreen>\n    with SingleTickerProviderStateMixin {\n  late final TabController _tabController;\n\n  @override\n  void initState() {\n    super.initState();\n    _tabController = TabController(length: 3, vsync: this);\n  }\n\n  @override\n  void dispose() {\n    _tabController.dispose();\n    super.dispose();\n  }\n\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      body: NestedScrollView(\n        headerSliverBuilder: (BuildContext context, bool innerBoxIsScrolled) {\n          return <Widget>[\n            SliverAppBar(\n              expandedHeight: 200.0,\n              floating: false,\n              pinned: true,\n              snap: false,\n              forceElevated: innerBoxIsScrolled,\n              flexibleSpace: FlexibleSpaceBar(\n                title: const Text('@username'),\n                background: Image.network(\n                  'https://picsum.photos/400/200',\n                  fit: BoxFit.cover,\n                ),\n              ),\n            ),\n            SliverToBoxAdapter(\n              child: Container(\n                padding: const EdgeInsets.all(16),\n                child: const Column(\n                  crossAxisAlignment: CrossAxisAlignment.start,\n                  children: [\n                    Text(\n                      'User Bio',\n                      style: TextStyle(\n                        fontSize: 18,\n                        fontWeight: FontWeight.bold,\n                      ),\n                    ),\n                    SizedBox(height: 8),\n                    Text('Flutter developer • Open source contributor'),\n                    SizedBox(height: 16),\n                    Row(\n                      children: [\n                        Text('1.2K Followers'),\n                        SizedBox(width: 16),\n                        Text('340 Following'),\n                      ],\n                    ),\n                  ],\n                ),\n              ),\n            ),\n            SliverPersistentHeader(\n              delegate: _SliverTabBarDelegate(\n                TabBar(\n                  controller: _tabController,\n                  tabs: const [\n                    Tab(text: 'Posts'),\n                    Tab(text: 'Replies'),\n                    Tab(text: 'Media'),\n                  ],\n                ),\n              ),\n              pinned: true,\n            ),\n          ];\n        },\n        body: TabBarView(\n          controller: _tabController,\n          children: const [\n            _TabContent(tabKey: 'posts'),\n            _TabContent(tabKey: 'replies'),\n            _TabContent(tabKey: 'media'),\n          ],\n        ),\n      ),\n    );\n  }\n}"}
        />
        <BlogContent>{"Snippet 2: Tab Content with Scroll Preservation"}</BlogContent>
        <CodeBlock
          language={"dart"}
          filename={"code-snippet-2.dart"}
          code={"// filename: lib/widgets/tab_content.dart\n// language: dart\n// purpose: Reusable tab content with proper scroll key and physics\n\nclass _TabContent extends StatelessWidget {\n  final String tabKey;\n\n  const _TabContent({required this.tabKey});\n\n  @override\n  Widget build(BuildContext context) {\n    return CustomScrollView(\n      key: PageStorageKey<String>(tabKey),\n      slivers: [\n        SliverPadding(\n          padding: const EdgeInsets.all(8),\n          sliver: SliverList(\n            delegate: SliverChildBuilderDelegate(\n              (BuildContext context, int index) {\n                return Card(\n                  child: ListTile(\n                    title: Text('$tabKey item $index'),\n                    subtitle: const Text('Scroll position preserved per tab'),\n                  ),\n                );\n              },\n              childCount: 50,\n            ),\n          ),\n        ),\n      ],\n    );\n  }\n}"}
        />
        <BlogContent>{"Snippet 3: Persistent TabBar Header Delegate"}</BlogContent>
        <CodeBlock
          language={"dart"}
          filename={"code-snippet-3.dart"}
          code={"// filename: lib/widgets/sliver_tab_bar_delegate.dart\n// language: dart\n// purpose: Required delegate for pinned tab bar in sliver header\n\nclass _SliverTabBarDelegate extends SliverPersistentHeaderDelegate {\n  final TabBar tabBar;\n\n  _SliverTabBarDelegate(this.tabBar);\n\n  @override\n  double get minExtent => tabBar.preferredSize.height;\n\n  @override\n  double get maxExtent => tabBar.preferredSize.height;\n\n  @override\n  Widget build(\n    BuildContext context,\n    double shrinkOffset,\n    bool overlapsContent,\n  ) {\n    return Container(\n      color: Theme.of(context).scaffoldBackgroundColor,\n      child: tabBar,\n    );\n  }\n\n  @override\n  bool shouldRebuild(_SliverTabBarDelegate oldDelegate) {\n    return tabBar != oldDelegate.tabBar;\n  }\n}"}
        />

        <BlogSubTitle>{"Code Explanation"}</BlogSubTitle>
        <BlogContent>{"Critical lines and their effects:"}</BlogContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-white/15 rounded-md overflow-hidden">
            <thead className="bg-white/5">
              <tr><th className="border border-white/15 px-3 py-2 text-left">Line(s)</th><th className="border border-white/15 px-3 py-2 text-left">What It Does</th><th className="border border-white/15 px-3 py-2 text-left">What Breaks If Wrong</th></tr>
            </thead>
            <tbody><tr><td className="border border-white/10 px-3 py-2 align-top">forceElevated: innerBoxIsScrolled (Snippet 1)</td><td className="border border-white/10 px-3 py-2 align-top">Adds shadow to app bar when content scrolls underneath</td><td className="border border-white/10 px-3 py-2 align-top">App bar appears flat, no visual elevation feedback</td></tr><tr><td className="border border-white/10 px-3 py-2 align-top">SliverToBoxAdapter wrapping bio section</td><td className="border border-white/10 px-3 py-2 align-top">Converts regular widget to sliver for header list</td><td className="border border-white/10 px-3 py-2 align-top">"Expected RenderSliver but found RenderBox" runtime error</td></tr><tr><td className="border border-white/10 px-3 py-2 align-top">PageStorageKey&lt;String&gt;(tabKey) (Snippet 2)</td><td className="border border-white/10 px-3 py-2 align-top">Persists scroll offset per tab in PageStorage</td><td className="border border-white/10 px-3 py-2 align-top">Scroll position resets to top on every tab switch</td></tr><tr><td className="border border-white/10 px-3 py-2 align-top">pinned: true on SliverPersistentHeader</td><td className="border border-white/10 px-3 py-2 align-top">Tab bar sticks to top when header collapses</td><td className="border border-white/10 px-3 py-2 align-top">Tab bar scrolls away with content, losing navigation context</td></tr><tr><td className="border border-white/10 px-3 py-2 align-top">shouldRebuild in delegate (Snippet 3)</td><td className="border border-white/10 px-3 py-2 align-top">Controls when Flutter rebuilds the header</td><td className="border border-white/10 px-3 py-2 align-top">Unnecessary rebuilds or stale tab controller state</td></tr></tbody>
          </table>
        </div>
        <BlogContent>{"The innerBoxIsScrolled parameter: This boolean tells you if any inner scrollable has scrolled. Use it for elevation, title visibility, or secondary animations. It's the bridge between header and body scroll state."}</BlogContent>

        <BlogSubTitle>{"Validation Checklist"}</BlogSubTitle>
        <BlogList items={[
              "[ ] Header collapses smoothly when scrolling up, expands on pull-down",
              "[ ] Tab bar pins to top when SliverAppBar is fully collapsed",
              "[ ] Switching tabs preserves each tab's scroll position",
              "[ ] No \"glow\" overflow effect at top (physics are consistent)",
              "[ ] App bar shows shadow/elevation only when content has scrolled",
              "[ ] No exceptions in console about RenderSliver type mismatches"
        ]} />
        <BlogContent>{"Expected behavior: Scroll the Posts tab to item 40, switch to Replies, scroll to item 10, return to Posts—should still be at item 40."}</BlogContent>

        <BlogSubTitle>{"Edge Cases"}</BlogSubTitle>
        <BlogContent>{"Empty tab content: If a tab has fewer items than viewport height, the header won't collapse fully because there's no scroll extent. Fix: Add AlwaysScrollableScrollPhysics or ensure minimum content height."}</BlogContent>
        <BlogContent>{"Dynamic tab count: Changing TabController.length after initialization requires recreating the controller. Use didUpdateWidget or state management to handle this."}</BlogContent>
        <BlogContent>{"Nested NestedScrollView: Avoid. The scroll coordination becomes unpredictable. Prefer SliverFillRemaining or custom ScrollController coordination for deeply nested cases."}</BlogContent>
        <BlogContent>{"Platform physics mismatch: iOS uses BouncingScrollPhysics, Android uses ClampingScrollPhysics. Mismatched physics between header and body cause jarring boundary behavior. Explicitly set physics: const AlwaysScrollableScrollPhysics() on inner scrollables for consistency."}</BlogContent>

        <BlogSubTitle>{"Best Practices"}</BlogSubTitle>
        <BlogList items={[
              "Do use PageStorageKey with unique, stable identifiers per tab",
              "Do keep headerSliverBuilder pure—no side effects, no network calls",
              "Do test with slow animations (timeDilation = 5.0) to catch gesture conflicts",
              "Don't put ListView directly in body; use TabBarView with sliver-based children",
              "Don't use shrinkWrap: true on large lists inside NestedScrollView",
              "Don't forget dispose() on TabController—memory leaks are subtle here"
        ]} />

        <BlogSubTitle>{"Pro Tips"}</BlogSubTitle>
        <BlogList items={[
              "Animate header programmatically: Use ScrollController attached to NestedScrollView and call animateTo() for \"scroll to top\" buttons that also expand the header",
              "Parallax background: Wrap FlexibleSpaceBar.background in a Transform.translate driven by ScrollNotification for custom parallax effects",
              "Floating search bar: Set SliverAppBar.floating: true, snap: true for iOS-style search that appears on downward scroll",
              "Measure header height: NestedScrollView doesn't expose header height directly. Use LayoutBuilder inside SliverToBoxAdapter and store in state if you need precise measurements"
        ]} />

        <BlogSubTitle>{"Resources"}</BlogSubTitle>
        <BlogContent>{"Official Sources:"}</BlogContent>
        <BlogList items={[
              "Flutter Docs: Slivers (https://docs.flutter.dev/ui/advanced/slivers)",
              "Flutter API: NestedScrollView (https://api.flutter.dev/flutter/widgets/NestedScrollView-class.html)",
              "Flutter API: SliverAppBar (https://api.flutter.dev/flutter/material/SliverAppBar-class.html)",
              "Flutter API: SliverPersistentHeader (https://api.flutter.dev/flutter/widgets/SliverPersistentHeader-class.html)"
        ]} />
        <BlogContent>{"High-Signal Community References:"}</BlogContent>
        <BlogList items={[
              "Flutter Gallery Sliver App Bars demo (https://github.com/flutter/gallery) — production-grade implementation patterns",
              "flutter.dev architectural overview of scrolling (https://docs.flutter.dev/ui/advanced/scrolling) — deep context on scrollable composition"
        ]} />

        <BlogSubTitle>{"Final Thoughts"}</BlogSubTitle>
        <BlogContent>{"NestedScrollView is powerful but unforgiving. The key insight: everything in headerSliverBuilder must be a RenderSliver, and everything in body must coordinate through the shared scroll controller. Get this right once, and you unlock the polished, native-feeling scroll experiences users expect."}</BlogContent>
        <BlogContent>{"Next step: Take an existing screen with a Column containing a header and TabBarView. Convert it to NestedScrollView using the patterns above. Measure the before/after scroll performance with Flutter DevTools— you'll see the frame time improvement immediately."}</BlogContent>

        <BlogSubTitle>{"Preview Card Data"}</BlogSubTitle>
        <BlogList items={[
              "previewTitle: NestedScrollView Deep Dive",
              "previewDescription: Build collapsing headers and synchronized tab scrolling in Flutter with proper sliver patterns and scroll preservation.",
              "previewDateText: Flutter UI",
              "previewReadTime: 8 min read",
              "previewTags: [\"Flutter\", \"Slivers\", \"UI Patterns\"]"
        ]} />

        <BlogSubTitle>{"Image Plan"}</BlogSubTitle>
        <BlogList items={[
              "hero image idea: Split-screen comparison: left side shows broken layout with misaligned scroll regions, right side shows smooth collapsing header with pinned tabs—visual metaphor for the problem/solution arc",
              "inline visual 1: Annotated widget tree diagram showing NestedScrollView → headerSliverBuilder → body hierarchy with color-coded sliver vs. box widgets",
              "inline visual 2: GIF-style sequence of three frames: (1) expanded header with cover image, (2) mid-collapse with bio visible, (3) fully collapsed with pinned tab bar",
              "inline visual 3: Code snippet highlight overlay showing the critical PageStorageKey line with visual connection to preserved scroll position indicator",
              "alt text intent: All images describe structural relationships and state transitions, not decorative fluff"
        ]} />

        <BlogSubTitle>{"Key Concepts"}</BlogSubTitle>
        <BlogList items={[
              "NestedScrollView: Widget that coordinates scrolling between a header sliver section and a body widget",
              "Sliver: Lazy-loading scrollable segment; Flutter's building block for custom scroll effects",
              "headerSliverBuilder: Callback that builds slivers occupying space before the body",
              "innerBoxIsScrolled: Boolean indicating whether body content has scrolled, used for header state synchronization",
              "PageStorageKey: Key that preserves state (including scroll offset) in Flutter's PageStorage mechanism",
              "SliverPersistentHeader: Sliver with fixed or variable height that can pin to viewport edge",
              "PrimaryScrollController: Inherited widget providing the default scroll controller for a subtree"
        ]} />

        <BlogTips title="Pro Tip" description="Validate generated TSX before writing to disk." />
        <RelatedNextBlogButton currentSlug={pathname} currentTags={tags} />
      </div>
    </div>
  );
};

export default FlutterPackagesPage;
