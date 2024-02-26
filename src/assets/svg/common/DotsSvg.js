import {Colors} from '@/theme/colors';
import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = ({size = 24, color = colors.black}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 290 290"
    height={size}
    width={size}>
    <Path
      fill={color}
      d="M255 110c-19.299 0-35 15.701-35 35s15.701 35 35 35 35-15.701 35-35-15.701-35-35-35zM35 110c-19.299 0-35 15.701-35 35s15.701 35 35 35 35-15.701 35-35-15.701-35-35-35zM145 110c-19.299 0-35 15.701-35 35s15.701 35 35 35 35-15.701 35-35-15.701-35-35-35z"
    />
  </Svg>
);

export default SvgComponent;
