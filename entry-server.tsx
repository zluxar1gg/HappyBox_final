import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { HelmetProvider, HelmetServerState } from 'react-helmet-async';
import { AuthProvider } from './context/AuthContext';
import { AppRoutes } from './App';

export function render(url: string) {
  const helmetContext: { helmet?: HelmetServerState } = {};
  
  const appHtml = ReactDOMServer.renderToString(
    <React.StrictMode>
      <HelmetProvider context={helmetContext}>
        <AuthProvider>
          <StaticRouter location={url}>
            <AppRoutes />
          </StaticRouter>
        </AuthProvider>
      </HelmetProvider>
    </React.StrictMode>
  );

  return {
    appHtml,
    helmet: helmetContext.helmet,
  };
}
