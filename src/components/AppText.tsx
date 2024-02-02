import {StyleProp, StyleSheet, Text, TextStyle} from 'react-native';
import React, {memo} from 'react';
import {useAppTheme} from '@/hooks';

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

interface AppTextProps {
  typeStyle: TypeStyle;
  children: React.ReactNode;
  style: StyleProp<TextStyle>;
}
const AppText: React.FC<AppTextProps> = ({typeStyle, children, style}) => {
  const appTheme = useAppTheme();
  switch (typeStyle) {
    case 'label-large':
      return (
        <Text style={[styles.labelLarge, {color: appTheme.white90}, style]}>
          {children}
        </Text>
      );
    case 'label-medium':
      return (
        <Text style={[styles.labelMedium, {color: appTheme.white90}, style]}>
          {children}
        </Text>
      );

    case 'label-small':
      return (
        <Text style={[styles.labelSmall, {color: appTheme.white90}, style]}>
          {children}
        </Text>
      );

    case 'body-large':
      return (
        <Text style={[styles.bodyLarge, {color: appTheme.white90}, style]}>
          {children}
        </Text>
      );

    case 'body-medium':
      return (
        <Text style={[styles.bodyMedium, {color: appTheme.white90}, style]}>
          {children}
        </Text>
      );

    case 'body-small':
      return (
        <Text style={[styles.bodySmall, {color: appTheme.white90}, style]}>
          {children}
        </Text>
      );

    case 'title-large':
      return (
        <Text style={[styles.titleLarge, {color: appTheme.white90}, style]}>
          {children}
        </Text>
      );

    case 'title-medium':
      return (
        <Text style={[styles.titleMedium, {color: appTheme.white90}, style]}>
          {children}
        </Text>
      );

    case 'title-small':
      return (
        <Text style={[styles.titleSmall, {color: appTheme.white90}, style]}>
          {children}
        </Text>
      );

    case 'headline-large':
      return (
        <Text style={[styles.headlineLarge, {color: appTheme.white90}, style]}>
          {children}
        </Text>
      );

    case 'headline-medium':
      return (
        <Text style={[styles.headlineMedium, {color: appTheme.white90}, style]}>
          {children}
        </Text>
      );

    case 'headline-small':
      return (
        <Text style={[styles.headlineSmall, {color: appTheme.white90}, style]}>
          {children}
        </Text>
      );

    default:
      return <Text style={style}>{children}</Text>;
  }
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
