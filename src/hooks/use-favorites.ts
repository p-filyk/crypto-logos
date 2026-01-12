import { useState, useEffect } from 'react';

// custom constants
const STORAGE_KEY = 'crypto-logos-favorites';

export function useFavorites() {
  // states
  const [favorites, setFavorites] = useState<Set<string>>(loadFavorites());

  // effects
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(favorites)));
    } catch (error) {
      console.error('Failed to save favorites:', error);
    }
  }, [favorites]);

  // helpers
  function loadFavorites(): Set<string> {
    if (typeof window === 'undefined') {
      return new Set();
    }

    try {
      const stored = localStorage.getItem(STORAGE_KEY);

      if (stored) {
        return new Set(JSON.parse(stored) as string[]);
      }

      return new Set();
    } catch (error) {
      console.error('Failed to load favorites:', error);
      return new Set();
    }
  }

  function toggleFavorite(id: string): void {
    setFavorites((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }

  function isFavorite(id: string): boolean {
    return favorites.has(id);
  }

  return {
    favorites,
    toggleFavorite,
    isFavorite,
  };
}
