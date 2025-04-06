// app/admin/create/page.jsx
import PostForm from '@/components/PostForm';

export default function CreatePost() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Create New Post</h1>
      <PostForm />
    </div>
  );
}