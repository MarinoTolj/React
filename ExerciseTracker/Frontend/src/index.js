import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, applyMiddleware, compose} from "redux"
import {Provider} from "react-redux"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {persistStore} from "redux-persist"
import { PersistGate } from 'redux-persist/integration/react';
import persistReducer from './reducers/index';
import thunk from 'redux-thunk'

const store=createStore(persistReducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

const persistor=persistStore(store);


ReactDOM.render(
  <Provider store={store}>

    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
    
  </Provider>,
  document.getElementById('root')
);
