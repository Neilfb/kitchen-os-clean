# Kitchen OS — Builder.io Integration Rules (Locked)

**Last updated:** 2025-10-27  
**Maintainer:** Neil Bradley / Kitchen OS Engineering GPT

The following seven rules are immutable. Every Builder-related change **must** comply before being merged.

---

## 1. Fetching Method

- Fetch Builder content **only** via the REST CDN endpoint.  
- Never call `builder.get`, `builder.init`, or import a default `builder` instance from the SDK.  
- Pattern to follow:

```ts
const url = `https://cdn.builder.io/api/v3/content/${model}?apiKey=${apiKey}&userAttributes.urlPath=${encodeURIComponent(path)}`;
const response = await fetch(url, { next: { revalidate } });
```

---

## 2. Server + Client Separation

- Server components perform all data fetching and ISR.  
- Client components (e.g., `BuilderPageClient`) render `<BuilderComponent>` and handle interactivity only.  
- Never add `'use client'` to pages or layouts that call `fetch()`.

---

## 3. Builder Configuration

- `src/lib/builderConfig.ts` exposes constants such as `BUILDER_API_KEY` and `BUILDER_CONTENT_API`.  
- No SDK initialisation, no side effects, no `builder.init()`.

---

## 4. Page Structure

```
src/
 ├─ app/
 │   └─ page.tsx                  # Server — fetches Builder content
 ├─ components/
 │   └─ BuilderPageClient.tsx     # Client — renders BuilderComponent
 └─ lib/
     ├─ registerComponents.ts     # Registers custom blocks (client-only)
     └─ builderConfig.ts          # API key constants
docs/
 └─ INTEGRATION_RULES_BUILDER.md
```

---

## 5. Builder Page Model

- Model name: `page`  
- URL path: `/`  
- Ensure the Builder entry is published and matches the fetch URL used in code.

---

## 6. Data Refresh

- Use Incremental Static Regeneration via `export const revalidate = 5` (or agreed cadence) in server files.  
- Do not place revalidation logic inside client components.  
- Client components must not call `fetch`.

---

## 7. Codex Guardrail

- Every Builder-related change must begin with the message:  
  `🔒 Builder.io Integration Check: Running...`  
  followed by pass/fail status.  
- On failure, abort changes, report violations, and provide compliant patches before retrying.  
- Codex must explicitly state:  
  “Following Kitchen OS Builder.io Integration Rules — REST API only, server fetch, client render.”

---

Non-compliance with these rules blocks release. Keep this document and linked automation in sync with the production workflow.
