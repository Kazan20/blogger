// app/admin/edit/[id]/page.jsx
import { notFound } from 'next/navigation';
import PostForm from '@/components/PostForm';
import { getPosts } from '@/lib/posts';

export default async function EditPost({ params }) {
  const posts = await getPosts();
  const post = posts.find(p => p.id === params.id);
  
  if (!post) {
    notFound();
  }
  
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Edit Post</h1>
      <PostForm post={post} />
    </div>
  );
}