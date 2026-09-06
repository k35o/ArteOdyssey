import { formFields } from '@k8ordo/form/server';
import {
  AccessibilityIcon,
  AtomIcon,
  FormIcon,
  Heading,
  LockIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from '@k8ordo/ui';

import { PackageLanding } from '../../../components/package-landing';
import type { PackageFeature } from '../../../components/package-landing';
import { T } from '../../../components/t';
import { demoState } from './_parts/demo-state';
import { FormDemo } from './_parts/form-demo';

const FEATURES: PackageFeature[] = [
  {
    title: 'form.featureSchema',
    description: 'form.featureSchemaDescription',
    icon: <FormIcon />,
  },
  {
    title: 'form.featureNoJs',
    description: 'form.featureNoJsDescription',
    icon: <SparklesIcon />,
  },
  {
    title: 'form.featureDom',
    description: 'form.featureDomDescription',
    icon: <AtomIcon />,
  },
  {
    title: 'form.featureTypes',
    description: 'form.featureTypesDescription',
    icon: <ShieldCheckIcon />,
  },
  {
    title: 'form.featureLoud',
    description: 'form.featureLoudDescription',
    icon: <AccessibilityIcon />,
  },
  {
    title: 'form.featureSecrets',
    description: 'form.featureSecretsDescription',
    icon: <LockIcon />,
  },
];

// Server Component（このファイルにディレクティブは無い）。スキーマから制約属性を
// 導くのはここで、結果は JSON なので props としてクライアントに渡り、zod は
// ブラウザに届かない。URL 状態のスキーマ（@k8ordo/state）と同じ 1 つを渡す。
const demoFields = formFields(demoState.url);

export default function FormPage() {
  return (
    <PackageLanding
      description="form.description"
      directory="form"
      docsDescription="form.docsDescription"
      docsTitle="form.docsTitle"
      features={FEATURES}
      featuresTitle="form.featuresTitle"
      name="@k8ordo/form"
    >
      <section className="mx-auto w-full max-w-6xl px-6 pb-24 md:px-8">
        <Heading level="h2">
          <T k="form.demoTitle" />
        </Heading>
        <p className="text-fg-mute mt-4 max-w-2xl text-sm leading-relaxed">
          <T k="form.demoDescription" />
        </p>
        <div className="mt-6 max-w-2xl">
          <FormDemo fields={demoFields} />
        </div>
      </section>
    </PackageLanding>
  );
}
