import {colors} from '@/theme/colors';

import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = ({size = 24, color = colors.black}) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 19 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="m13.64.397-9.03 3c-6.07 2.03-6.07 5.34 0 7.36l2.68.89.89 2.68c2.02 6.07 5.34 6.07 7.36 0l3.01-9.02c1.34-4.05-.86-6.26-4.91-4.91Zm.32 5.38-3.8 3.82c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l3.8-3.82c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06Z"
      fill={color}
    />
  </Svg>
);

export default SvgComponent;
