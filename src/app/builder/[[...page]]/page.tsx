import BuilderPageClient from "@/components/BuilderPageClient";
import { BUILDER_API_KEY, BUILDER_CONTENT_API } from "@/lib/builderConfig";
import type { BuilderContent } from "@builder.io/sdk";

interface BuilderPageProps {
  params: Promise<{ page?: string[] }>;
}

export const revalidate = 5;

async function fetchBuilderContent(pathSegments: string[] = []): Promise<BuilderContent | null> {
  const urlPath = `/${pathSegments.join("/")}` || "/";
  const apiKey = BUILDER_API_KEY;
  const url = `${BUILDER_CONTENT_API}/page?apiKey=${apiKey}&userAttributes.urlPath=${encodeURIComponent(
    urlPath
  )}`;

  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
    next: { revalidate },
  });

  if (!response.ok) {
    console.error("[Builder] Failed to fetch preview content", response.status, response.statusText);
    return null;
  }

  const payload = await response.json();
  return payload?.results?.[0] ?? null;
}

export default async function CatchAllPage({ params }: BuilderPageProps) {
  const resolvedParams = await params;
  const content = await fetchBuilderContent(resolvedParams.page);
  return <BuilderPageClient content={content} />;
}
