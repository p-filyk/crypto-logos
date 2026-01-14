'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface NavLinkProps {
  name: string;
  href: string;
  icon: ReactNode;
  children?: ReactNode;
}

export default function NavLink({ name, href, icon, children }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-1.5 transition-colors hover:bg-accent hover:text-accent-foreground",
        isActive ? "bg-accent text-accent-foreground" : "text-muted-foreground"
      )}
    >
      {icon}
      <span className="text-base">{name}</span>
      {children}
    </Link>
  );
}
