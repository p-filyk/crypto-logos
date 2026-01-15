'use client';

import { useState } from 'react';
import NextImage, { ImageProps as NextImageProps } from 'next/image';
import { cn } from '@/lib/utils';
import { Skeleton } from './skeleton';

// custom models
interface ImageProps extends Omit<NextImageProps, 'onLoad' | 'onError'> {
  src: string;
  alt: string;
  fallbackText?: string;
}

export function Image({
  src,
  alt,
  width,
  height,
  fallbackText,
  className,
  ...props
}: ImageProps) {
  // states
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        className={cn(
          'flex items-center justify-center bg-muted text-muted-foreground font-medium text-sm p-4 rounded-xl',
          className,
        )}
      >
        {fallbackText || alt}
      </div>
    );
  }

  return (
    <div className={cn('relative flex items-center justify-center', className)}>
      {loading && <Skeleton className="absolute inset-0" />}

      <NextImage
        {...props}
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={cn('w-full h-full object-cover', loading && 'opacity-0')}
        onLoad={() => setLoading(false)}
        onError={() => {
          setLoading(false);
          setError(true);
        }}
      />
    </div>
  );
}
