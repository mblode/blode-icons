/**
 * Copy text that may still be loading.
 *
 * Safari only allows a clipboard write while the tap that asked for it is
 * still the active gesture, and an `await` on a fetch outlives it — so
 * `writeText(await response.text())` is rejected on iOS as a programmatic
 * write, which is why copying an icon's SVG from the grid did nothing on a
 * phone. A `ClipboardItem` holding the pending promise is registered during
 * the tap itself and settles afterwards, which is the path that works.
 *
 * Firefox ships `ClipboardItem` but rejects a promise as a value, so it falls
 * through to `writeText`; it has no gesture-expiry rule to trip over.
 */
export const copyText = async (text: string | Promise<string>) => {
  if (typeof text === "string") {
    await navigator.clipboard.writeText(text);
    return;
  }

  if (typeof ClipboardItem !== "undefined" && navigator.clipboard.write) {
    const blob = text.then(
      (resolved) => new Blob([resolved], { type: "text/plain" })
    );
    // Nothing consumes `blob` when the branch below throws, so a failed fetch
    // would land as an unhandled rejection. The caller still sees the failure:
    // the `writeText` fallback re-awaits the same source.
    blob.catch(() => null);

    try {
      await navigator.clipboard.write([
        new ClipboardItem({ "text/plain": blob }),
      ]);
      return;
    } catch {
      // Either the browser will not take a promise as a value, or the write
      // failed outright.
    }
  }

  await navigator.clipboard.writeText(await text);
};
