'use client';

import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';
import Link from 'next/link';

export function CreatePostButton() {
  return (
    <Link href="/create">
      <Button className="fixed bottom-8 right-8 rounded-full shadow-lg">
        <PlusCircle className="mr-2 h-4 w-4" />
        Write a Story
      </Button>
    </Link>
  );
}