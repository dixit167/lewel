// import React from 'react';
// import ReactDOM from 'react-dom/client';
// // import './index.css';
// import "./styles/App.css"
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/App.css';
import App from './App';
import { CartProvider } from './context/CartContext'; // ⬅️ Import context

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider> {/* ⬅️ Wrap App with CartProvider */}
      <App />
    </CartProvider>
  </React.StrictMode>
);
