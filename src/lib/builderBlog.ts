/**
 * Builder.io Blog Integration
 *
 * Fetches blog posts from Builder.io using REST API.
 * Follows Kitchen OS Builder.io Integration Rules - REST API only, server fetch.
 * Data Model: blog-post
 */

import { BUILDER_API_KEY, BUILDER_CONTENT_API } from './builderConfig';
import type { BlogPost, BlogCategory } from '@/data/blogPosts';

interface BuilderBlogPost {
  id: string;
  data: {
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    author: string;
    authorRole?: string;
    authorBio?: string;
    publishedDate: string;
    category: BlogCategory;
    tags?: string[];
    featuredImage?: string;
    readTime?: number;
    featured?: boolean;
  };
}

const BUILDER_MODEL = 'blog-post';
const REVALIDATE_TIME = 60; // Revalidate every 60 seconds

/**
 * Fetch all blog posts from Builder.io
 */
export async function fetchAllBlogPosts(): Promise<BlogPost[]> {
  const url = `${BUILDER_CONTENT_API}/${BUILDER_MODEL}?apiKey=${BUILDER_API_KEY}&limit=100&sort.publishedDate=-1`;

  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
      next: { revalidate: REVALIDATE_TIME },
    });

    if (!response.ok) {
      console.error('[Builder.io Blog] Failed to fetch posts', response.status, response.statusText);
      return [];
    }

    const payload = await response.json();
    const posts = payload?.results || [];

    return posts.map(transformBuilderPost);
  } catch (error) {
    console.error('[Builder.io Blog] Error fetching posts:', error);
    return [];
  }
}

/**
 * Fetch a single blog post by slug from Builder.io
 */
export async function fetchBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const url = `${BUILDER_CONTENT_API}/${BUILDER_MODEL}?apiKey=${BUILDER_API_KEY}&query.data.slug=${encodeURIComponent(slug)}&limit=1`;

  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
      next: { revalidate: REVALIDATE_TIME },
    });

    if (!response.ok) {
      console.error('[Builder.io Blog] Failed to fetch post', response.status, response.statusText);
      return null;
    }

    const payload = await response.json();
    const post = payload?.results?.[0];

    if (!post) {
      return null;
    }

    return transformBuilderPost(post);
  } catch (error) {
    console.error('[Builder.io Blog] Error fetching post:', error);
    return null;
  }
}

/**
 * Transform Builder.io post data to BlogPost interface
 */
function transformBuilderPost(builderPost: BuilderBlogPost): BlogPost {
  const data = builderPost.data;

  return {
    id: builderPost.id,
    slug: data.slug,
    title: data.title,
    excerpt: data.excerpt,
    content: data.content,
    author: {
      name: data.author,
      role: data.authorRole,
      bio: data.authorBio,
    },
    publishedDate: data.publishedDate,
    category: data.category,
    tags: data.tags || [],
    featuredImage: data.featuredImage,
    readTime: data.readTime || calculateReadTime(data.content),
    featured: data.featured || false,
  };
}

/**
 * Calculate estimated read time based on content length
 */
function calculateReadTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

/**
 * Get posts by category
 */
export async function fetchPostsByCategory(category: BlogCategory): Promise<BlogPost[]> {
  const allPosts = await fetchAllBlogPosts();
  return allPosts.filter((post) => post.category === category);
}

/**
 * Get featured posts
 */
export async function fetchFeaturedPosts(): Promise<BlogPost[]> {
  const allPosts = await fetchAllBlogPosts();
  return allPosts.filter((post) => post.featured);
}

/**
 * Get related posts (same category, excluding current post)
 */
export async function fetchRelatedPosts(currentSlug: string, limit: number = 3): Promise<BlogPost[]> {
  const allPosts = await fetchAllBlogPosts();
  const currentPost = allPosts.find((post) => post.slug === currentSlug);

  if (!currentPost) return [];

  return allPosts
    .filter((post) => post.slug !== currentSlug && post.category === currentPost.category)
    .slice(0, limit);
}
