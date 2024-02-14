import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {MainNavigation} from './src/navigators';
import {LanguageSheet} from '@/components';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaProvider>
        <MainNavigation />
        <LanguageSheet />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App;
