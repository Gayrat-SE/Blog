import { PostCard } from '@/components/PostCard';
import { CreatePostButton } from '@/components/CreatePostButton';
import { MOCK_POSTS } from '@/lib/types';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">My Blog</h1>
        <div className="max-w-2xl mx-auto">
          {MOCK_POSTS.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
        <CreatePostButton />
      </div>
    </main>
  );
}