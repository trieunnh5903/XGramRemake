import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {
  LoginScreen,
  OnBoardingScreen,
  RecoveryPasswordScreen,
} from '@/screens';
import { RootStackParamList, AuthStackParamList } from '@/types/navigation';
import { navigationRef } from './NavigationUtils';

const Stack = createNativeStackNavigator<RootStackParamList>();
const AuthStack = createNativeStackNavigator<AuthStackParamList>();

const MainNavigation = () => {
  return (
    <NavigationContainer
      ref={ref => {
        navigationRef.current = ref;
      }}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
          statusBarAnimation: 'slide',
        }}>
        <Stack.Screen component={OnBoardingScreen} name="Onboarding" />
        <Stack.Screen name={'Auth'} component={AuthNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const AuthNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
        statusBarAnimation: 'slide',
      }}>
      <AuthStack.Screen name={'Login'} component={LoginScreen} />
      <AuthStack.Screen
        name={'RecoveryPassword'}
        component={RecoveryPasswordScreen}
      />
      {/* <Stack.Screen name={PageName.RegisterScreen} component={RegisterScreen} />
      <Stack.Screen
        name={PageName.AuthPassCodeScreen}
        component={AuthPassCodeScreen}
      />
     */}
    </Stack.Navigator>
  );
};

export default MainNavigation;
