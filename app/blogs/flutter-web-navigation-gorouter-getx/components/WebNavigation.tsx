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
import RelatedNextBlogButton from "@/app/components/RelatedNextBlogButton";
import TagsList from "@/components/custom/TagsList";
import {
  AlertTriangle,
  Bug,
  LifeBuoy,
  Wrench,
  CheckCircle,
  Ban,
  Send,
  Save,
  Star,
  Key,
  CornerUpLeft,
  List,
} from "lucide-react";

const WebNavigationPage = () => {
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
                Flutter Web Navigation:{" "}
                <span className="secondary-gradient-text">GoRouter + GetX</span>{" "}
                (No GetMaterialApp)
              </>
            }
          />
          <WriterInfo
            image={author.image}
            name={author.name}
            role={author.role}
            readTime="6"
            date="June 14, 2025"
          />
        </header>

        {/* Problems Section */}
        <BlogSubTitle>
          <AlertTriangle className="inline-block mr-2 text-primary" size={20} />{" "}
          Real-Life Dev Woes (Funny but True)
        </BlogSubTitle>
        <BlogContent>
          You start with GetX. Life seems good. You use{" "}
          <BlogHighlighter>Get.to()</BlogHighlighter> and{" "}
          <BlogHighlighter>Get.toNamed()</BlogHighlighter>. Suddenly:
        </BlogContent>
        <BlogList
          items={[
            <BlogKeyValue
              key="snackbar"
              title={<BlogHighlighter>Get.snackbar()</BlogHighlighter>}
              value="Ghosted. No show."
            />,
            <BlogKeyValue
              key="dialog"
              title={<BlogHighlighter>Get.dialog()</BlogHighlighter>}
              value="Vanishes faster than your motivation on Monday."
            />,
            <BlogKeyValue
              key="bottomSheet"
              title={<BlogHighlighter>Get.bottomSheet()</BlogHighlighter>}
              value="Absolutely nothing. Dead."
            />,
            <BlogKeyValue
              key="back"
              title={<BlogHighlighter>Back Button</BlogHighlighter>}
              value="Nope. Stack who? History where?"
            />,
          ]}
        />
        <BlogTips
          title="Wait... Flutter Web is supposed to work, right? 🤔"
          description="But overlays and navigation break in real life!"
        />

        {/* Problems Details */}
        <BlogSubTitle>
          <Bug className="inline-block mr-2 text-orange-400" size={20} />{" "}
          Problems With Get.to() & GetMaterialApp in Web
        </BlogSubTitle>
        <div className="mb-8" />
        <BlogList
          items={[
            <BlogKeyValue
              key="overlays"
              title="Overlays stop rendering"
              value="snackbar/dialog/sheet"
            />,
            <BlogKeyValue
              key="back"
              title="Back button doesn't push or pop as expected"
              value=""
            />,
            <BlogKeyValue
              key="stack"
              title="Navigation stack not preserved properly"
              value=""
            />,
          ]}
        />
        <BlogList
          items={[
            <BlogKeyValue
              key="refresh"
              title="Page refreshes behave unpredictably"
              value=""
            />,
            <BlogKeyValue
              key="deep"
              title="Deep links break unless handled manually"
              value=""
            />,
            <BlogKeyValue key="gone" title="GoRouter? GoneRouter." value="" />,
          ]}
        />
        <BlogContent>
          <b>Deep Links and Web Features Are Broken:</b>
        </BlogContent>
        <BlogList
          items={[
            <BlogKeyValue
              key="route"
              title={<BlogHighlighter>/route-name</BlogHighlighter>}
              value="direct open = broken or 404"
            />,
            <BlogKeyValue
              key="reload"
              title={<BlogHighlighter>Reload</BlogHighlighter>}
              value="new app instance"
            />,
            <BlogKeyValue
              key="back-forward"
              title={<BlogHighlighter>Back/forward</BlogHighlighter>}
              value="random behavior"
            />,
          ]}
        />

        {/* Solution Section */}
        <BlogSubTitle>
          <LifeBuoy className="inline-block mr-2 text-primary" size={20} />{" "}
          GoRouter to the Rescue (Yes, Even With GetX)
        </BlogSubTitle>
        <BlogContent>
          Instead of using <BlogHighlighter>GetMaterialApp</BlogHighlighter>,
          use <BlogHighlighter>MaterialApp.router</BlogHighlighter> and let
          GoRouter do what it does best—ROUTING. And let GetX be the boss of
          overlays, snackbars, and state management.
        </BlogContent>
        <BlogList
          items={[
            <BlogKeyValue
              key="guards"
              title="Route Guards"
              value="Redirect unauthenticated users in one line"
            />,
            <BlogKeyValue
              key="shell"
              title="Shell Routes"
              value="Shared UI (e.g., bottom nav) across child pages"
            />,
            <BlogKeyValue
              key="nested"
              title="Nested Routes"
              value="Easily manage parent/child paths"
            />,
            <BlogKeyValue
              key="error"
              title="Error Pages"
              value="Define beautiful 404s, not random crashes"
            />,
            <BlogKeyValue
              key="redirects"
              title="Redirects"
              value="Funnel users based on auth/state easily"
            />,
          ]}
        />

        {/* Code Solution */}
        <BlogSubTitle>
          <Wrench className="inline-block mr-2 text-orange-400" size={20} /> The
          Fix: MaterialApp.router + Get.key
        </BlogSubTitle>
        <CodeBlock
          language="dart"
          filename="app/main.dart"
          code={`void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  final _router = GoRouter(
    navigatorKey: Get.key,
    routes: [
      GoRoute(
        path: '/',
        builder: (context, state) => HomePage(),
      ),
      GoRoute(
        path: '/about',
        builder: (context, state) => AboutPage(),
      ),
    ],
  );

  @override
  Widget build(BuildContext context) {
    return MaterialApp.router(
      routerConfig: _router,
      navigatorKey: Get.key,
    );
  }
}`}
        />
        <BlogTable
          title="Code"
          description="Explanation"
          data={[
            {
              title: <BlogHighlighter>navigatorKey: Get.key</BlogHighlighter>,
              description:
                "Enables GetX to show overlays like snackbar, dialog, bottomsheet",
            },
            {
              title: <BlogHighlighter>MaterialApp.router</BlogHighlighter>,
              description: "Required by GoRouter for structured web routing",
            },
            {
              title: <BlogHighlighter>GoRoute</BlogHighlighter>,
              description: "Defines your routes in a declarative, clean way",
            },
          ]}
        />

        {/* Results Section */}
        <BlogSubTitle>
          <CheckCircle className="inline-block mr-2 text-primary" size={20} />{" "}
          End Result
        </BlogSubTitle>
        <BlogList
          items={[
            "Overlays work (snackbar, dialog, bottomSheet)",
            "Deep links respected",
            "Back/forward button works like normal websites",
            "Route protection, nested routes, shell routes",
            "Structured navigation logic",
          ]}
        />

        {/* Don'ts Section */}
        <BlogSubTitle>
          <Ban className="inline-block mr-2 text-orange-400" size={20} /> Things
          to NEVER DO
        </BlogSubTitle>
        <BlogList
          items={[
            "Don't use GetMaterialApp in Flutter Web",
            "Don't manage routes manually via Get.to() in large apps",
            "Don't ignore navigatorKey if you're mixing GetX + GoRouter",
          ]}
        />

        {/* Pro Tip */}
        <BlogTips
          title="Pro tip"
          description="Let GoRouter handle routes, let GetX handle overlays. Boom—clean, modern, working Flutter Web app."
        />

        {/* Data Passing Section */}
        <BlogSubTitle className="flex flex-wrap">
          <Send className="inline-block mr-2 text-primary" size={20} /> Passing
          & Persisting Data with
          <BlogHighlighter className="inline">state.extra</BlogHighlighter> in
          GoRouter
        </BlogSubTitle>
        <BlogContent>
          Need to pass arguments across routes, even on web reloads or
          back/forward presses? Here&apos;s how to use{" "}
          <BlogHighlighter>state.extra</BlogHighlighter> with{" "}
          <b>fallback logic</b> for a smooth experience.
        </BlogContent>
        <BlogSubTitle>1. Define Your Arguments</BlogSubTitle>
        <CodeBlock
          language="dart"
          filename="app/main.dart"
          code={`class ProductDetailArgs {
  final ProductPreviewModel? proPreview;
  final ProductModel? product;

  ProductDetailArgs({this.proPreview, this.product});
}`}
        />
        <BlogSubTitle>
          2. Push With <BlogHighlighter>extra</BlogHighlighter>
        </BlogSubTitle>
        <CodeBlock
          language="dart"
          filename="app/main.dart"
          code={`GoRouter.of(context).pushNamed(
  WebRouteNames.webProductDetailPage,
  extra: ProductDetailArgs(
    proPreview: preview,
    product: product,
  ),
);`}
        />
        <BlogSubTitle>3. Receive & Persist Inside Route</BlogSubTitle>
        <BlogContent>
          <b>Important:</b>{" "}
          {"If you're using back/forward buttons or refreshing the browser"},{" "}
          <BlogHighlighter>state.extra</BlogHighlighter> will be <b>null</b>. So
          you must persist the data manually.
        </BlogContent>
        <BlogTips
          title="Important"
          description="Persist data manually if state.extra is null."
        />
        <CodeBlock
          language="dart"
          filename="app/main.dart"
          code={`ProductDetailArgs? savedArg;

GoRoute(
  path: WebRouteNames.webProductDetailPage,
  builder: (context, state) {
    ProductDetailArgs? args = state.extra as ProductDetailArgs?;
    if (args != null) {
      savedArg = args;
    }

    return WebProductDetailsPage(
      proPreview: savedArg?.proPreview,
      product: savedArg?.product,
    );
  },
);`}
        />

        {/* Why Save Section */}
        <BlogSubTitle>
          <Save className="inline-block mr-2 text-orange-400" size={20} /> Why
          Save to a Variable?
        </BlogSubTitle>
        <BlogTable
          title="Reason"
          description="When/Why"
          data={[
            { title: "state.extra is null", description: "on browser refresh" },
            {
              title: "Back button doesn&apos;t re-call",
              description: "pushNamed()",
            },
            { title: "Prevents crashes", description: "and allows fallback" },
          ]}
        />

        {/* Bonus Section */}
        <BlogSubTitle>
          <Star className="inline-block mr-2 text-primary" size={20} /> Bonus:
          Persist via Local Storage
        </BlogSubTitle>
        <BlogContent>
          For full persistence (e.g. on refresh), you can save to local/session
          storage:
        </BlogContent>
        <CodeBlock
          language="dart"
          filename="app/main.dart"
          code={`// Save
window.localStorage.setItem('last_product', jsonEncode(args));

// Retrieve (on null extra)
var storedData = window.localStorage.getItem('last_product');`}
        />

        {/* Example Section */}
        <BlogSubTitle>
          <Key className="inline-block mr-2 text-orange-400" size={20} />{" "}
          Example: OTP Page
        </BlogSubTitle>
        <CodeBlock
          language="dart"
          filename="app/main.dart"
          code={`GoRoute(
  path: WebRouteNames.webOtpPage,
  builder: (context, state) {
    final args = state.extra as Map<String, dynamic>?;
    final OTPType otpType = args?['otpType'];
    final bool ifNewUser = args?['ifNewUser'];

    return WebOTPPage(
      otpType: otpType,
      ifNewUser: ifNewUser,
    );
  },
);`}
        />

        {/* Back Button Handling */}
        <BlogSubTitle>
          <CornerUpLeft className="inline-block mr-2 text-primary" size={20} />{" "}
          Handling Back Button With Arguments
        </BlogSubTitle>
        <BlogContent>
          When user presses back/forward in the browser, your page might rebuild
          without the arguments. Avoid crashes by:
        </BlogContent>
        <BlogList
          items={[
            <>
              Saving once from <BlogHighlighter>state.extra</BlogHighlighter>
            </>,
            "Using fallback from saved variables",
          ]}
        />
        <CodeBlock
          language="dart"
          filename="app/main.dart"
          code={`// Safe builder with fallback
builder: (context, state) {
  ProductDetailArgs? args = state.extra as ProductDetailArgs?;
  if (args != null) savedArg = args;

  return WebProductDetailsPage(
    proPreview: savedArg?.proPreview,
    product: savedArg?.product,
  );
}`}
        />

        {/* Summary */}
        <BlogSubTitle>
          <List className="inline-block mr-2 text-orange-400" size={20} />{" "}
          Summary
        </BlogSubTitle>
        <BlogList
          items={[
            "Pass arguments via extra",
            "Save in local variables to persist state",
            "Fallback on null for safe rebuilds",
            "Optional: Use localStorage for cross-reloads",
          ]}
        />
        <BlogContent>
          <b>Pro tip:</b> Use <BlogHighlighter>extra</BlogHighlighter> to keep
          your routing clean and argument-safe, especially on Flutter Web.
        </BlogContent>
        <BlogTips
          title="Pro tip:"
          description="Use 'extra' for clean, argument-safe routing."
        />
        <div className="my-16 text-center">
          <BlogContent>Explore more resources:</BlogContent>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
            <a
              href="https://docs.flutter.dev/cookbook/navigation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl transition-colors font-medium"
            >
              Flutter Navigation Cookbook
            </a>
            <a
              href="https://pub.dev/packages/go_router"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-xl transition-colors font-medium"
            >
              GoRouter Package
            </a>
          </div>
        </div>
        <RelatedNextBlogButton currentSlug={pathname} currentTags={tags} />
      </div>
    </div>
  );
};

export default WebNavigationPage;
