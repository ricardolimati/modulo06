import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
  StatusBar
} from 'react-native';

import './config/ReactotronConfig';
import Routes from './routes';

export default function App() {
  return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
        <Routes/>
      </GestureHandlerRootView>
     );
}
