import * as React from 'react';
import { Provider } from 'react-redux';

import { persistStore } from "redux-persist"
import { PersistGate } from "redux-persist/integration/react"

import { store } from './src/store/index';
import AppNavigation from './AppNavigation';
let persistor = persistStore(store)

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppNavigation />
      </PersistGate>
    </Provider>
  );
}