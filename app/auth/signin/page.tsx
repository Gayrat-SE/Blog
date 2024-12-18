'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { signIn } from 'next-auth/react';

export default function SignIn() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle>Welcome Back</CardTitle>
          <CardDescription>Sign in to continue to the blog</CardDescription>
        </CardHeader>
        <CardContent>
          <Button
            className="w-full"
            onClick={() => signIn('google', { callbackUrl: '/' })}
          >
            Continue with Google
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}