import { QueryClient, HydrationBoundary, dehydrate } from '@tanstack/react-query';

// queries
import getLogosQueryParams from '@/queries/logos.query';

// components
import LogosSection from '@/components/home/LogosSection';

// custom models
interface Props {
  searchParams: { q?: string; category?: string };
}

export default async function Home({
  searchParams,
}: Props) {
  // common
  const queryClient = new QueryClient();

  // computed
  const searchQuery = searchParams.q || '';
  const category = searchParams.category || null;

  // prefetch
  await queryClient.prefetchInfiniteQuery({
    ...getLogosQueryParams(searchQuery, category),
    pages: 1,
  });

  return (
    <div className="flex-1 flex flex-col p-6">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <LogosSection searchQuery={searchQuery} category={category} />
      </HydrationBoundary>
    </div>
  );
}
