/**
 * Individual Blog Post Page
 *
 * Dynamic route for blog post content with full SEO optimization.
 * Includes related posts, author info, and social sharing.
 */

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowLeft, Tag, User } from 'lucide-react';
import { fetchAllBlogPosts, fetchBlogPostBySlug, fetchRelatedPosts } from '@/lib/builderBlog';
import type { BlogPost } from '@/data/blogPosts';
import { BlogPostingSchema, OrganizationSchema, BreadcrumbSchema } from '@/components/seo/JsonLd';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export const revalidate = 60; // Revalidate every 60 seconds

export async function generateStaticParams() {
  const posts = await fetchAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await fetchBlogPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found - Kitchen OS',
    };
  }

  return {
    title: `${post.title} - Kitchen OS Blog`,
    description: post.excerpt,
    keywords: post.tags,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://kitchen-os.com/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.publishedDate,
      modifiedTime: post.updatedDate || post.publishedDate,
      authors: [post.author.name],
      tags: post.tags,
      images: post.featuredImage
        ? [
            {
              url: `https://kitchen-os.com${post.featuredImage}`,
              width: 1200,
              height: 630,
              alt: post.title,
            },
          ]
        : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await fetchBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = await fetchRelatedPosts(slug, 3);
  const formattedDate = new Date(post.publishedDate).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const breadcrumbItems = [
    { name: 'Home', url: 'https://kitchen-os.com' },
    { name: 'Blog', url: 'https://kitchen-os.com/blog' },
    { name: post.title, url: `https://kitchen-os.com/blog/${post.slug}` },
  ];

  return (
    <>
      <BlogPostingSchema
        headline={post.title}
        description={post.excerpt}
        image={post.featuredImage ? `https://kitchen-os.com${post.featuredImage}` : undefined}
        datePublished={post.publishedDate}
        dateModified={post.updatedDate || post.publishedDate}
        author={{ name: post.author.name }}
        wordCount={post.content.split(/\s+/).length}
      />
      <OrganizationSchema />
      <BreadcrumbSchema items={breadcrumbItems} />

      <main className="min-h-screen bg-white">
        {/* Header/Hero */}
        <div className="bg-gradient-to-b from-gray-50 to-white border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Breadcrumb */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            {/* Category Badge */}
            <div className="flex items-center gap-2 mb-4">
              <Tag className="w-4 h-4 text-green-600" />
              <span className="text-sm font-semibold text-green-600">{post.category}</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-gray-600 mb-8">{post.excerpt}</p>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <div>
                  <p className="font-medium text-gray-900">{post.author.name}</p>
                  {post.author.role && <p className="text-sm">{post.author.role}</p>}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{formattedDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{post.readTime} min read</span>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        {post.featuredImage && (
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={post.featuredImage}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 1280px"
                priority
              />
            </div>
          </div>
        )}

        {/* Article Content */}
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div
            className="prose prose-lg prose-green max-w-none
              prose-headings:font-bold prose-headings:text-gray-900
              prose-h1:text-4xl prose-h1:mb-6
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-green-600 prose-a:no-underline hover:prose-a:underline
              prose-strong:text-gray-900 prose-strong:font-semibold
              prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
              prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6
              prose-li:text-gray-700 prose-li:mb-2
              prose-blockquote:border-l-4 prose-blockquote:border-green-500 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-600
              prose-code:text-green-600 prose-code:bg-green-50 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
            "
            dangerouslySetInnerHTML={{ __html: formatBlogContent(post.content) }}
          />

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Tags:</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </article>

        {/* Author Bio */}
        {post.author.bio && (
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">About the Author</h3>
              <p className="text-gray-700 mb-2">
                <strong>{post.author.name}</strong>
                {post.author.role && ` - ${post.author.role}`}
              </p>
              <p className="text-gray-600">{post.author.bio}</p>
            </div>
          </div>
        )}

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <RelatedPostCard key={relatedPost.id} post={relatedPost} />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-green-600 to-green-700 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Kitchen Operations?
            </h2>
            <p className="text-xl mb-8 text-green-100">
              Discover how Kitchen OS can help you improve food safety, reduce waste, and streamline compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://tidycal.com/foodsafesystem/30-minute-video-call-with-kitchen-os-founder-neil-bradley"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-600 font-bold rounded-xl hover:bg-gray-50 transition-all shadow-xl"
              >
                Book a Demo
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center px-8 py-4 bg-green-500 text-white font-bold rounded-xl hover:bg-green-400 transition-all"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

// Related Post Card Component
function RelatedPostCard({ post }: { post: BlogPost }) {
  const formattedDate = new Date(post.publishedDate).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden border border-gray-200 hover:border-green-500"
    >
      {post.featuredImage && (
        <div className="relative w-full h-40 bg-gray-100">
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      )}
      <div className="p-6">
        <span className="text-xs font-semibold text-green-600 uppercase tracking-wide">
          {post.category}
        </span>
        <h3 className="text-lg font-bold text-gray-900 mt-2 mb-2 group-hover:text-green-600 transition-colors line-clamp-2">
          {post.title}
        </h3>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Calendar className="w-4 h-4" />
          <span>{formattedDate}</span>
        </div>
      </div>
    </Link>
  );
}

// Format blog content (convert markdown-like syntax to HTML)
function formatBlogContent(content: string): string {
  // Simple markdown-to-HTML conversion
  let html = content
    // Headers
    .replace(/^# (.+)$/gm, '<h1>$1</h1>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    // Bold
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    // Italic
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    // Links
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>')
    // Line breaks
    .replace(/\n\n/g, '</p><p>')
    // Blockquotes
    .replace(/^> (.+)$/gm, '<blockquote>$1</blockquote>');

  // Wrap in paragraphs
  html = '<p>' + html + '</p>';

  return html;
}
