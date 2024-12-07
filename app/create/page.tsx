'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MediaUpload } from '@/components/MediaUpload';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CreatePost() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [media, setMedia] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically upload the media file first
    // Then create the post with the media URL
    // For now, we'll just log the data
    console.log({
      title,
      content,
      mediaFile: media
    });
    
    router.push('/');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Create a New Story</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Input
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="text-2xl font-bold"
            />
          </div>
          <div>
            <MediaUpload onMediaChange={setMedia} />
          </div>
          <div>
            <Textarea
              placeholder="Tell your story..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="min-h-[400px]"
            />
          </div>
          <div className="flex justify-end space-x-4">
            <Button variant="outline" onClick={() => router.push('/')}>
              Cancel
            </Button>
            <Button type="submit">Publish</Button>
          </div>
        </form>
      </div>
    </div>
  );
}