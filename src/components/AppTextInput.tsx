import {
  Platform,
  StyleProp,
  StyleSheet,
  TextInputProps,
  TextStyle,
} from 'react-native';
import React, { memo } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { Colors } from '@/theme/colors';

export interface AppInputProps extends TextInputProps {
  style?: StyleProp<TextStyle>;
  color?: string;
}
const AppTextInput = ({
  color = Colors.black,
  style,
  placeholderTextColor = Colors.placeholder,
  cursorColor = Colors.black,
  ...restProps
}: AppInputProps) => {
  return (
    <TextInput
      cursorColor={cursorColor}
      style={[styles.base, { color: color }, style]}
      placeholderTextColor={placeholderTextColor}
      {...restProps}
    />
  );
};

export default memo(AppTextInput);

const styles = StyleSheet.create({
  base: {
    color: Colors.typography,
    ...(Platform.OS === 'android' && {
      marginVertical: -15,
    }),
  },
});
