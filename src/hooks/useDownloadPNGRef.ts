import { useCallback } from "react";
import html2canvas from "html2canvas";

export function useDownloadPNGRef(fileName = "download.png") {
  const downloadPNG = useCallback(
    async (el: HTMLElement | null) => {
      if (!el) return;

      const canvas = await html2canvas(el, { width: 1600, height: 900 });

      const link = document.createElement("a");
      link.download = fileName;
      link.href = canvas.toDataURL("image/png");
      link.click();
    },
    [fileName]
  );

  return downloadPNG;
}
