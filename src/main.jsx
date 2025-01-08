import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, HashRouter } from 'react-router-dom';
import App from './App.jsx'
import './components/css/style.css';

// const basename = process.env.NODE_ENV === 'production' ? '/bandMapProject2/' : '/';

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
)
