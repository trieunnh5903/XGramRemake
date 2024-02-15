import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {MainNavigation} from './navigators';
import {LanguageSheet} from '@/components';
import ThemeProvider from './theme/ThemeProvider';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaProvider>
        <ThemeProvider>
          <MainNavigation />
        </ThemeProvider>
        <LanguageSheet />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App;
