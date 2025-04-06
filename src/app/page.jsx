// app/page.jsx - Homepage
import Link from 'next/link';
import { getPosts } from '@/lib/posts';
import BlogCard from '@/components/BlogCard';

export default async function Home() {
  const posts = await getPosts(3); // Get 3 most recent posts
  
  return (
    <div className="space-y-8">
      <section className="py-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Blog</h1>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto">
          Sharing thoughts, ideas, and insights on technology, programming, and more.
        </p>
      </section>
      
      <section>
        <h2 className="text-2xl font-bold mb-6">Latest Posts</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {posts.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/posts" className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            View All Posts
          </Link>
        </div>
      </section>
    </div>
  );
}