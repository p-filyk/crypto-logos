import { Download } from 'lucide-react';

// helpers
import { downloadLogo } from '@/shared/helpers/logo-actions';

// components
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';

// models
import type LogoAsset from '@/shared/models/logos/logo-asset';

// custom models
interface DownloadSectionProps {
  title: string;
  previewUrl: string;
  logoName: string;
  lightAssets: LogoAsset[];
  darkAssets?: LogoAsset[];
  filePrefix: string;
}

export default function DownloadSection({
  title,
  previewUrl,
  logoName,
  lightAssets,
  darkAssets,
  filePrefix,
}: DownloadSectionProps) {
  // computed
  const hasBothVariants = lightAssets.length > 0 && darkAssets && darkAssets.length > 0;
  const lightAsset = lightAssets[0];
  const darkAsset = darkAssets?.[0];

  // helpers
  function handleDownloadVariant(asset: LogoAsset, variantName: string): void {
    downloadLogo(asset.url, `${logoName}-${filePrefix}-${variantName}.${asset.format}`);
  }

  function handleDownloadBoth(): void {
    if (lightAsset) {
      downloadLogo(lightAsset.url, `${logoName}-${filePrefix}-light.${lightAsset.format}`);
    }
    if (darkAsset) {
      setTimeout(() => {
        downloadLogo(darkAsset.url, `${logoName}-${filePrefix}-dark.${darkAsset.format}`);
      }, 100);
    }
  }

  return (
    <div className="flex flex-col items-center gap-4 p-4 border rounded-lg bg-card">
      <Image
        className="h-16 w-auto"
        src={previewUrl}
        alt={title}
        height={240}
        width={240}
        fallbackText={title}
      />

      <div className="flex flex-col gap-2 w-full">
        {hasBothVariants && (
          <Button
            variant="outline"
            size="sm"
            onClick={handleDownloadBoth}
            className="w-full justify-start"
          >
            <Download className="h-4 w-4 mr-2" />
            Light & dark variants
            <span className="ml-auto text-xs text-muted-foreground">.zip</span>
          </Button>
        )}

        {lightAsset && (
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleDownloadVariant(lightAsset, 'light')}
            className="w-full justify-start"
          >
            <Download className="h-4 w-4 mr-2" />
            {hasBothVariants ? 'Only light variant' : 'Light variant'}
            <span className="ml-auto text-xs text-muted-foreground">.{lightAsset.format}</span>
          </Button>
        )}

        {darkAsset && (
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleDownloadVariant(darkAsset, 'dark')}
            className="w-full justify-start"
          >
            <Download className="h-4 w-4 mr-2" />
            {hasBothVariants ? 'Only dark variant' : 'Dark variant'}
            <span className="ml-auto text-xs text-muted-foreground">.{darkAsset.format}</span>
          </Button>
        )}
      </div>
    </div>
  );
}
