import { execSync } from "child_process";

const EXTENDED_PATH = `/usr/local/bin:/opt/homebrew/bin:/usr/bin:/bin:${process.env.PATH || ""}`;
const PYTHON_CANDIDATES = ["python3.13", "python3.12", "python3.11", "python3.10", "python3"];
const MIN_VERSION = [3, 10];
const HEADROOM_HEALTH_TIMEOUT_MS = 1500;

// Detect whether the headroom CLI is installed and where its binary lives.
export function findHeadroomBinary() {
  try {
    const path = execSync("which headroom", {
      stdio: ["ignore", "pipe", "ignore"],
      windowsHide: true,
      env: { ...process.env, PATH: EXTENDED_PATH },
    }).toString().trim();
    return path || null;
  } catch {
    return null;
  }
}

// Find a Python interpreter >= 3.10 (headroom-ai requires it). Returns null if none.
export function findPython310() {
  for (const candidate of PYTHON_CANDIDATES) {
    try {
      const ver = execSync(`${candidate} --version`, {
        stdio: ["ignore", "pipe", "ignore"],
        windowsHide: true,
        env: { ...process.env, PATH: EXTENDED_PATH },
      }).toString().trim();
      const match = ver.match(/(\d+)\.(\d+)/);
      if (!match) continue;
      const [major, minor] = [parseInt(match[1], 10), parseInt(match[2], 10)];
      if (major > MIN_VERSION[0] || (major === MIN_VERSION[0] && minor >= MIN_VERSION[1])) {
        return candidate;
      }
    } catch {
      // candidate not present, try next
    }
  }
  return null;
}

// Probe whether a Headroom proxy is reachable at the given URL by hitting /health.
export async function probeProxyRunning(url) {
  if (!url) return false;
  const base = String(url).replace(/\/$/, "");
  try {
    const res = await fetch(`${base}/health`, { signal: AbortSignal.timeout(HEADROOM_HEALTH_TIMEOUT_MS) });
    return res.ok;
  } catch {
    return false;
  }
}

// Aggregate status for the dashboard: installed, running, python interpreter.
export async function getHeadroomStatus(url) {
  const path = findHeadroomBinary();
  const python = findPython310();
  const installed = Boolean(path);
  const running = installed ? await probeProxyRunning(url) : false;
  return { installed, path, running, python };
}
