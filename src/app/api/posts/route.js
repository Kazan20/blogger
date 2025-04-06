// app/api/posts/route.js
import { NextResponse } from 'next/server';
import { getPosts, getPostBySlug } from '@/lib/posts';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get('slug');
  
  if (slug) {
    const post = await getPostBySlug(slug);
    return post 
      ? NextResponse.json(post)
      : NextResponse.json({ error: 'Post not found' }, { status: 404 });
  }
  
  const posts = await getPosts();
  return NextResponse.json(posts);
}