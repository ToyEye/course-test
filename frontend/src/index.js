import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { GlobalStyles, theme } from 'styles';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Loader from 'components/Loader/Loader';
import store from 'redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <App />
          </ThemeProvider>
        </Provider>
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>
);
