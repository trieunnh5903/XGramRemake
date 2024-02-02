import {colors} from '@/theme/colors';
import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const BarsSvg = ({size = 24, color = colors.black}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 302 302"
    xmlSpace="preserve"
    height={size}
    width={size}>
    <Path fill={color} d="M0 36h302v30H0zM0 236h302v30H0zM0 136h302v30H0z" />
  </Svg>
);

export default BarsSvg;
