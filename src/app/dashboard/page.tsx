import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { LogoutButton } from '@/components/auth/logout-button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default async function DashboardPage() {
  const session = await auth();

  if (!session?.user) {
    redirect('/login');
  }

  return (
    <main className="flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white/10 backdrop-blur-sm border-white/20 text-white">
        <CardHeader>
          <CardTitle className="text-2xl text-center font-bold">
            Welcome to AuthZen
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2 text-center">
            <p className="text-lg">
              Hello,{' '}
              <span className="font-semibold text-yellow-300">
                {session.user.name || 'User'}
              </span>
            </p>
            <p className="text-muted-foreground text-gray-300">
              {session.user.email}
            </p>
          </div>
          <LogoutButton />
        </CardContent>
      </Card>
    </main>
  );
}
