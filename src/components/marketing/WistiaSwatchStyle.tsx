import { wistiaSwatchCss } from "@/lib/scripts";

export function WistiaSwatchStyle({ mediaId }: { mediaId: string }) {
  return <style>{wistiaSwatchCss(mediaId)}</style>;
}
