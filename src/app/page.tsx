import { QueryClient, HydrationBoundary, dehydrate } from '@tanstack/react-query';

// queries
import { getLogosQueryParams } from '@/queries/app-queries';

// components
import LogosSection from '@/components/home/LogosSection';

// custom models
interface Props {
  searchParams: Promise<{ q?: string; category?: string }>;
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
    getLogosQueryParams(searchQuery, category),
  );

  return (
    <div className="flex-1 flex flex-col p-6">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <LogosSection searchQuery={searchQuery} category={category} />
      </HydrationBoundary>
    </div>
  );
}
