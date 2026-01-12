'use client';

import { ImgHTMLAttributes, useState } from 'react';
import { cn } from '@/lib/utils';
import { Skeleton } from './skeleton';

// custom models
interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackText?: string;
  skeletonClassName?: string;
}

export function Image({
  src,
  alt,
  fallbackText,
  className,
  skeletonClassName,
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
    <>
      {loading && <Skeleton className={cn(className, skeletonClassName)} />}
      <img
        {...props}
        src={src}
        alt={alt}
        className={cn(className, loading && 'hidden')}
        onLoad={() => setLoading(false)}
        onError={() => {
          setLoading(false);
          setError(true);
        }}
      />
    </>
  );
}
