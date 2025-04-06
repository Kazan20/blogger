// app/posts/[slug]/page.jsx - Individual blog post
import { getPostBySlug, getPosts } from '@/lib/posts';
import BlogContent from '@/components/BlogContent';
import Comments from '@/components/Comments';
import CommentForm from '@/components/CommentForm';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const posts = await getPosts();
  
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }
  
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function Post({ params }) {
  const post = await getPostBySlug(params.slug);
  
  if (!post) {
    notFound();
  }
  
  return (
    <article className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="text-gray-600 mb-8">
        {new Date(post.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </div>
      
      <BlogContent content={post.content} />
      
      <div className="mt-12 pt-8 border-t">
        <h2 className="text-2xl font-bold mb-6">Comments</h2>
        <Comments postId={post.id} />
        <div className="mt-8">
          <CommentForm postId={post.id} />
        </div>
      </div>
    </article>
  );
}