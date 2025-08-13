import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import '@k8o/arte-odyssey/styles.css';
import { ComponentProvider } from '@k8o/arte-odyssey';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ComponentProvider>
      <App />
    </ComponentProvider>
  </StrictMode>,
);
