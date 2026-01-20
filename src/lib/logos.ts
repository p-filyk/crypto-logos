// data
import { LOGOS_RESPONSE, LOGOS_BY_CATEGORY, LOGOS_SEARCH_INDEX, CATEGORY_SEARCH_INDEXES } from '@/shared/constants/logos-data';

// helpers
import clamp from '@/shared/helpers/clamp';

// models
import LogoItemsResponse from '@/shared/models/logos/logo-items-response';
import ListResponse from '@/shared/models/common/list-response';
import LogosSortBy from '@/shared/models/logos/logos-sort-by';

// custom models
export interface GetLogosParams {
  limit?: number;
  skip?: number;
  category?: string;
  search?: string;
  sortBy?: LogosSortBy;
}

export function getLogos(params: GetLogosParams = {}): ListResponse<LogoItemsResponse> {
  const { category, search, limit, skip = 0, sortBy = LogosSortBy.NameAsc } = params;

  let results: LogoItemsResponse[];

  if (search) {
    if (category) {
      // Search within category using per-category index
      const categoryData = CATEGORY_SEARCH_INDEXES[category];
      if (!categoryData) {
        results = [];
      } else {
        const indices = categoryData.index.search(search) as number[];
        results = indices.map(i => categoryData.logos[i]);
      }
    } else {
      // Search all logos using global index
      const indices = LOGOS_SEARCH_INDEX.search(search) as number[];
      results = indices.map(i => LOGOS_RESPONSE[i]);
    }
  } else {
    // No search - return filtered by category or all
    results = category ? (LOGOS_BY_CATEGORY[category] ?? []) : LOGOS_RESPONSE;
  }

  // Sort
  const sorted = results.toSorted((a, b) =>
    sortBy === LogosSortBy.NameAsc
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name)
  );

  // Pagination
  const total = sorted.length;
  if (limit === undefined) {
    return { data: sorted, total };
  }

  const start = clamp(skip, 0, total);
  const end = clamp(start + limit, 0, total);
  return { data: sorted.slice(start, end), total };
}
