import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {OnBoardingScreen} from '@/screens';
import {ApplicationStackParamList} from '@/types/navigation';

const Stack = createNativeStackNavigator<ApplicationStackParamList>();
const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen component={OnBoardingScreen} name="Onboarding" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
