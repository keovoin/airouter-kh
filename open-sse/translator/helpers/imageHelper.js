// Build a base64 data URI from mime + base64 payload
export function encodeDataUri(mimeType, base64) {
  return `data:${mimeType};base64,${base64}`;
}

// Parse a base64 data URI → { mimeType, base64 }, or null if not a data URI.
// [\s\S] tolerates newlines inside the base64 payload.
const DATA_URI_RE = /^data:([^;]+);base64,([\s\S]+)$/;
export function parseDataUri(url) {
  if (typeof url !== "string") return null;
  const m = url.match(DATA_URI_RE);
  return m ? { mimeType: m[1], base64: m[2] } : null;
}

/**
 * Fetch a remote image URL and return it as a base64 data URI.
 * Used when upstream providers (Codex, etc.) require inline base64 images
 * instead of remote URLs they cannot fetch.
 * Returns null if fetch fails.
 *
 * @param {string} imageUrl - HTTP(S) URL of the image
 * @param {object} options - { signal, timeoutMs }
 * @returns {Promise<{url: string, mimeType: string}|null>}
 */
export async function fetchImageAsBase64(imageUrl, options = {}) {
  const { signal, timeoutMs = 10000 } = options;
  if (!imageUrl || (!imageUrl.startsWith("http://") && !imageUrl.startsWith("https://"))) {
    return null;
  }

  const controller = new AbortController();
  const timeout = signal ? null : setTimeout(() => controller.abort(), timeoutMs);
  const fetchSignal = signal || controller.signal;

  try {
    const response = await fetch(imageUrl, { signal: fetchSignal });
    if (!response.ok) return null;

    const mimeType = response.headers.get("Content-Type") || "image/jpeg";
    const arrayBuffer = await response.arrayBuffer();
    const base64 = Buffer.from(arrayBuffer).toString("base64");
    return { url: `data:${mimeType};base64,${base64}`, mimeType };
  } catch {
    return null;
  } finally {
    if (timeout) clearTimeout(timeout);
  }
}
