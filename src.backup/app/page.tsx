import BuilderPageClient from "@/components/BuilderPageClient";
import { BUILDER_API_KEY, BUILDER_CONTENT_API } from "@/lib/builderConfig";
import type { BuilderContent } from "@builder.io/sdk";

const PAGE_MODEL = "page";
const PAGE_PATH = "/";

export const revalidate = 5;

async function fetchBuilderPageContent(): Promise<BuilderContent | null> {
  const apiKey = BUILDER_API_KEY;
  const url = `${BUILDER_CONTENT_API}/${PAGE_MODEL}?apiKey=${apiKey}&userAttributes.urlPath=${encodeURIComponent(
    PAGE_PATH
  )}`;

  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
    next: { revalidate },
  });

  if (!response.ok) {
    console.error(
      "[Builder] Failed to fetch content",
      response.status,
      response.statusText
    );
    return null;
  }

  const payload = await response.json();
  return payload?.results?.[0] ?? null;
}

export default async function HomePage() {
  const content = await fetchBuilderPageContent();
  return <BuilderPageClient content={content} />;
}
