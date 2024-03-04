import { TextStyle, ViewStyle } from 'react-native';
import React, { memo } from 'react';
import Animated, { FadeIn } from 'react-native-reanimated';
import { AppText } from '.';
import { Colors } from '@/theme/colors';

interface ErrorLabelProps {
  text: string;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
}
const ErrorLabel = ({ text, containerStyle, textStyle }: ErrorLabelProps) => {
  return (
    <Animated.View
      style={[
        { paddingTop: 6, marginBottom: 4, marginLeft: 5 },
        containerStyle,
      ]}
      entering={FadeIn}>
      <AppText
        typeStyle="label-large"
        style={[textStyle, { color: Colors.error }]}>
        {text}
      </AppText>
    </Animated.View>
  );
};

export default memo(ErrorLabel);
