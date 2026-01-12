import Link from 'next/link';
import { getCategories } from '@/lib/categories';

// components
import { Badge } from '@/components/ui/badge';

export default async function CategoryList() {
  // common
  const categories = await getCategories();

  return categories?.map(({ category, count }) => (
    <Link
      key={category}
      href={`/category/${category.toLowerCase()}`}
      className="flex items-center justify-between rounded-lg px-3 py-1.5 text-muted-foreground hover:text-foreground"
    >
      <span className="text-base capitalize">{category}</span>
      <Badge
        variant="outline"
        className="text-muted-foreground hover:bg-muted rounded-xl"
      >
        {count}
      </Badge>
    </Link>
  ));
}
