import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import Pricing from './Pricing';
import './index.css';

// Start fresh page visits at the top.
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {location.pathname.endsWith('/pricing.html') ? <Pricing /> : <App />}
  </StrictMode>,
);
