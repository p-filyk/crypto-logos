// models
import ListResponse from '@/shared/models/common/list-response';
import LogoItem from '@/shared/models/logos/logo-item';

// custom models
interface GetLogosParams {
  limit?: number;
  skip?: number;
  category?: string;
  search?: string;
}

const AppApi = {
  async getLogos(params: GetLogosParams): Promise<ListResponse<LogoItem>> {
    const searchParams = new URLSearchParams(params as Record<string, string>);
    const response = await fetch(`/api/logos?${searchParams}`);

    if (!response.ok) {
      throw new Error('Failed to fetch logos');
    }

    return response.json();
  },
};

export default AppApi;
