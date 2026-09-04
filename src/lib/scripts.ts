import { useEffect } from "react";

export function useExternalScripts(sources: readonly string[]) {
  useEffect(() => {
    sources.forEach((src) => {
      if (document.querySelector(`script[src="${src}"]`)) return;
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      if (src.includes("/embed/") && src.endsWith(".js")) script.type = "module";
      document.body.appendChild(script);
    });
  }, [sources]);
}

export function wistiaSwatchCss(mediaId: string) {
  return (
    "wistia-player[media-id='" +
    mediaId +
    "']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/" +
    mediaId +
    "/swatch'); display: block; filter: blur(5px); aspect-ratio: 16/9; width: 100%; }"
  );
}
