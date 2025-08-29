'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface CardWrapperProps {
  children: ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
}

export const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
}: CardWrapperProps) => {
  return (
    <Card className="w-full max-w-md bg-white/10 p-2 rounded-2xl backdrop-blur-sm border border-white/20 text-white">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-center">
          {headerLabel}
        </CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>
        <Link
          href={backButtonHref}
          className="w-full text-center text-sm hover:underline"
        >
          {backButtonLabel}
        </Link>
      </CardFooter>
    </Card>
  );
};
