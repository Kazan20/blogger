// components/BlogCard.jsx
import Link from 'next/link';
import Image from 'next/image';

export default function BlogCard({ post }) {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      {post.coverImage && (
        <div className="relative h-48">
          <Image 
            src={post.coverImage} 
            alt={post.title}
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">
          <Link href={`/posts/${post.slug}`} className="hover:text-blue-600">
            {post.title}
          </Link>
        </h3>
        <p className="text-gray-600 text-sm mb-3">
          {new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
        <p className="text-gray-700 mb-4">{post.excerpt}</p>
        <Link 
          href={`/posts/${post.slug}`} 
          className="text-blue-600 hover:underline"
        >
          Read more →
        </Link>
      </div>
    </div>
  );
}