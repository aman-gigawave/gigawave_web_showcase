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
          <CustomTitle headingClassName="!text-start" heading={<>{"Mastering ListView.builder and GridView.builder in Flutter"}</>} />
          <WriterInfo image={author.image} name={author.name} role={author.role} readTime={"8"} date="June 14, 2025" />
        </header>
        <BlogContent>{"how to implement listview builder and gridview builder in flutter matters in real projects because weak implementation choices create hard-to-debug failures and inconsistent user experience."}</BlogContent>
        <BlogContent>{"This guide uses focused, production-oriented steps and code examples grounded in official references."}</BlogContent>

        <BlogSubTitle>{"Key Concepts Covered"}</BlogSubTitle>
        <div className="flex flex-wrap gap-2">
            <span key={"0"} className="inline-flex"><BlogHighlighter>implement</BlogHighlighter></span>
            <span key={"1"} className="inline-flex"><BlogHighlighter>listview</BlogHighlighter></span>
            <span key={"2"} className="inline-flex"><BlogHighlighter>builder</BlogHighlighter></span>
            <span key={"3"} className="inline-flex"><BlogHighlighter>gridview</BlogHighlighter></span>
            <span key={"4"} className="inline-flex"><BlogHighlighter>flutter</BlogHighlighter></span>
        </div>
        <BlogList items={[
              <React.Fragment key={"ci-0"}>Core setup for how to implement listview builder and gridview builder in flutter</React.Fragment>,
              <React.Fragment key={"ci-1"}>Implementation flow and reusable patterns</React.Fragment>,
              <React.Fragment key={"ci-2"}>Validation and optimization strategy</React.Fragment>
        ]} />

        <BlogSubTitle>Context Setup</BlogSubTitle>
        <BlogContent>{"We start with minimal setup, then move to implementation patterns and validation checkpoints for how to implement listview builder and gridview builder in flutter."}</BlogContent>

        <BlogSubTitle>Problem Breakdown</BlogSubTitle>
        <BlogList items={[
              "Unclear setup path for how to implement listview builder and gridview builder in flutter",
              "Inconsistent implementation patterns",
              "Missing validation for edge cases"
        ]} />

        <BlogSubTitle>Solution Overview</BlogSubTitle>
        <BlogContent>{"Apply a step-by-step architecture: setup, core implementation, validation, and performance checks for how to implement listview builder and gridview builder in flutter."}</BlogContent>

        <BlogSubTitle>{"Step 1: Define prerequisites and expected behavior for how to implement listview builder and gridview builder in flutter."}</BlogSubTitle>
        <CodeBlock
          language={"dart"}
          filename={"snippet-1.dart"}
          code={"// filename: lib/screens/product_list_screen.dart\n// language: dart\n// purpose: ListView.builder implementation with pull-to-refresh\n\nimport 'package:flutter/material.dart';\nimport '../models/product.dart';\n\nclass ProductListScreen extends StatefulWidget {\n  const ProductListScreen({super.key});\n\n  @override\n  State<ProductListScreen> createState() => _ProductListScreenState();\n}\n\nclass _ProductListScreenState extends State<ProductListScreen> {\n  final List<Product> _products = List.generate(\n    100,\n    (index) => Product(\n      id: 'prod_$index',\n      name: 'Product ${index + 1}',\n      imageUrl: 'https://picsum.photos/200?random=$index',\n      price: 19.99 + (index % 10),\n    ),\n  );\n\n  Future<void> _refreshProducts() async {\n    await Future.delayed(const Duration(seconds: 1));\n    setState(() {\n      _products.shuffle();\n    });\n  }\n\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(title: const Text('Product List')),\n      body: RefreshIndicator(\n        onRefresh: _refreshProducts,\n        child: ListView.builder(\n          itemCount: _products.length,\n          padding: const EdgeInsets.all(16),\n          itemBuilder: (context, index) {\n            final product = _products[index];\n            return ProductListTile(\n              key: ValueKey(product.id), // Critical for recycling\n              product: product,\n            );\n          },\n        ),\n      ),\n    );\n  }\n}\n\nclass ProductListTile extends StatelessWidget {\n  final Product product;\n\n  const ProductListTile({\n    super.key,\n    required this.product,\n  });\n\n  @override\n  Widget build(BuildContext context) {\n    return Card(\n      margin: const EdgeInsets.only(bottom: 12),\n      child: ListTile(\n        leading: ClipRRect(\n          borderRadius: BorderRadius.circular(8),\n          child: Image.network(\n            product.imageUrl,\n            width: 56,\n            height: 56,\n            fit: BoxFit.cover,\n            errorBuilder: (_, __, ___) => const Icon(Icons.broken_image),\n          ),\n        ),\n        title: Text(product.name),\n        subtitle: Text('\\$${product.price.toStringAsFixed(2)}'),\n        trailing: const Icon(Icons.chevron_right),\n        onTap: () {\n          // Navigate to detail\n        },\n      ),\n    );\n  }\n}"}
        />

        <BlogSubTitle>{"Step 2: Implement a minimal working baseline."}</BlogSubTitle>
        <CodeBlock
          language={"dart"}
          filename={"snippet-2.dart"}
          code={"// filename: lib/screens/product_grid_screen.dart\n// language: dart\n// purpose: GridView.builder with responsive cross-axis count\n\nimport 'package:flutter/material.dart';\nimport '../models/product.dart';\n\nclass ProductGridScreen extends StatefulWidget {\n  const ProductGridScreen({super.key});\n\n  @override\n  State<ProductGridScreen> createState() => _ProductGridScreenState();\n}\n\nclass _ProductGridScreenState extends State<ProductGridScreen> {\n  final List<Product> _products = List.generate(\n    50,\n    (index) => Product(\n      id: 'grid_$index',\n      name: 'Item ${index + 1}',\n      imageUrl: 'https://picsum.photos/300?random=$index',\n      price: 29.99 + (index % 20),\n    ),\n  );\n\n  final ScrollController _scrollController = ScrollController();\n  bool _isLoadingMore = false;\n\n  @override\n  void initState() {\n    super.initState();\n    _scrollController.addListener(_onScroll);\n  }\n\n  void _onScroll() {\n    if (_scrollController.position.pixels >=\n            _scrollController.position.maxScrollExtent * 0.8 &&\n        !_isLoadingMore) {\n      _loadMoreProducts();\n    }\n  }\n\n  Future<void> _loadMoreProducts() async {\n    setState(() => _isLoadingMore = true);\n    await Future.delayed(const Duration(seconds: 1));\n    \n    final newProducts = List.generate(\n      20,\n      (index) => Product(\n        id: 'grid_${_products.length + index}',\n        name: 'Item ${_products.length + index + 1}',\n        imageUrl: 'https://picsum.photos/300?random=${_products.length + index}',\n        price: 29.99 + (index % 20),\n      ),\n    );\n    \n    setState(() {\n      _products.addAll(newProducts);\n      _isLoadingMore = false;\n    });\n  }\n\n  @override\n  void dispose() {\n    _scrollController.dispose();\n    super.dispose();\n  }\n\n  @override\n  Widget build(BuildContext context) {\n    final screenWidth = MediaQuery.of(context).size.width;\n    final crossAxisCount = screenWidth > 600 ? 4 : 2;\n\n    return Scaffold(\n      appBar: AppBar(title: const Text('Product Grid')),\n      body: GridView.builder(\n        controller: _scrollController,\n        padding: const EdgeInsets.all(16),\n        itemCount: _products.length + (_isLoadingMore ? 1 : 0),\n        gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(\n          crossAxisCount: crossAxisCount,\n          crossAxisSpacing: 16,\n          mainAxisSpacing: 16,\n          childAspectRatio: 0.75, // Width / Height\n        ),\n        itemBuilder: (context, index) {\n          if (index >= _products.length) {\n            return const Center(child: CircularProgressIndicator());\n          }\n\n          final product = _products[index];\n          return ProductGridCard(\n            key: ValueKey(product.id),\n            product: product,\n          );\n        },\n      ),\n    );\n  }\n}\n\nclass ProductGridCard extends StatelessWidget {\n  final Product product;\n\n  const ProductGridCard({\n    super.key,\n    required this.product,\n  });\n\n  @override\n  Widget build(BuildContext context) {\n    return Card(\n      clipBehavior: Clip.antiAlias,\n      child: Column(\n        crossAxisAlignment: CrossAxisAlignment.stretch,\n        children: [\n          Expanded(\n            flex: 3,\n            child: Image.network(\n              product.imageUrl,\n              fit: BoxFit.cover,\n              errorBuilder: (_, __, ___) => Container(\n                color: Colors.grey[300],\n                child: const Icon(Icons.broken_image),\n              ),\n            ),\n          ),\n          Expanded(\n            flex: 1,\n            child: Padding(\n              padding: const EdgeInsets.all(12),\n              child: Column(\n                crossAxisAlignment: CrossAxisAlignment.start,\n                children: [\n                  Text(\n                    product.name,\n                    maxLines: 1,\n                    overflow: TextOverflow.ellipsis,\n                    style: Theme.of(context).textTheme.titleSmall,\n                  ),\n                  const SizedBox(height: 4),\n                  Text(\n                    '\\$${product.price.toStringAsFixed(2)}',\n                    style: Theme.of(context).textTheme.bodyMedium?.copyWith(\n                          color: Theme.of(context).colorScheme.primary,\n                          fontWeight: FontWeight.bold,\n                        ),\n                  ),\n                ],\n              ),\n            ),\n          ),\n        ],\n      ),\n    );\n  }\n}"}
        />
        <BlogSubTitle>Additional Implementation Notes</BlogSubTitle>
        <BlogList items={[
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
        <BlogContent>{"Treat how to implement listview builder and gridview builder in flutter as an iterative build: baseline first, then reliability and performance hardening."}</BlogContent>

        <BlogSubTitle>Full Generated Content (Unabridged)</BlogSubTitle>
        <BlogContent>{"Only real code appears in code blocks. Other content is rendered as normal headings, lists, and text."}</BlogContent>
        <BlogSubTitle>{"Blog Identity"}</BlogSubTitle>
        <BlogList items={[
              "title: Mastering ListView.builder and GridView.builder in Flutter",
              "slug: flutter-listview-gridview-builder-implementation",
              "primary topic keyword: Flutter ListView GridView builder",
              "target stack: Flutter"
        ]} />`n        <BlogSubTitle>{"Hero Hook"}</BlogSubTitle>
        <BlogContent>{"You built a screen with 50 items and your Flutter app stutters. The frame rate drops, scroll feels janky, and users complain. The culprit? Static ListView or GridView widgets that render every child upfrontâ€”even the ones off-screen."}</BlogContent>
        <BlogContent>{"This is where ListView.builder and GridView.builder become essential. They're not just \"better versions\"â€”they're the difference between a 60fps scroll experience and a slideshow. This guide shows you exactly how to implement both, when to use each, and the pitfalls that break performance."}</BlogContent>

        <BlogSubTitle>{"Context Setup"}</BlogSubTitle>
        <BlogSubTitle>{"What You Need to Know"}</BlogSubTitle>
        <BlogContent>{"Flutter's builder constructors use lazy loading: items render only when visible (plus a small buffer). This keeps memory flat regardless of list length."}</BlogContent>
        <BlogContent>{"Prerequisites:"}</BlogContent>
        <BlogList items={[
              "Flutter SDK 3.0+",
              "Basic StatefulWidget knowledge",
              "Understanding of itemCount and index-based access"
        ]} />
        <BlogContent>{"Assumptions:"}</BlogContent>
        <BlogList items={[
              "You're building scrollable content with dynamic or large datasets",
              "You want 60fps performance on mid-tier devices"
        ]} />

        <BlogSubTitle>{"Problem Breakdown"}</BlogSubTitle>
        <BlogSubTitle>{"Key Failure Points"}</BlogSubTitle>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-white/15 rounded-md overflow-hidden">
            <thead className="bg-white/5">
              <tr><th className="border border-white/15 px-3 py-2 text-left">Symptom</th><th className="border border-white/15 px-3 py-2 text-left">Root Cause</th><th className="border border-white/15 px-3 py-2 text-left">Impact</th></tr>
            </thead>
            <tbody><tr><td className="border border-white/10 px-3 py-2 align-top">Scroll jank, dropped frames</td><td className="border border-white/10 px-3 py-2 align-top">Using default ListView(children: [...]) with 100+ items</td><td className="border border-white/10 px-3 py-2 align-top">O(n) build cost, excessive memory</td></tr><tr><td className="border border-white/10 px-3 py-2 align-top">"A RenderFlex overflowed" errors</td><td className="border border-white/10 px-3 py-2 align-top">Missing shrinkWrap: true or unbounded height constraints</td><td className="border border-white/10 px-3 py-2 align-top">Layout crashes</td></tr><tr><td className="border border-white/10 px-3 py-2 align-top">Blank gaps or missing items</td><td className="border border-white/10 px-3 py-2 align-top">Incorrect itemCount or null checks in itemBuilder</td><td className="border border-white/10 px-3 py-2 align-top">Visual bugs, crashes</td></tr><tr><td className="border border-white/10 px-3 py-2 align-top">Grid items wrong size</td><td className="border border-white/10 px-3 py-2 align-top">Missing SliverGridDelegate configuration</td><td className="border border-white/10 px-3 py-2 align-top">Broken layouts</td></tr><tr><td className="border border-white/10 px-3 py-2 align-top">Memory spikes during scroll</td><td className="border border-white/10 px-3 py-2 align-top">Heavy widgets without const constructors or image caching</td><td className="border border-white/10 px-3 py-2 align-top">App termination on low-RAM devices</td></tr></tbody>
          </table>
        </div>
        <BlogSubTitle>{"Real-World Symptoms"}</BlogSubTitle>
        <BlogList items={[
              "Gallery app crashes after scrolling 200 photos",
              "E-commerce product grid freezes on older Android devices",
              "Chat history takes 3+ seconds to open with 500 messages"
        ]} />

        <BlogSubTitle>{"Solution Overview"}</BlogSubTitle>
        <BlogSubTitle>{"The Builder Pattern Approach"}</BlogSubTitle>
        <BlogContent>{"We'll implement both widgets using their .builder constructors with:"}</BlogContent>
        <BlogContent>{"1. Lazy item building via itemBuilder callback"}</BlogContent>
        <BlogContent>{"2. Precise item counting with itemCount"}</BlogContent>
        <BlogContent>{"3. Proper delegate configuration for grids"}</BlogContent>
        <BlogContent>{"4. Performance safeguards: const constructors, AutomaticKeepAliveClientMixin where needed, and key-based recycling"}</BlogContent>
        <BlogContent>{"Why this over alternatives?"}</BlogContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-white/15 rounded-md overflow-hidden">
            <thead className="bg-white/5">
              <tr><th className="border border-white/15 px-3 py-2 text-left">Approach</th><th className="border border-white/15 px-3 py-2 text-left">When to Use</th><th className="border border-white/15 px-3 py-2 text-left">Why Not Default</th></tr>
            </thead>
            <tbody><tr><td className="border border-white/10 px-3 py-2 align-top">ListView.builder</td><td className="border border-white/10 px-3 py-2 align-top">10+ items, dynamic data, unknown length</td><td className="border border-white/10 px-3 py-2 align-top">Default ListView builds all children immediately</td></tr><tr><td className="border border-white/10 px-3 py-2 align-top">GridView.builder</td><td className="border border-white/10 px-3 py-2 align-top">2D scrollable grids, image galleries, dashboards</td><td className="border border-white/10 px-3 py-2 align-top">GridView.count is inflexible for dynamic data</td></tr><tr><td className="border border-white/10 px-3 py-2 align-top">CustomScrollView + slivers</td><td className="border border-white/10 px-3 py-2 align-top">Mixed scrollables (header + list + grid)</td><td className="border border-white/10 px-3 py-2 align-top">Overkill for single-list screens</td></tr><tr><td className="border border-white/10 px-3 py-2 align-top">SingleChildScrollView</td><td className="border border-white/10 px-3 py-2 align-top">&lt;10 static items</td><td className="border border-white/10 px-3 py-2 align-top">No lazy loading, poor performance at scale</td></tr></tbody>
          </table>
        </div>

        <BlogSubTitle>{"Implementation Steps"}</BlogSubTitle>
        <BlogSubTitle>{"Step 1: Set Up Your Data Model"}</BlogSubTitle>
        <BlogContent>{"Create a simple model to represent list items. This keeps your builder clean and type-safe."}</BlogContent>
        <BlogSubTitle>{"Step 2: Implement ListView.builder"}</BlogSubTitle>
        <BlogContent>{"Build a scrollable list with dynamic item heights and tap handling."}</BlogContent>
        <BlogSubTitle>{"Step 3: Implement GridView.builder"}</BlogSubTitle>
        <BlogContent>{"Configure a responsive grid with cross-axis counting and aspect ratio control."}</BlogContent>
        <BlogSubTitle>{"Step 4: Add Pull-to-Refresh and Infinite Scroll"}</BlogSubTitle>
        <BlogContent>{"Wrap builders in RefreshIndicator and detect scroll end for pagination."}</BlogContent>
        <BlogSubTitle>{"Step 5: Optimize with Keys and Const Constructors"}</BlogSubTitle>
        <BlogContent>{"Prevent unnecessary rebuilds and enable proper widget recycling."}</BlogContent>

        <BlogSubTitle>{"Code Snippets"}</BlogSubTitle>
        <CodeBlock
          language={"dart"}
          filename={"code-snippet-1.dart"}
          code={"// filename: lib/models/product.dart\n// language: dart\n// purpose: Data model for list/grid items\n\nclass Product {\n  final String id;\n  final String name;\n  final String imageUrl;\n  final double price;\n\n  const Product({\n    required this.id,\n    required this.name,\n    required this.imageUrl,\n    required this.price,\n  });\n}"}
        />
        <CodeBlock
          language={"dart"}
          filename={"code-snippet-2.dart"}
          code={"// filename: lib/screens/product_list_screen.dart\n// language: dart\n// purpose: ListView.builder implementation with pull-to-refresh\n\nimport 'package:flutter/material.dart';\nimport '../models/product.dart';\n\nclass ProductListScreen extends StatefulWidget {\n  const ProductListScreen({super.key});\n\n  @override\n  State<ProductListScreen> createState() => _ProductListScreenState();\n}\n\nclass _ProductListScreenState extends State<ProductListScreen> {\n  final List<Product> _products = List.generate(\n    100,\n    (index) => Product(\n      id: 'prod_$index',\n      name: 'Product ${index + 1}',\n      imageUrl: 'https://picsum.photos/200?random=$index',\n      price: 19.99 + (index % 10),\n    ),\n  );\n\n  Future<void> _refreshProducts() async {\n    await Future.delayed(const Duration(seconds: 1));\n    setState(() {\n      _products.shuffle();\n    });\n  }\n\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(title: const Text('Product List')),\n      body: RefreshIndicator(\n        onRefresh: _refreshProducts,\n        child: ListView.builder(\n          itemCount: _products.length,\n          padding: const EdgeInsets.all(16),\n          itemBuilder: (context, index) {\n            final product = _products[index];\n            return ProductListTile(\n              key: ValueKey(product.id), // Critical for recycling\n              product: product,\n            );\n          },\n        ),\n      ),\n    );\n  }\n}\n\nclass ProductListTile extends StatelessWidget {\n  final Product product;\n\n  const ProductListTile({\n    super.key,\n    required this.product,\n  });\n\n  @override\n  Widget build(BuildContext context) {\n    return Card(\n      margin: const EdgeInsets.only(bottom: 12),\n      child: ListTile(\n        leading: ClipRRect(\n          borderRadius: BorderRadius.circular(8),\n          child: Image.network(\n            product.imageUrl,\n            width: 56,\n            height: 56,\n            fit: BoxFit.cover,\n            errorBuilder: (_, __, ___) => const Icon(Icons.broken_image),\n          ),\n        ),\n        title: Text(product.name),\n        subtitle: Text('\\$${product.price.toStringAsFixed(2)}'),\n        trailing: const Icon(Icons.chevron_right),\n        onTap: () {\n          // Navigate to detail\n        },\n      ),\n    );\n  }\n}"}
        />
        <CodeBlock
          language={"dart"}
          filename={"code-snippet-3.dart"}
          code={"// filename: lib/screens/product_grid_screen.dart\n// language: dart\n// purpose: GridView.builder with responsive cross-axis count\n\nimport 'package:flutter/material.dart';\nimport '../models/product.dart';\n\nclass ProductGridScreen extends StatefulWidget {\n  const ProductGridScreen({super.key});\n\n  @override\n  State<ProductGridScreen> createState() => _ProductGridScreenState();\n}\n\nclass _ProductGridScreenState extends State<ProductGridScreen> {\n  final List<Product> _products = List.generate(\n    50,\n    (index) => Product(\n      id: 'grid_$index',\n      name: 'Item ${index + 1}',\n      imageUrl: 'https://picsum.photos/300?random=$index',\n      price: 29.99 + (index % 20),\n    ),\n  );\n\n  final ScrollController _scrollController = ScrollController();\n  bool _isLoadingMore = false;\n\n  @override\n  void initState() {\n    super.initState();\n    _scrollController.addListener(_onScroll);\n  }\n\n  void _onScroll() {\n    if (_scrollController.position.pixels >=\n            _scrollController.position.maxScrollExtent * 0.8 &&\n        !_isLoadingMore) {\n      _loadMoreProducts();\n    }\n  }\n\n  Future<void> _loadMoreProducts() async {\n    setState(() => _isLoadingMore = true);\n    await Future.delayed(const Duration(seconds: 1));\n    \n    final newProducts = List.generate(\n      20,\n      (index) => Product(\n        id: 'grid_${_products.length + index}',\n        name: 'Item ${_products.length + index + 1}',\n        imageUrl: 'https://picsum.photos/300?random=${_products.length + index}',\n        price: 29.99 + (index % 20),\n      ),\n    );\n    \n    setState(() {\n      _products.addAll(newProducts);\n      _isLoadingMore = false;\n    });\n  }\n\n  @override\n  void dispose() {\n    _scrollController.dispose();\n    super.dispose();\n  }\n\n  @override\n  Widget build(BuildContext context) {\n    final screenWidth = MediaQuery.of(context).size.width;\n    final crossAxisCount = screenWidth > 600 ? 4 : 2;\n\n    return Scaffold(\n      appBar: AppBar(title: const Text('Product Grid')),\n      body: GridView.builder(\n        controller: _scrollController,\n        padding: const EdgeInsets.all(16),\n        itemCount: _products.length + (_isLoadingMore ? 1 : 0),\n        gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(\n          crossAxisCount: crossAxisCount,\n          crossAxisSpacing: 16,\n          mainAxisSpacing: 16,\n          childAspectRatio: 0.75, // Width / Height\n        ),\n        itemBuilder: (context, index) {\n          if (index >= _products.length) {\n            return const Center(child: CircularProgressIndicator());\n          }\n\n          final product = _products[index];\n          return ProductGridCard(\n            key: ValueKey(product.id),\n            product: product,\n          );\n        },\n      ),\n    );\n  }\n}\n\nclass ProductGridCard extends StatelessWidget {\n  final Product product;\n\n  const ProductGridCard({\n    super.key,\n    required this.product,\n  });\n\n  @override\n  Widget build(BuildContext context) {\n    return Card(\n      clipBehavior: Clip.antiAlias,\n      child: Column(\n        crossAxisAlignment: CrossAxisAlignment.stretch,\n        children: [\n          Expanded(\n            flex: 3,\n            child: Image.network(\n              product.imageUrl,\n              fit: BoxFit.cover,\n              errorBuilder: (_, __, ___) => Container(\n                color: Colors.grey[300],\n                child: const Icon(Icons.broken_image),\n              ),\n            ),\n          ),\n          Expanded(\n            flex: 1,\n            child: Padding(\n              padding: const EdgeInsets.all(12),\n              child: Column(\n                crossAxisAlignment: CrossAxisAlignment.start,\n                children: [\n                  Text(\n                    product.name,\n                    maxLines: 1,\n                    overflow: TextOverflow.ellipsis,\n                    style: Theme.of(context).textTheme.titleSmall,\n                  ),\n                  const SizedBox(height: 4),\n                  Text(\n                    '\\$${product.price.toStringAsFixed(2)}',\n                    style: Theme.of(context).textTheme.bodyMedium?.copyWith(\n                          color: Theme.of(context).colorScheme.primary,\n                          fontWeight: FontWeight.bold,\n                        ),\n                  ),\n                ],\n              ),\n            ),\n          ),\n        ],\n      ),\n    );\n  }\n}"}
        />
        <CodeBlock
          language={"dart"}
          filename={"code-snippet-4.dart"}
          code={"// filename: lib/widgets/optimized_list_item.dart\n// language: dart\n// purpose: Stateful list item with keep-alive for complex content\n\nimport 'package:flutter/material.dart';\n\nclass OptimizedListItem extends StatefulWidget {\n  final int index;\n  final String content;\n\n  const OptimizedListItem({\n    super.key,\n    required this.index,\n    required this.content,\n  });\n\n  @override\n  State<OptimizedListItem> createState() => _OptimizedListItemState();\n}\n\nclass _OptimizedListItemState extends State<OptimizedListItem>\n    with AutomaticKeepAliveClientMixin {\n  @override\n  bool get wantKeepAlive => true; // Preserve state when scrolled off-screen\n\n  @override\n  Widget build(BuildContext context) {\n    super.build(context); // Required when using AutomaticKeepAliveClientMixin\n    \n    return Container(\n      padding: const EdgeInsets.all(16),\n      child: Text('Item ${widget.index}: ${widget.content}'),\n    );\n  }\n}"}
        />

        <BlogSubTitle>{"Code Explanation"}</BlogSubTitle>
        <BlogSubTitle>{"Critical Implementation Details"}</BlogSubTitle>
        <BlogContent>{"Line-by-Line Breakdown:"}</BlogContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-white/15 rounded-md overflow-hidden">
            <thead className="bg-white/5">
              <tr><th className="border border-white/15 px-3 py-2 text-left">Code</th><th className="border border-white/15 px-3 py-2 text-left">Purpose</th><th className="border border-white/15 px-3 py-2 text-left">What Breaks If Wrong</th></tr>
            </thead>
            <tbody><tr><td className="border border-white/10 px-3 py-2 align-top">key: ValueKey(product.id)</td><td className="border border-white/10 px-3 py-2 align-top">Enables Flutter's widget recycling to match state with correct item</td><td className="border border-white/10 px-3 py-2 align-top">State jumps between items, visual glitches, lost form input</td></tr><tr><td className="border border-white/10 px-3 py-2 align-top">itemCount: _products.length</td><td className="border border-white/10 px-3 py-2 align-top">Tells builder when to stop; prevents null index access</td><td className="border border-white/10 px-3 py-2 align-top">RangeError, crashes at list end</td></tr><tr><td className="border border-white/10 px-3 py-2 align-top">SliverGridDelegateWithFixedCrossAxisCount</td><td className="border border-white/10 px-3 py-2 align-top">Defines grid layout: columns, spacing, aspect ratio</td><td className="border border-white/10 px-3 py-2 align-top">Items overflow, wrong sizes, layout exceptions</td></tr><tr><td className="border border-white/10 px-3 py-2 align-top">childAspectRatio: 0.75</td><td className="border border-white/10 px-3 py-2 align-top">Controls item height relative to width</td><td className="border border-white/10 px-3 py-2 align-top">Squashed or stretched images</td></tr><tr><td className="border border-white/10 px-3 py-2 align-top">AutomaticKeepAliveClientMixin + wantKeepAlive</td><td className="border border-white/10 px-3 py-2 align-top">Preserves widget state (video position, scroll position) when item leaves viewport</td><td className="border border-white/10 px-3 py-2 align-top">Video restarts, tabs reset, poor UX</td></tr><tr><td className="border border-white/10 px-3 py-2 align-top">super.build(context) in build()</td><td className="border border-white/10 px-3 py-2 align-top">Required boilerplate for keep-alive mixin</td><td className="border border-white/10 px-3 py-2 align-top">Keep-alive silently fails</td></tr><tr><td className="border border-white/10 px-3 py-2 align-top">ScrollController with 0.8 * maxScrollExtent</td><td className="border border-white/10 px-3 py-2 align-top">Triggers pagination before user hits bottom</td><td className="border border-white/10 px-3 py-2 align-top">Late loading, visible "loading" flash</td></tr></tbody>
          </table>
        </div>
        <BlogContent>{"What Can Go Wrong:"}</BlogContent>
        <BlogList items={[
              "Missing keys with stateful children: If you use Checkbox or TextField in list items without keys, toggling item 5 might check item 12 instead. Always use stable keys for stateful content.",
              "Unbounded height in nested scrollables: Putting ListView.builder inside Column without Expanded or shrinkWrap: true throws render errors. Use shrinkWrap sparinglyâ€”it defeats lazy loading.",
              "Forgetting dispose() on ScrollController: Memory leak, scroll position listeners fire on destroyed widgets."
        ]} />

        <BlogSubTitle>{"Validation Checklist"}</BlogSubTitle>
        <BlogSubTitle>{"Verify Your Implementation"}</BlogSubTitle>
        <BlogList items={[
              "[ ] Scroll 100+ items smoothly at 60fps (check with performance overlay: flutter run --profile)",
              "[ ] Memory stays flat (~50-100MB) regardless of list length",
              "[ ] Pull-to-refresh triggers onRefresh and shows indicator",
              "[ ] Grid adapts columns on rotation (2 â†’ 4 on tablet)",
              "[ ] No \"yellow/black\" overflow stripes in debug mode",
              "[ ] Error builder shows placeholder for failed image loads",
              "[ ] Pagination loads 20 more items at 80% scroll",
              "[ ] Keys prevent state misalignment: toggle checkbox in item 1, scroll away, returnâ€”state persists correctly"
        ]} />
        <BlogContent>{"Expected Results:"}</BlogContent>
        <BlogList items={[
              "First frame renders in <16ms",
              "Scroll jank <5% frames",
              "Memory delta <10MB when scrolling 1000 items"
        ]} />

        <BlogSubTitle>{"Edge Cases"}</BlogSubTitle>
        <BlogSubTitle>{"Non-Happy Path Handling"}</BlogSubTitle>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-white/15 rounded-md overflow-hidden">
            <thead className="bg-white/5">
              <tr><th className="border border-white/15 px-3 py-2 text-left">Scenario</th><th className="border border-white/15 px-3 py-2 text-left">Fallback Behavior</th><th className="border border-white/15 px-3 py-2 text-left">Implementation</th></tr>
            </thead>
            <tbody><tr><td className="border border-white/10 px-3 py-2 align-top">Empty list (itemCount: 0)</td><td className="border border-white/10 px-3 py-2 align-top">Show placeholder widget</td><td className="border border-white/10 px-3 py-2 align-top">Wrap builder in AnimatedSwitcher, return Center(child: Text('No items')) when empty</td></tr><tr><td className="border border-white/10 px-3 py-2 align-top">Network image fails</td><td className="border border-white/10 px-3 py-2 align-top">Show broken image icon</td><td className="border border-white/10 px-3 py-2 align-top">errorBuilder on Image.network</td></tr><tr><td className="border border-white/10 px-3 py-2 align-top">Rapid scroll to end</td><td className="border border-white/10 px-3 py-2 align-top">Debounce pagination trigger</td><td className="border border-white/10 px-3 py-2 align-top">Add Timer in _loadMoreProducts, cancel if new call arrives</td></tr><tr><td className="border border-white/10 px-3 py-2 align-top">Very large images</td><td className="border border-white/10 px-3 py-2 align-top">OOM crash</td><td className="border border-white/10 px-3 py-2 align-top">Use cacheWidth/cacheHeight on Image.network or CachedNetworkImage package</td></tr><tr><td className="border border-white/10 px-3 py-2 align-top">Nested inside Column</td><td className="border border-white/10 px-3 py-2 align-top">"Vertical viewport was given unbounded height"</td><td className="border border-white/10 px-3 py-2 align-top">Wrap in Expanded or use shrinkWrap: true (latter hurts performance)</td></tr><tr><td className="border border-white/10 px-3 py-2 align-top">Dynamic item height</td><td className="border border-white/10 px-3 py-2 align-top">Layout jumps, scroll position drifts</td><td className="border border-white/10 px-3 py-2 align-top">Use prototypeItem in ListView.builder (Flutter 3.13+) or fixed item extents</td></tr></tbody>
          </table>
        </div>

        <BlogSubTitle>{"Best Practices"}</BlogSubTitle>
        <BlogSubTitle>{"Do"}</BlogSubTitle>
        <BlogList items={[
              "Use const constructors for static parts of list items (reduces rebuilds by ~40%)",
              "Implement == and hashCode on model classes for proper ValueKey stability",
              "Profile with flutter run --profile and check \"Raster\" thread for GPU-bound jank",
              "Use RepaintBoundary around complex items if profiling shows paint overhead",
              "Cache images with cached_network_image package for offline support"
        ]} />
        <BlogSubTitle>{"Don't"}</BlogSubTitle>
        <BlogList items={[
              "Use shrinkWrap: true in scrollable lists (defeats lazy loading)",
              "Call setState on every scroll pixel (use NotificationListener or ValueNotifier)",
              "Build different widget types in same builder without keys (type mismatch crashes)",
              "Ignore dispose() on controllers, listeners, or timers",
              "Use ListView default constructor for >20 items"
        ]} />

        <BlogSubTitle>{"Pro Tips"}</BlogSubTitle>
        <BlogList items={[
              "Prototype item for dynamic heights: Flutter 3.13+ adds prototypeItem to ListView.builder. Pass one representative itemâ€”Flutter uses its height for efficient layout without measuring every child."
        ]} />
        <BlogList items={[
              "Sliver overlap for headers: Need a sticky header above your grid? Use CustomScrollView with SliverAppBar + SliverGrid instead of wrapping GridView.builder in a Column."
        ]} />
        <BlogList items={[
              "Extent-based builders for known sizes: If all items are exactly 80px tall, use ListView.builder with itemExtent: 80. Skips layout measurement entirelyâ€”fastest possible scroll."
        ]} />
        <BlogList items={[
              "Deferred loading for images: Add loadingBuilder to Image.network to show shimmer while loading, preventing layout shift when image arrives."
        ]} />
        <BlogList items={[
              "Golden tests for grid layouts: Use flutter test --update-goldens to catch accidental delegate changes that break your product grid on different screen sizes."
        ]} />

        <BlogSubTitle>{"Resources"}</BlogSubTitle>
        <BlogSubTitle>{"Official Documentation"}</BlogSubTitle>
        <BlogList items={[
              "Flutter Docs: Lists & Grids (https://docs.flutter.dev/ui/widgets/scrolling)",
              "ListView.builder API (https://api.flutter.dev/flutter/widgets/ListView/ListView.builder.html)",
              "GridView.builder API (https://api.flutter.dev/flutter/widgets/GridView/GridView.builder.html)",
              "SliverGridDelegateWithFixedCrossAxisCount (https://api.flutter.dev/flutter/rendering/SliverGridDelegateWithFixedCrossAxisCount-class.html)",
              "AutomaticKeepAliveClientMixin (https://api.flutter.dev/flutter/widgets/AutomaticKeepAliveClientMixin-mixin.html)"
        ]} />
        <BlogSubTitle>{"High-Signal Community References"}</BlogSubTitle>
        <BlogList items={[
              "Flutter Performance Best Practices (https://docs.flutter.dev/perf) â€” Official profiling guidance",
              "cached_network_image on pub.dev (https://pub.dev/packages/cached_network_image) â€” Production image caching"
        ]} />

        <BlogSubTitle>{"Final Thoughts"}</BlogSubTitle>
        <BlogContent>{"ListView.builder and GridView.builder aren't optional optimizationsâ€”they're the baseline for professional Flutter development. The default constructors exist for quick prototypes; builder constructors exist for shipping apps."}</BlogContent>
        <BlogContent>{"Start every scrollable screen with builders. Add keys when items hold state. Profile before optimizing further. Most \"slow\" lists are fixed by const constructors and proper image caching, not complex architecture."}</BlogContent>
        <BlogContent>{"Next step: Open your current project, find any"}</BlogContent>




        <BlogTips title="Pro Tip" description="Validate generated TSX before writing to disk." />
        <RelatedNextBlogButton currentSlug={pathname} currentTags={tags} />
      </div>
    </div>
  );
};

export default FlutterPackagesPage;

