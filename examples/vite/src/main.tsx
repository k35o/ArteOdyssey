import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import '@k8o/arte-odyssey/styles.css';
import { ArteOdysseyProvider } from '@k8o/arte-odyssey';

// biome-ignore lint/style/noNonNullAssertion: ある前提なので非nullアサーションを使用
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ArteOdysseyProvider>
      <App />
    </ArteOdysseyProvider>
  </StrictMode>,
);
