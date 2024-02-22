import { DarkColors, LightColors } from '@/theme/colors';
import { useColorScheme } from 'react-native';

export default function () {
  const theme = useColorScheme();
  const isDark = theme === 'dark';
  return isDark ? DarkColors : LightColors;
}
