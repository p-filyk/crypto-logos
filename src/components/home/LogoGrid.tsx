// components
import { Skeleton } from '@/components/ui/skeleton';
import LogoCard from './LogoCard';

// models
import type LogoItem from '@/shared/models/logos/logo-item';
import ListSentinel from '@/components/ListSentinel';

// custom models
interface Props {
  logos: LogoItem[];
  hasMore: boolean;
  onLoadMore: () => void;
  isLoading: boolean;
}

export default function LogoGrid({ logos, hasMore, onLoadMore, isLoading }: Props) {
  if (logos.length === 0 && !isLoading) {
    return (
      <div className="text-center py-12">
        <p className="text-lg text-muted-foreground">No logos found</p>
        <p className="text-sm text-muted-foreground mt-2">
          Try adjusting your search query
        </p>
      </div>
    );
  }

  return (
    <div className="py-4">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-3">
        {logos.map((logo) => (
          <LogoCard
            key={logo.id}
            logo={logo}
          />
        ))}

        {/* Loading skeletons */}
        {isLoading &&
          Array.from({ length: 6 }).map((_, i) => (
            <div key={`skeleton-${i}`} className="space-y-4">
              <Skeleton className="h-48 w-full" />
            </div>
          ))}
      </div>

      {/* Sentinel element for infinite scroll */}
      <ListSentinel hasMore={hasMore} onLoadMore={onLoadMore} isLoading={isLoading} />

      {!hasMore && logos.length > 0 && (
        <p className="text-center text-sm text-muted-foreground mt-4">
          All logos loaded
        </p>
      )}
    </div>
  );
}
