// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './components/GlobalStyle';
import App from './components/App';

const theme = {
  colors: {
    layoutText: '#ffffff',
    layoutTextActive: '#61dafb',
    LayoutBackground: '#282c34',

    primary: '#ff6347',
    primaryUnactive: '#c89b94',
    secondary: '#008080',
    lightReviewBackground: '#F5F5F5',
    darkReviewBackground: '#E5E5E5',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter basename="/goit-react-hw-05-movies">
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
