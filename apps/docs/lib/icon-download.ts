/**
 * Save an SVG to disk from the browser.
 *
 * A blob URL rather than a link straight at `/api/icons/{name}/svg`: that route
 * serves `image/svg+xml`, which the browser renders instead of saving, and a
 * `download` attribute on a cross-route href is only a hint. Building the file
 * here also means the download uses markup already in memory, so it costs no
 * request on the detail page.
 */
export const downloadSvg = (fileStem: string, source: string) => {
  const url = URL.createObjectURL(
    new Blob([source], { type: "image/svg+xml" })
  );
  const anchor = document.createElement("a");
  anchor.download = `${fileStem}.svg`;
  anchor.href = url;
  anchor.rel = "noopener";
  document.body.append(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
};
