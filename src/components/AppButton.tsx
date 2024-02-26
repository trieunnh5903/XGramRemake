import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native';
import React, { memo } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Colors } from '@/theme/colors';
import LinearGradient from 'react-native-linear-gradient';
import AppText, { AppTextProps } from './AppText';

export interface AppButtonProps extends AppTextProps {
  text?: string;
  icon?: ImageSourcePropType;
  iconComponent?: React.ReactNode;
  onPress?: () => void;
  disabled?: boolean;
  backgroundColor?: string;
  colors?: (string | number)[];
  start?: { x: number; y: number };
  end?: { x: number; y: number };
  disabledBackgroundColor?: string;
  disabledTextColor?: string;
  textColor?: string;
  textSize?: number;
  textStyle?: StyleProp<TextStyle>;
  iconStyle?: StyleProp<ImageStyle>;
  opacity?: number;
  iconDirection?: 'left' | 'right';
  spaceBetween?: boolean;
  style?: StyleProp<ViewStyle> | ViewStyle;
  radius?: number;
}

const AppButton = ({
  textSize,
  radius = 8,
  backgroundColor = Colors.primary,
  colors,
  disabled,
  disabledBackgroundColor = Colors.k8E8E8E,
  disabledTextColor = Colors.white,
  icon,
  iconComponent,
  iconStyle,
  onPress,
  opacity = 0.8,
  start = { x: 0, y: 0 },
  end = { x: 1, y: 0 },
  text,
  textStyle,
  iconDirection = 'right',
  textColor = Colors.background,
  style,
  typeStyle,
  ...restProps
}: AppButtonProps) => {
  const styles = StyleSheet.create({
    baseBtn: {
      flexDirection: iconDirection === 'right' ? 'row' : 'row-reverse',
      alignItems: 'center',
      paddingHorizontal: 16,
      height: 48,
      borderRadius: radius,
      backgroundColor: disabled ? disabledBackgroundColor : backgroundColor,
      overflow: 'hidden',
    },
    baseTxt: {
      color: disabled ? disabledTextColor : textColor,
      fontSize: textSize,
    },
    btnBg: {
      ...StyleSheet.absoluteFillObject,
      zIndex: -1,
    },
    baseIc: {
      height: 24,
      width: 24,
    },
  });
  return (
    <TouchableOpacity
      {...restProps}
      disabled={disabled}
      style={[styles.baseBtn, style]}
      activeOpacity={opacity}
      onPress={onPress}>
      {!!colors && (
        <LinearGradient
          style={styles.btnBg}
          colors={
            disabled
              ? [disabledBackgroundColor, disabledBackgroundColor]
              : colors
          }
          start={start}
          end={end}
        />
      )}
      <AppText typeStyle={typeStyle} style={[styles.baseTxt, textStyle]}>
        {text}
      </AppText>
      {(!!icon || !!iconComponent) && (
        <>
          {iconComponent ? (
            iconComponent
          ) : (
            <Image source={icon} style={[styles.baseIc, iconStyle]} />
          )}
        </>
      )}
    </TouchableOpacity>
  );
};

export default memo(AppButton);
