export interface User {
  id: string;
  name: string;
  email: string;
  image?: string;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  author: User;
  createdAt: Date;
  likes: number;
  views: number;
  comments: Comment[];
  media?: {
    url: string;
    type: 'image' | 'video';
  };
}

export interface Comment {
  id: string;
  content: string;
  author: User;
  createdAt: Date;
}

// Mock data for development
export const MOCK_POSTS: Post[] = [
  {
    id: '1',
    title: 'Getting Started with Next.js',
    content: `Next.js is a powerful React framework that makes building web applications a breeze. It provides an excellent developer experience with features like automatic routing, server-side rendering, and API routes.

In this comprehensive guide, we'll explore the key features that make Next.js stand out from other frameworks. We'll cover topics such as:

1. File-based Routing
2. Server-side Rendering (SSR)
3. Static Site Generation (SSG)
4. API Routes
5. Image Optimization
6. Built-in CSS Support

Whether you're building a simple blog or a complex web application, Next.js provides the tools and features you need to create performant, scalable applications.`,
    author: {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      image: 'https://api.dicebear.com/7.x/avatars/svg?seed=john'
    },
    createdAt: new Date('2024-03-20'),
    likes: 42,
    views: 156,
    comments: [
      {
        id: '1',
        content: 'Great article! Very helpful.',
        author: {
          id: '2',
          name: 'Jane Smith',
          email: 'jane@example.com',
          image: 'https://api.dicebear.com/7.x/avatars/svg?seed=jane'
        },
        createdAt: new Date('2024-03-21'),
      },
    ],
    media: {
      url: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159',
      type: 'image'
    }
  },
];