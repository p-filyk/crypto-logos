import { Copy, Download, Link as LinkIcon, Palette } from 'lucide-react';
import { toast } from 'sonner';

// helpers
import { copyLogoToClipboard, downloadLogo } from '@/shared/helpers/logo-actions';

// components
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import FavoriteToggle from '@/components/FavoriteToggle';

// models
import type LogoItem from '@/shared/models/logos/logo-item';

// custom models
interface Props {
  logo: LogoItem;
}

export default function LogoCard({ logo }: Props) {
  // helpers
  function handleDownload(): void {
    downloadLogo(logo.mainLogo.url, `${logo.id}.${logo.mainLogo.format}`);
  }

  function handleOpenWebsite(): void {
    if (logo.websiteLink) {
      window.open(logo.websiteLink, '_blank', 'noopener,noreferrer');
    }
  }

  // async helpers
  async function handleCopy(): Promise<void> {
    try {
      await copyLogoToClipboard(logo.mainLogo.url);
      toast.success('Logo copied to clipboard!');
    } catch {
      toast.error('Failed to copy logo');
    }
  }

  return (
    <Card className="py-3 px-3.5 gap-0">
      {/* Top right icons - Palette + Heart */}
      <div className="flex items-center justify-end gap-1">
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          aria-label={`View ${logo.name} color palette`}
        >
          <Palette className="h-5 w-5" />
        </Button>
        <FavoriteToggle id={logo.id} />
      </div>

      <img className="mt-1.5 mb-4 mx-auto" src={logo.mainLogo.url} alt={logo.name} height={40} />

      <h3 className="font-medium text-lg text-center mb-1">{logo.name}</h3>

      <Badge className="text-xs rounded-full px-3 mx-auto mb-3" variant="outline">
        {logo.mainCategory}
      </Badge>

      <div className="flex items-center justify-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={handleCopy}
          className="h-10 w-10"
          aria-label={`Copy ${logo.name} logo to clipboard`}
        >
          <Copy className="h-5 w-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={handleDownload}
          className="h-10 w-10"
          aria-label={`Download ${logo.name} logo`}
        >
          <Download className="h-5 w-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={handleOpenWebsite}
          className="h-10 w-10"
          disabled={!logo.websiteLink}
          aria-label={`Visit ${logo.name} website`}
        >
          <LinkIcon className="h-5 w-5" />
        </Button>
      </div>
    </Card>
  );
}
