'use client';

import type { RouterProps } from '@funstack/router';
import { Router as FunStackRouter } from '@funstack/router';
import { ArteOdysseyProvider } from '@k8o/arte-odyssey';
import type { FC } from 'react';

export const Router: FC<RouterProps> = (props) => {
  return (
    <ArteOdysseyProvider>
      <FunStackRouter {...props} />
    </ArteOdysseyProvider>
  );
};
