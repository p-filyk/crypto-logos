export async function copyLogoToClipboard(logoUrl: string): Promise<void> {
  try {
    const response = await fetch(logoUrl);
    const logoContent = await response.text();
    await navigator.clipboard.writeText(logoContent);
  } catch (error) {
    console.error('Failed to copy logo:', error);
    throw error;
  }
}

export function downloadLogo(logoUrl: string, fileName: string): void {
  const link = document.createElement('a');
  link.href = logoUrl;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
