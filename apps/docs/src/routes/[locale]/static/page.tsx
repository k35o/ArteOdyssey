import {
  AtomIcon,
  LocationIcon,
  LockIcon,
  PackageIcon,
  RefreshIcon,
  ShieldCheckIcon,
} from '@k8ordo/ui';

import { PackageExample } from '../../../components/package-example';
import { PackageLanding } from '../../../components/package-landing';
import type { PackageFeature } from '../../../components/package-landing';

const FEATURES: PackageFeature[] = [
  {
    title: 'static.featureRoutes',
    description: 'static.featureRoutesDescription',
    icon: <LocationIcon />,
  },
  {
    title: 'static.featureGenerated',
    description: 'static.featureGeneratedDescription',
    icon: <AtomIcon />,
  },
  {
    title: 'static.featureBoundary',
    description: 'static.featureBoundaryDescription',
    icon: <LockIcon />,
  },
  {
    title: 'static.featureFiles',
    description: 'static.featureFilesDescription',
    icon: <PackageIcon />,
  },
  {
    title: 'static.featureRouteFiles',
    description: 'static.featureRouteFilesDescription',
    icon: <RefreshIcon />,
  },
  {
    title: 'static.featureParams',
    description: 'static.featureParamsDescription',
    icon: <ShieldCheckIcon />,
  },
];

const EXAMPLE = `// src/routes/page.tsx                → /
// src/routes/products/page.tsx       → /products
// src/routes/products/[id]/page.tsx  → /products/:id（paramsSchema が id を検証）
// src/routes/error.tsx               → 配下が throw したら layout の内側に
// src/routes/old/redirect.ts         → /old は別の場所へ

// vite.config.ts — 値を持たない区間だけ、ビルドに渡す
export default defineConfig({
  plugins: [
    framework({
      paths: async () => {
        const products = await readCatalog();
        return products.map((product) => \`/products/\${product.id}\`);
      },
    }),
  ],
});`;

export default function StaticPage() {
  return (
    <PackageLanding
      description="static.description"
      directory="static"
      docsDescription="static.docsDescription"
      docsTitle="static.docsTitle"
      features={FEATURES}
      featuresTitle="static.featuresTitle"
      name="@k8ordo/static"
    >
      <PackageExample
        code={EXAMPLE}
        description="static.exampleDescription"
        lang="ts"
        title="static.exampleTitle"
      />
    </PackageLanding>
  );
}
