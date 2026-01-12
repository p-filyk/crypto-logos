// api
import AppApi from '@/api/app.api';

// models
import ListResponse from '@/shared/models/common/list-response';
import LogoItem from '@/shared/models/logos/logo-item';

function getLogosQueryParams(searchQuery: string | null, category: string | null) {
  return {
    queryKey: ['logos', searchQuery, category],
    queryFn: ({ pageParam = 0 }) =>
      AppApi.getLogos({
        limit: 30,
        skip: pageParam,
        search: searchQuery || undefined,
        category: category || undefined,
      }),
    initialPageParam: 0,
    getNextPageParam: (lastPage: ListResponse<LogoItem>, allPages: ListResponse<LogoItem>[]) => {
      const loadedCount = allPages.reduce((sum, page) => sum + page.data.length, 0);
      return loadedCount < lastPage.total ? loadedCount : undefined;
    },
  }
}

export default getLogosQueryParams;
