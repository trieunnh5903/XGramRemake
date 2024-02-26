import { AuthStackParamList, RootStackParamList } from '@/types/navigation';
import {
  CommonActions,
  StackActions,
  createNavigationContainerRef,
} from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export const navigationRef = createNavigationContainerRef();

export const navigateAndReset = (
  routes: (keyof RootStackParamList)[] = [],
  index = 0,
) => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index,
        routes: routes.map(route => ({ name: route })),
      }),
    );
  } else {
    console.log('navigationRef not ready');
  }
};

export function navigate(
  name: keyof RootStackParamList | keyof AuthStackParamList,
  params?: NativeStackScreenProps<RootStackParamList>['route']['params'],
) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(CommonActions.navigate(name, params));
  }
}

export const push = (
  name: keyof RootStackParamList,
  params?: NativeStackScreenProps<RootStackParamList>['route']['params'],
) => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.push(name, params));
  }
};

export const goBack = () => {
  navigationRef.goBack();
};
