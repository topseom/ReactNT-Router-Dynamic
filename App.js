/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View,Text } from 'react-native';
import HomeScreen from './src/screens/homescreen';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducerCouter } from './src/reducers/counter';

import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate  } from 'redux-persist/integration/react';
import { AsyncStorage } from 'react-native';

import Router from './src/Router';

const persistConfig = {
  key: 'counter',
  storage: AsyncStorage,
  whitelist:['counter']
}
const persistedReducer = persistReducer(persistConfig, reducerCouter);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

class App extends React.Component{
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;

