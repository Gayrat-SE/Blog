'use client';

import { Post } from '@/lib/types';
import { Heart, MessageCircle, Eye, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Image from 'next/image';

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  const [likes, setLikes] = useState(post.likes);
  const [isLiked, setIsLiked] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikes(prev => prev - 1);
    } else {
      setLikes(prev => prev + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <Card className="w-full mb-6 hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-center space-x-4 mb-4">
          <Avatar>
            <AvatarImage src={post.author.image} alt={post.author.name} />
            <AvatarFallback>{post.author.name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold">{post.author.name}</p>
            <p className="text-sm text-muted-foreground">
              {new Date(post.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>
        <CardTitle>
          <Link href={`/post/${post.id}`} className="hover:text-primary">
            {post.title}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {post.media && (
          <div className="mb-4">
            {post.media.type === 'image' ? (
              <div className="relative aspect-video mb-4">
                <Image
                  src={post.media.url}
                  alt={post.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            ) : (
              <video
                src={post.media.url}
                controls
                className="w-full rounded-lg aspect-video mb-4"
              />
            )}
          </div>
        )}
        <div className={`prose max-w-none ${!isExpanded && 'line-clamp-3'}`}>
          {post.content}
        </div>
        {post.content.length > 200 && (
          <Button
            variant="ghost"
            className="mt-2"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? (
              <><ChevronUp className="h-4 w-4 mr-2" /> Show less</>
            ) : (
              <><ChevronDown className="h-4 w-4 mr-2" /> Read more</>
            )}
          </Button>
        )}
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <button
            onClick={handleLike}
            className="flex items-center space-x-1 text-sm hover:text-primary transition-colors"
          >
            <Heart className={`h-4 w-4 ${isLiked ? 'fill-current text-red-500' : ''}`} />
            <span>{likes}</span>
          </button>
          <div className="flex items-center space-x-1 text-sm">
            <MessageCircle className="h-4 w-4" />
            <span>{post.comments.length}</span>
          </div>
          <div className="flex items-center space-x-1 text-sm">
            <Eye className="h-4 w-4" />
            <span>{post.views}</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}