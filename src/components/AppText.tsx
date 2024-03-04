import { StyleProp, StyleSheet, Text, TextStyle } from 'react-native';
import React, { PropsWithChildren, memo } from 'react';
import { Colors } from '@/theme/colors';

type TypeStyle =
  | 'label-large'
  | 'label-medium'
  | 'label-small'
  | 'body-large'
  | 'body-medium'
  | 'body-small'
  | 'title-large'
  | 'title-medium'
  | 'title-small'
  | 'headline-large'
  | 'headline-medium'
  | 'headline-small';

export interface AppTextProps extends PropsWithChildren {
  typeStyle?: TypeStyle;
  style?: StyleProp<TextStyle>;
  color?: string;
  bold?: boolean;
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify' | undefined;
}
const AppText: React.FC<AppTextProps> = ({
  typeStyle,
  children,
  color = Colors.white90,
  bold,
  style,
  textAlign,
}) => {
  let labelStyle = {};
  switch (typeStyle) {
    case 'label-large':
      labelStyle = styles.labelLarge;
      break;
    case 'label-medium':
      labelStyle = styles.labelMedium;

      break;

    case 'label-small':
      labelStyle = styles.labelSmall;
      break;

    case 'body-large':
      labelStyle = styles.bodyLarge;
      break;

    case 'body-medium':
      labelStyle = styles.bodyMedium;
      break;

    case 'body-small':
      labelStyle = styles.bodySmall;
      break;

    case 'title-large':
      labelStyle = styles.titleLarge;
      break;
    case 'title-medium':
      labelStyle = styles.titleMedium;
      break;

    case 'title-small':
      labelStyle = styles.titleSmall;
      break;

    case 'headline-large':
      labelStyle = styles.headlineLarge;
      break;

    case 'headline-medium':
      labelStyle = styles.headlineMedium;
      break;

    case 'headline-small':
      labelStyle = styles.headlineSmall;
      break;
  }
  return (
    <Text
      style={[
        {
          color: color,
          fontWeight: bold ? 'bold' : 'normal',
          textAlign: textAlign,
          ...labelStyle,
        },
        style,
      ]}>
      {children}
    </Text>
  );
};

export default memo(AppText);

const styles = StyleSheet.create({
  labelLarge: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    lineHeight: 20,
  },
  labelMedium: {
    fontFamily: 'Inter-Medium',
    fontSize: 12,
    lineHeight: 16,
  },
  labelSmall: {
    fontFamily: 'Inter-Medium',
    fontSize: 11,
    lineHeight: 16,
  },
  //
  bodyLarge: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    lineHeight: 24,
  },

  bodyMedium: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    lineHeight: 20,
  },
  bodySmall: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    lineHeight: 16,
  },

  //
  titleLarge: {
    fontFamily: 'Inter-Regular',
    fontSize: 22,
    lineHeight: 28,
  },

  titleMedium: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    lineHeight: 24,
  },

  titleSmall: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    lineHeight: 20,
  },
  //
  headlineLarge: {
    fontFamily: 'Inter-Regular',
    fontSize: 32,
    lineHeight: 40,
  },
  headlineMedium: {
    fontFamily: 'Inter-Regular',
    fontSize: 28,
    lineHeight: 36,
  },
  headlineSmall: {
    fontFamily: 'Inter-Regular',
    fontSize: 24,
    lineHeight: 32,
  },
});
