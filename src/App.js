import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { MainNavigation } from './navigators';
import { LanguageSheet } from '@/components';
import ThemeProvider from './theme/ThemeProvider';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import i18n from './translations/i18n';
import { appStore } from './stores';
import { SplashScreen } from './screens';

const App = () => {
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    i18n.changeLanguage(appStore.currentLanguage?.code);
    setIsReady(true);
  }, []);
  return (
    <ThemeProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaProvider>
          {isReady ? <MainNavigation /> : <SplashScreen />}
          <LanguageSheet />
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
};

export default App;
