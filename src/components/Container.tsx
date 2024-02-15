import {
  StatusBar,
  StatusBarProps,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native';
import React, {memo, useMemo} from 'react';
import {Edges, SafeAreaView} from 'react-native-safe-area-context';
import Animated, {FadeIn} from 'react-native-reanimated';
import useTheme from '@/hooks/useTheme';

interface ContainerProps {
  children: React.ReactNode;
  edgeTop?: boolean;
  edgeBottom?: boolean;
  safeAreaStyle?: StyleProp<ViewStyle>;
  statusBarProps?: StatusBarProps;
  style?: StyleProp<ViewStyle>;
  useFading?: boolean;
}
const Container: React.FC<ContainerProps> = ({
  children,
  edgeBottom = true,
  edgeTop = true,
  safeAreaStyle,
  statusBarProps,
  style,
  useFading = false,
}) => {
  const {layout} = useTheme();
  const edges = useMemo(() => {
    let edgeArr = ['left', 'right'];
    if (edgeBottom) {
      edgeArr.push('bottom');
    }

    if (edgeTop) {
      edgeArr.push('top');
    }

    return edgeArr as Edges;
  }, [edgeBottom, edgeTop]);
  return (
    <SafeAreaView style={[layout.flex_1, safeAreaStyle]} edges={edges}>
      <Animated.View
        entering={useFading ? FadeIn : undefined}
        style={[layout.flex_1]}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
          {...statusBarProps}
        />
        <View style={[layout.flex_1, style]}>{children}</View>
      </Animated.View>
    </SafeAreaView>
  );
};

export default memo(Container);
