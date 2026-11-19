
import React from 'react';
import { createRoot } from 'react-dom/client';
import CyberUniverse from './components/cyber/CyberUniverse';

createRoot(document.getElementById('cyber-root')).render(
  <React.StrictMode>
    <CyberUniverse />
  </React.StrictMode>
);
