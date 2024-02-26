import {Colors} from '@/theme/colors';
import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = ({size = 24, color = colors.black}) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="m2 12 5.25 5 2.625-3M8 12l5.25 5L22 7M16 7l-3.5 4"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgComponent;
