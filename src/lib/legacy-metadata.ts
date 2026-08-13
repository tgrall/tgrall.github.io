import baseline from '../../tests/fixtures/production-baseline/baseline.json';

interface LegacyMetadata {
  canonical: string;
  title: string;
  description: string;
  openGraph: Record<string, string>;
}

interface LegacyPage {
  metadata: LegacyMetadata;
}

const pages = baseline.pages as Record<string, LegacyPage>;

export function getLegacyMetadata(path: string) {
  return pages[path]?.metadata;
}
