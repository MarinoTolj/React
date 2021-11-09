import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from "redux"
import {Provider} from "react-redux"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {persistStore} from "redux-persist"
import { PersistGate } from 'redux-persist/integration/react';
import persistReducer from './reducers/index';

const store=createStore(persistReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const persistor=persistStore(store);


ReactDOM.render(
  <Provider store={store}>

    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
    
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
