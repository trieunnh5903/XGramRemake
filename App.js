import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {MainNavigation} from './src/navigators';

const App = () => {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{flex: 1}}>
        <MainNavigation />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

export default App;
