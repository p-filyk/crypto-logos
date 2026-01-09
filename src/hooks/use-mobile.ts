import { useState, useEffect } from 'react';

// custom constants
const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);

  // effects
  useEffect(() => {
    function onChange(): void {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    }

    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    mql.addEventListener('change', onChange);
    onChange();
    return () => mql.removeEventListener('change', onChange);
  }, []);

  return !!isMobile;
}
