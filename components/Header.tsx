import { AuthButton } from './auth/AuthButton';

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <h1 className="text-2xl font-bold">My Blog</h1>
        <AuthButton />
      </div>
    </header>
  );
}