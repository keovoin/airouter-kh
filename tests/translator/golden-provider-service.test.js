// A1 GOLDEN: lock OUTPUT của services/provider.js (translate route path) trên code CŨ.
// buildProviderUrl/buildProviderHeaders/getTargetFormat — đường SONG SONG với executor.
// Mục tiêu: trước khi hợp nhất 2 đường, chốt behavior translate-path hiện tại.
import { describe, it, expect } from "vitest";
import { PROVIDERS } from "../../open-sse/config/providers.js";
import {
  buildProviderUrl,
  buildProviderHeaders,
  getTargetFormat,
} from "../../open-sse/services/provider.js";

const API_KEY_CRED = { apiKey: "sk-test-APIKEY", providerSpecificData: {} };
const OAUTH_CRED = { accessToken: "tok-test-ACCESS", providerSpecificData: {} };

// Khử token + field động (github x-request-id uuid, kimi device-id) để snapshot ổn định.
function sanitize(headers) {
  const out = {};
  for (const [k, v] of Object.entries(headers)) {
    out[k] = typeof v === "string"
      ? v.replace(/Bearer .+/, "Bearer <TOK>")
          .replace(/sk-test-APIKEY|tok-test-ACCESS/g, "<CRED>")
          .replace(/kimi-\d{10,}/g, "kimi-<TS>")
          .replace(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i, "<UUID>")
      : v;
  }
  return out;
}

const providerIds = Object.keys(PROVIDERS).sort();

function safe(fn) {
  try { return fn(); } catch (e) { return `THROW: ${e.message}`; }
}

describe("GOLDEN provider.js buildProviderUrl (translate path)", () => {
  for (const pid of providerIds) {
    it(`${pid} → url`, () => {
      const snap = {
        stream: safe(() => buildProviderUrl(pid, "test-model", true, {})),
        nonStream: safe(() => buildProviderUrl(pid, "test-model", false, {})),
      };
      expect(snap).toMatchSnapshot();
    });
  }
});

describe("GOLDEN provider.js buildProviderHeaders (translate path)", () => {
  for (const pid of providerIds) {
    it(`${pid} → headers`, () => {
      const cred = PROVIDERS[pid].noAuth ? {} : API_KEY_CRED;
      const credOauth = PROVIDERS[pid].noAuth ? {} : OAUTH_CRED;
      const snap = {
        apiKey: safe(() => sanitize(buildProviderHeaders(pid, cred, true))),
        oauth: safe(() => sanitize(buildProviderHeaders(pid, credOauth, true))),
        nonStream: safe(() => sanitize(buildProviderHeaders(pid, cred, false))),
      };
      expect(snap).toMatchSnapshot();
    });
  }
});

describe("GOLDEN provider.js getTargetFormat", () => {
  it("all providers → format", () => {
    const snap = {};
    for (const pid of providerIds) snap[pid] = safe(() => getTargetFormat(pid));
    expect(snap).toMatchSnapshot();
  });
});
