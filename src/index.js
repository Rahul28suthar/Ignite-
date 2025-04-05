import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';
//redux setup
import { configureStore , applyMiddleware,compose} from '@reduxjs/toolkit';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import  {thunk}  from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;

const store = configureStore({
  reducer:rootReducer,
  composeEnhancer:composeEnhancer(applyMiddleware(thunk)),

});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </Provider>  
  </React.StrictMode>
);


reportWebVitals();
