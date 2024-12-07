'use client';

import { UploadCloud, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import Image from 'next/image';

interface MediaUploadProps {
  onMediaChange: (file: File | null) => void;
}

export function MediaUpload({ onMediaChange }: MediaUploadProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const [mediaType, setMediaType] = useState<'image' | 'video' | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    onMediaChange(file);
    const fileUrl = URL.createObjectURL(file);
    setPreview(fileUrl);
    setMediaType(file.type.startsWith('image/') ? 'image' : 'video');
  };

  const handleRemove = () => {
    setPreview(null);
    setMediaType(null);
    onMediaChange(null);
  };

  return (
    <div className="w-full">
      {!preview ? (
        <div className="border-2 border-dashed rounded-lg p-8 text-center">
          <input
            type="file"
            accept="image/*,video/*"
            onChange={handleFileChange}
            className="hidden"
            id="media-upload"
          />
          <label
            htmlFor="media-upload"
            className="cursor-pointer flex flex-col items-center"
          >
            <UploadCloud className="h-12 w-12 text-muted-foreground mb-4" />
            <p className="text-sm text-muted-foreground mb-2">
              Click to upload image or video
            </p>
            <p className="text-xs text-muted-foreground">
              SVG, PNG, JPG, GIF, MP4 or WebM (max. 100MB)
            </p>
          </label>
        </div>
      ) : (
        <div className="relative">
          {mediaType === 'image' ? (
            <div className="relative aspect-video">
              <Image
                src={preview}
                alt="Preview"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          ) : (
            <video
              src={preview}
              controls
              className="w-full rounded-lg aspect-video"
            />
          )}
          <Button
            variant="destructive"
            size="icon"
            className="absolute top-2 right-2"
            onClick={handleRemove}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
}