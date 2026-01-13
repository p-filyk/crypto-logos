import { QueryClient, HydrationBoundary, dehydrate } from '@tanstack/react-query';
import type { Metadata } from 'next';

// queries
import { getLogosQueryParams } from '@/queries/app-queries';

// components
import LogosSection from '@/components/home/LogosSection';

// custom models
interface Props {
  searchParams: Promise<{ q?: string; category?: string }>;
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const { q: searchQuery } = await searchParams;

  const title = searchQuery
    ? `Search "${searchQuery}" - Crypto Logos`
    : 'Crypto Logos - Free SVG Logo Collection';

  const description = searchQuery
    ? `Search results for "${searchQuery}" in our collection of 576+ crypto and tech logos in SVG format`
    : 'Browse and download 576+ crypto and tech logos in SVG format. Free, high-quality SVG logos for your projects.';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default async function Home({
  searchParams,
}: Props) {
  // common
  const queryClient = new QueryClient();

  // computed
  const { q: searchQuery = '', category = null } = await searchParams;

  // prefetch
  await queryClient.prefetchInfiniteQuery(
    getLogosQueryParams(searchQuery, null),
  );

  return (
    <div className="flex-1 flex flex-col p-6">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <LogosSection searchQuery={searchQuery} category={category} />
      </HydrationBoundary>
    </div>
  );
}
