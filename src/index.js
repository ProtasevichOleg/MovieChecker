import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './components/GlobalStyle';
import App from './components/App';

const theme = {
  colors: {
    primary: '#ff6347',
    secondary: '#008080',
    navLink: '#61dafb',
    navLinkActive: '#ffffff',
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