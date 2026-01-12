import { Heart } from 'lucide-react';

// hooks
import { useFavorites } from '@/hooks/use-favorites';

// components
import { Button } from '@/components/ui/button';

// custom models
interface Props {
  id: string;
}

function FavoriteToggle({ id }: Props) {
  // common
  const { toggleFavorite, isFavorite: isFavoriteId } = useFavorites();

  // computed
  const isFavorite = isFavoriteId(id);

  // helpers
  function handleToggleFavorite(): void {
    toggleFavorite(id)
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleToggleFavorite}
      className="h-8 w-8"
      aria-label={isFavorite ? `Remove from favorites` : `Add to favorites`}
    >
      <Heart
        className={`h-5 w-5 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`}
      />
    </Button>
  );
}

export default FavoriteToggle;
