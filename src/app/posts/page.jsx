// app/posts/page.jsx - Blog listing page
import { getPosts } from '@/lib/posts';
import BlogCard from '@/components/BlogCard';

export default async function Posts() {
  const posts = await getPosts();
  
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">All Posts</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map(post => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}