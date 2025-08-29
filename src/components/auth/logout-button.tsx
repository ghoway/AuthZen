'use client';

import { useTransition } from 'react';
import { Button } from '@/components/ui/button';
import { logout } from '@/actions/auth';

export const LogoutButton = () => {
  const [isPending, startTransition] = useTransition();

  const onClick = () => {
    startTransition(() => {
      logout();
    });
  };
  return (
    <Button
      onClick={onClick}
      disabled={isPending}
      className="w-full bg-indigo-600 hover:bg-indigo-700"
    >
      Logout
    </Button>
  );
};
