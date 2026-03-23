import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import '@k8o/arte-odyssey/styles.css';
import { ArteOdysseyProvider } from '@k8o/arte-odyssey';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ArteOdysseyProvider>
      <App />
    </ArteOdysseyProvider>
  </StrictMode>,
);
