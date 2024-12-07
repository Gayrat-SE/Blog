'use client';

import { MOCK_POSTS } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Heart, MessageCircle, Eye } from 'lucide-react';
import { useState } from 'react';

export default function PostPage({ params }: { params: { id: string } }) {
  const post = MOCK_POSTS.find(p => p.id === params.id);
  const [comment, setComment] = useState('');
  const [likes, setLikes] = useState(post?.likes || 0);
  const [isLiked, setIsLiked] = useState(false);

  if (!post) {
    return <div>Post not found</div>;
  }

  const handleLike = () => {
    if (isLiked) {
      setLikes(prev => prev - 1);
    } else {
      setLikes(prev => prev + 1);
    }
    setIsLiked(!isLiked);
  };

  const handleComment = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically make an API call to save the comment
    console.log({ comment });
    setComment('');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <article className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex items-center space-x-4 mb-8 text-muted-foreground">
          <span>By {post.author}</span>
          <span>·</span>
          <span>{new Date(post.createdAt).toLocaleDateString()}</span>
        </div>
        
        <div className="prose max-w-none mb-8">
          {post.content}
        </div>

        <div className="flex items-center space-x-6 mb-8">
          <button
            onClick={handleLike}
            className="flex items-center space-x-2 hover:text-primary transition-colors"
          >
            <Heart className={`h-6 w-6 ${isLiked ? 'fill-current text-red-500' : ''}`} />
            <span>{likes}</span>
          </button>
          <div className="flex items-center space-x-2">
            <MessageCircle className="h-6 w-6" />
            <span>{post.comments.length}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Eye className="h-6 w-6" />
            <span>{post.views}</span>
          </div>
        </div>

        <div className="border-t pt-8">
          <h2 className="text-2xl font-bold mb-4">Comments</h2>
          <form onSubmit={handleComment} className="mb-8">
            <Textarea
              placeholder="Write a comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="mb-4"
            />
            <Button type="submit">Post Comment</Button>
          </form>

          <div className="space-y-6">
            {post.comments.map((comment) => (
              <div key={comment.id} className="border-b pb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">{comment.author}</span>
                  <span className="text-sm text-muted-foreground">
                    {new Date(comment.createdAt).toLocaleDateString()}
                  </span>
                </div>
                <p>{comment.content}</p>
              </div>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}