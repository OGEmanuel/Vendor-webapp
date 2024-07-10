import { Center, Loader } from '@mantine/core';
import React, { Suspense } from 'react';
import { DefaultErrorBoundary } from './DefaultErrorBoundary';

export function TUIDefaultSuspense({ children }: { children: React.ReactNode }) {
  return (
    <Suspense
      fallback={
        <Center>
          <Loader size="lg" />
        </Center>
      }
    >
      <DefaultErrorBoundary>{children}</DefaultErrorBoundary>
    </Suspense>
  );
}
