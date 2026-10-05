import { BLOG_POSTS } from '@/data/blogPosts';
import BlogPostClient from './BlogPostClient';

/**
 * Required by Next.js static HTML export (`output: 'export'`)
 */
export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    id: post.id,
  }));
}

export default async function Page({ params }) {
  const resolvedParams = await params;
  return <BlogPostClient postId={resolvedParams?.id} />;
}
