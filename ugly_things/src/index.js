import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {UglyContextProvider} from "./uglyThingsProvider"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <UglyContextProvider>
      <App />
    </UglyContextProvider>
);

reportWebVitals();
