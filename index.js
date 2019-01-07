/** @format */
import React from 'react';
import { AppRegistry } from 'react-native';
import AppNavigator from './src/AppNavigator';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import { store } from './configureStore';
import "@babel/polyfill";

const Component = () => (
  <Provider store={store}>
    <AppNavigator />
  </Provider>
);

AppRegistry.registerComponent(appName, () => Component);
