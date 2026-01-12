import Link from 'next/link';
import { Home, Heart, Cloud, Code, Package } from 'lucide-react';

// components
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import CategoryList from '@/components/CategoryList';

// custom constants
const mainNavigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Favorites', href: '/favorites', icon: Heart },
  { name: 'API', href: '/api', icon: Cloud },
  { name: 'shadcn/ui', href: '/ui-kit', icon: Code },
  { name: 'Extensions', href: '/extensions', icon: Package },
];

export async function Sidebar() {
  return (
    <aside className="fixed left-0 top-14 z-40 flex flex-col h-[calc(100vh-3.5rem)] w-64 overflow-y-auto border-r border-border/40 bg-background overscroll-none">
      <div className="flex-1 flex flex-col gap-4 py-4">
        {/* Main Navigation */}
        <nav className="flex flex-col gap-1 px-4">
          {mainNavigation.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center gap-3 rounded-lg px-3 py-1.5 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <Icon className="h-5 w-5" />
                <span className="text-base">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        <Separator />

        {/* Categories */}
        <ScrollArea className="grow h-0 pl-4">
          <nav className="flex flex-col gap-1 pr-4">
            <CategoryList />
          </nav>
        </ScrollArea>
      </div>
    </aside>
  );
}
