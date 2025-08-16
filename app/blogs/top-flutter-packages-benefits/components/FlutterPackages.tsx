"use client";
import {
  BlogContent,
  BlogHighlighter,
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
import { Package } from "lucide-react";

const FlutterPackagesPage = () => {
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
                Top Flutter Packages:{" "}
                <span className="secondary-gradient-text">
                  Why You Should Use Them
                </span>
              </>
            }
          />
          <WriterInfo
            image={author.image}
            name={author.name}
            role={author.role}
            readTime="7"
            date="June 14, 2025"
          />
        </header>

        <BlogContent>
          Flutter&apos;s ecosystem thrives because of its rich package support.
          Whether you&apos;re building a small app or a production-ready
          platform, packages save development time, reduce boilerplate, and
          offer powerful features out of the box. Below is a detailed list of
          essential packages you should consider using in your Flutter app,
          along with the benefits of using them and the potential drawbacks if
          you don&apos;t.
        </BlogContent>

        {/* Dio Package */}
        <BlogSubTitle>
          <Package className="inline-block mr-2 text-primary" size={20} /> 1.
          Dio
        </BlogSubTitle>
        <BlogContent>
          <b>Initialization:</b>
        </BlogContent>
        <CodeBlock
          language="dart"
          filename="app/main.dart"
          code={`final dio = Dio();
dio.options.baseUrl = 'https://api.example.com';
dio.options.headers['Authorization'] = 'Bearer YOUR_TOKEN';`}
        />
        <BlogContent>
          <b>Example:</b>
        </BlogContent>
        <CodeBlock
          language="dart"
          filename="app/main.dart"
          code={`Response response = await dio.get('/users');
print(response.data);`}
        />
        <BlogList
          title={
            <span className="text-green-300 font-semibold">
              Benefits of Using It:
            </span>
          }
          items={[
            "Powerful and customizable HTTP client for Dart.",
            "Built-in support for interceptors, global configuration, and FormData.",
            "Advanced features like retry logic, file downloading, and request cancellation.",
            "Improved error handling with clean response objects.",
            "Helpful for debugging with detailed logs and lifecycle hooks.",
          ]}
        />
        <BlogList
          title={
            <span className="text-red-300 font-semibold">
              Loss of Not Using It:
            </span>
          }
          items={[
            <>
              You might struggle with manual error handling and request retries
              using the default <BlogHighlighter>http</BlogHighlighter> package.
            </>,
            "No built-in support for interceptors or global configuration.",
            "Handling multipart uploads becomes cumbersome.",
            "Increased chances of inconsistent API response management.",
            "Time-consuming manual setup for API headers and tokens.",
          ]}
        />
        <BlogList
          title={<span className="text-blue-300 font-semibold">Pros:</span>}
          items={[
            "Clean and readable API.",
            "Robust support for REST APIs.",
            "Widely used and actively maintained.",
            "Highly customizable and extendable.",
            "Easy to integrate with interceptors for token refresh logic.",
          ]}
        />

        {/* GetX Package */}
        <BlogSubTitle>
          <Package className="inline-block mr-2 text-orange-400" size={20} /> 2.
          GetX
        </BlogSubTitle>
        <BlogContent>
          <b>Initialization:</b>
        </BlogContent>
        <CodeBlock
          language="dart"
          filename="app/main.dart"
          code={`class Controller extends GetxController {
  var count = 0.obs;
  void increment() => count++;
}`}
        />
        <BlogContent>
          <b>Example:</b>
        </BlogContent>
        <CodeBlock
          language="dart"
          filename="app/main.dart"
          code={`Obx(() => Text('Count: COUNT_VALUE'))`}
        />
        <BlogList
          title={
            <span className="text-green-300 font-semibold">
              Benefits of Using It:
            </span>
          }
          items={[
            "Minimal boilerplate for state management, routing, and dependency injection.",
            "Highly efficient and reactive – updates only what is necessary.",
            "All-in-one solution: routing, state, bindings, and services.",
            "Reduces rebuilds and memory usage.",
            "Great documentation and vibrant community.",
          ]}
        />
        <BlogList
          title={
            <span className="text-red-300 font-semibold">
              Loss of Not Using It:
            </span>
          }
          items={[
            "More complex state management solutions like Provider + Riverpod may increase learning curve.",
            "Manual routing and state refresh logic without GetX's automation.",
            "Increased app size and complexity with multiple state packages.",
            "Slower development due to lack of integrated tools.",
            "Less reactive design could lead to performance bottlenecks.",
          ]}
        />
        <BlogList
          title={<span className="text-blue-300 font-semibold">Pros:</span>}
          items={[
            "High performance.",
            "Simplified syntax and coding experience.",
            "Reduces boilerplate significantly.",
            "Combines routing, state, and DI into one solution.",
            "Scales well for large apps.",
          ]}
        />

        {/* Go Router Package */}
        <BlogSubTitle>
          <Package className="inline-block mr-2 text-primary" size={20} /> 3.
          go_router
        </BlogSubTitle>
        <BlogContent>
          <b>Initialization:</b>
        </BlogContent>
        <CodeBlock
          language="dart"
          filename="app/main.dart"
          code={`final GoRouter router = GoRouter(
  routes: [
    GoRoute(
      path: '/',
      builder: (context, state) => HomePage(),
    ),
  ],
);`}
        />
        <BlogContent>
          <b>Example:</b>
        </BlogContent>
        <CodeBlock
          language="dart"
          filename="app/main.dart"
          code={`GoRouter.of(context).go('/profile');`}
        />
        <BlogList
          title={
            <span className="text-green-300 font-semibold">
              Benefits of Using It:
            </span>
          }
          items={[
            "Simplifies declarative navigation in Flutter apps.",
            "Supports nested navigation and deep linking out of the box.",
            "Tight integration with Flutter's Router API.",
            "Supports custom transition animations.",
            "Improved readability of navigation logic.",
          ]}
        />
        <BlogList
          title={
            <span className="text-red-300 font-semibold">
              Loss of Not Using It:
            </span>
          }
          items={[
            "Manual URL handling for web navigation.",
            "Complicated nested navigation setup.",
            "Missing out on type-safe route configuration.",
            "Harder deep linking implementation.",
            "More boilerplate in navigation code.",
          ]}
        />
        <BlogList
          title={<span className="text-blue-300 font-semibold">Pros:</span>}
          items={[
            "Flexible and declarative.",
            "Easy web support.",
            "Better control over routes and state.",
            "Scalable for large apps.",
            "Backed by the Flutter team.",
          ]}
        />

        {/* Cached Network Image Package */}
        <BlogSubTitle>
          <Package className="inline-block mr-2 text-orange-400" size={20} /> 4.
          cached_network_image
        </BlogSubTitle>
        <BlogContent>
          <b>Initialization:</b>
        </BlogContent>
        <CodeBlock
          language="dart"
          filename="app/main.dart"
          code={`CachedNetworkImage(
  imageUrl: "https://via.placeholder.com/150",
  placeholder: (context, url) => CircularProgressIndicator(),
  errorWidget: (context, url, error) => Icon(Icons.error),
)`}
        />
        <BlogList
          title={
            <span className="text-green-300 font-semibold">
              Benefits of Using It:
            </span>
          }
          items={[
            "Automatically caches network images.",
            "Reduces network usage and improves performance.",
            "Customizable placeholder and error handling.",
            "Supports fade-in and other animations.",
            "Integrates seamlessly with existing image widgets.",
          ]}
        />
        <BlogList
          title={
            <span className="text-red-300 font-semibold">
              Loss of Not Using It:
            </span>
          }
          items={[
            "Slower image loading every time from the network.",
            "Increased data usage.",
            "No fallback in case of error.",
            "Manual caching implementation required.",
            "Poorer user experience with image flickers.",
          ]}
        />
        <BlogList
          title={<span className="text-blue-300 font-semibold">Pros:</span>}
          items={[
            "Drop-in replacement for Image.network.",
            "Reliable and well-supported.",
            "Improves app responsiveness.",
            "Great for gallery or media-heavy apps.",
            "Highly customizable.",
          ]}
        />

        {/* Firebase Crashlytics Package */}
        <BlogSubTitle>
          <Package className="inline-block mr-2 text-primary" size={20} /> 5.
          firebase_crashlytics
        </BlogSubTitle>
        <BlogContent>
          <b>Initialization:</b>
        </BlogContent>
        <CodeBlock
          language="dart"
          filename="app/main.dart"
          code={`await Firebase.initializeApp();
FlutterError.onError = FirebaseCrashlytics.instance.recordFlutterFatalError;`}
        />
        <BlogList
          title={
            <span className="text-green-300 font-semibold">
              Benefits of Using It:
            </span>
          }
          items={[
            "Automatic crash and error logging to Firebase console.",
            "Real-time crash reporting with detailed stack traces.",
            "Custom keys and logs for advanced error debugging.",
            "Easy integration with Firebase Analytics.",
            "Improves app quality through better debugging insights.",
          ]}
        />
        <BlogList
          title={
            <span className="text-red-300 font-semibold">
              Loss of Not Using It:
            </span>
          }
          items={[
            "No visibility into real-world crashes.",
            "Harder to debug issues reported by users.",
            "Missed opportunities to proactively fix issues.",
            "Increased churn due to untracked bugs.",
            "Longer bug resolution time.",
          ]}
        />
        <BlogList
          title={<span className="text-blue-300 font-semibold">Pros:</span>}
          items={[
            "Real-time monitoring.",
            "Lightweight and efficient.",
            "Improves app reliability.",
            "Easy to implement.",
            "Free tier sufficient for most apps.",
          ]}
        />

        {/* Flutter Staggered Grid View Package */}
        <BlogSubTitle className="whitespace-nowrap">
          6. flutter_staggered_grid_view
        </BlogSubTitle>
        <BlogContent>
          <b>Initialization:</b>
        </BlogContent>
        <CodeBlock
          language="dart"
          filename="app/main.dart"
          code={`StaggeredGrid.count(
  crossAxisCount: 4,
  children: [
    StaggeredGridTile.count(crossAxisCellCount: 2, mainAxisCellCount: 2, child: MyWidget()),
  ],
)`}
        />
        <BlogList
          title={
            <span className="text-green-300 font-semibold">
              Benefits of Using It:
            </span>
          }
          items={[
            "Helps create Pinterest-like staggered layouts.",
            "Highly customizable grid behavior.",
            "Great for dynamic content with different sizes.",
            "Improves app aesthetics and usability.",
            "Supports infinite scroll and animations.",
          ]}
        />
        <BlogList
          title={
            <span className="text-red-300 font-semibold">
              Loss of Not Using It:
            </span>
          }
          items={[
            "Inflexible and dull UI with standard grids.",
            "Harder layout for media-heavy apps.",
            "More code to handle custom grid logic manually.",
            "Poor user experience for photo galleries or dynamic feeds.",
            "Missed chance for modern, engaging designs.",
          ]}
        />
        <BlogList
          title={<span className="text-blue-300 font-semibold">Pros:</span>}
          items={[
            "Great for e-commerce and social media UIs.",
            "Works well with dynamic item sizes.",
            "Easy to implement and maintain.",
            "Active development and community.",
            "Reduces layout boilerplate.",
          ]}
        />
        <RelatedNextBlogButton currentSlug={pathname} currentTags={tags} />
      </div>
    </div>
  );
};

export default FlutterPackagesPage;
