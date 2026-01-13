'use client';

import React, { createContext, useCallback, useContext, useMemo, useSyncExternalStore } from 'react';

type FavoritesContextValue = {
  favorites: Set<string>;
  hydrated: boolean;
  isLoading: boolean;
  toggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
  clearAll: () => void;
};

const STORAGE_KEY = 'crypto-logos-favorites';
const CHANGE_EVENT = 'crypto-logos-favorites:change';

const FavoritesContext = createContext<FavoritesContextValue | null>(null);

function getClientSnapshot() {
  if (typeof window === 'undefined') return null as string | null;
  return window.localStorage.getItem(STORAGE_KEY);
}

function getServerSnapshot() {
  return null as string | null;
}

function subscribe(onStoreChange: () => void) {
  if (typeof window === 'undefined') {
    return () => {
    };
  }

  const onStorage = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY) onStoreChange();
  };

  const onCustom = () => onStoreChange();

  window.addEventListener('storage', onStorage);
  window.addEventListener(CHANGE_EVENT, onCustom);

  return () => {
    window.removeEventListener('storage', onStorage);
    window.removeEventListener(CHANGE_EVENT, onCustom);
  };
}

function parseFavorites(raw: string | null) {
  if (!raw) return [] as string[];
  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    const out: string[] = [];
    const seen = new Set<string>();
    for (const value of parsed) {
      if (typeof value === 'string' && !seen.has(value)) {
        seen.add(value);
        out.push(value);
      }
    }
    return out;
  } catch {
    return [];
  }
}

function writeFavorites(ids: string[]) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

function useHydrated() {
  return useSyncExternalStore(
    () => () => {
    },
    () => true,
    () => false,
  );
}

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const raw = useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);
  const hydrated = useHydrated();
  const isLoading = !hydrated;

  const ids = useMemo(() => parseFavorites(raw), [raw]);
  const favorites = useMemo(() => new Set(ids), [ids]);

  const toggleFavorite = useCallback((id: string) => {
    const current = new Set(parseFavorites(getClientSnapshot()));
    if (current.has(id)) {
      current.delete(id);
    } else {
      current.add(id);
    }
    writeFavorites([...current]);
  }, []);

  const clearAll = useCallback(() => {
    writeFavorites([]);
  }, []);

  const isFavorite = useCallback((id: string) => favorites.has(id), [favorites]);

  const value = useMemo(
    () => ({ favorites, hydrated, isLoading, toggleFavorite, isFavorite, clearAll }),
    [favorites, hydrated, isLoading, toggleFavorite, isFavorite, clearAll],
  );

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
}

export function useFavorites() {
  const ctx = useContext(FavoritesContext);
  if (!ctx) throw new Error('useFavorites must be used within FavoritesProvider');
  return ctx;
}