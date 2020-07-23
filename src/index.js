import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { Auth0Provider } from "@auth0/auth0-react";
import history from "./utils/history";


const onRedirectCallback = (appState) => {
  history.push(
    appState && appState.returnTo
      ? appState.returnTo
      : window.location.pathname
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Auth0Provider
      domain="api-king-security.auth0.com"
      clientId="H1Fk30BqMUT7tZata6tS5n61h83nD6ux"
      audience="https://api-king-security.auth0.com/api/v2/"
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
      >
        <App />
      </Auth0Provider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
