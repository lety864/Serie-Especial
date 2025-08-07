import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';
import AppView from './common/Components/AppView/AppView.tsx';

import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="box">
      <div className="box1">
        <AppView />
      </div>
      <div className='box2'>
        <App />
      </div>
    </div>
  </StrictMode>,
)
