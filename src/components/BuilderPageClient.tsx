'use client';

import { BuilderComponent } from '@builder.io/react';
import type { BuilderContent } from '@builder.io/sdk';
import '@/lib/registerComponents';

interface BuilderPageClientProps {
  content: BuilderContent | null;
}

export default function BuilderPageClient({ content }: BuilderPageClientProps) {
  const resolvedContent = content ?? undefined;
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <BuilderComponent model="page" content={resolvedContent} />
    </main>
  );
}
