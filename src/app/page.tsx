import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 text-center">
      <div className="space-y-6">
        <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
          Welcome to <span className="text-yellow-300">AuthZen</span>
        </h1>
        <p className="max-w-2xl text-lg text-gray-300">
          A seamless and secure authentication experience.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-700">
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400/10 hover:text-yellow-300">
            <Link href="/register">Register</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
