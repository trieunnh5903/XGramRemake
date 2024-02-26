import { Text, StyleProp, TextStyle } from 'react-native';
import React, { PropsWithChildren, memo } from 'react';
import MaskedView from '@react-native-masked-view/masked-view';
import LinearGradient from 'react-native-linear-gradient';

interface AppGradientTextProps extends PropsWithChildren {
  locations?: number[];
  colors: (string | number)[];
  start?: { x: number; y: number };
  end?: { x: number; y: number };
  style?: StyleProp<TextStyle>;
}

const AppGradientText = ({
  start,
  end,
  children,
  colors,
  style,
}: AppGradientTextProps) => {
  return (
    <MaskedView
      // style={{ height: '100%' }}
      maskElement={<Text style={style}>{children}</Text>}>
      <LinearGradient
        colors={colors}
        start={start || { x: 0, y: 0 }}
        end={end || { x: 1, y: 0 }}>
        <Text style={[style, { opacity: 0 }]}>{children}</Text>
      </LinearGradient>
    </MaskedView>
  );
};

export default memo(AppGradientText);
