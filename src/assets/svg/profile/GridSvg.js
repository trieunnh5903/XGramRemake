import {colors} from '@/theme/colors';

import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = ({size = 24, color = colors.black
}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 209 209"
    width={size
}
    height={size
}
    xmlSpace="preserve">
    <Path
      fill={color}
      d="M201.5 112c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5H184V43.333h17.5c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5H184V7.5c0-4.143-3.357-7.5-7.5-7.5S169 3.357 169 7.5v20.833h-53.666V7.5c0-4.143-3.357-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v20.833H46.667V7.5c0-4.143-3.357-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v20.833H7.5c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h24.167V97H7.5c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h24.167v53.666H7.5c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h24.167V201.5c0 4.143 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-20.834h53.667V201.5c0 4.143 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-20.834H169V201.5c0 4.143 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-20.834h17.5c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5H184V112h17.5zM169 43.333V97h-53.666V43.333H169zm-122.333 0h53.667V97H46.667V43.333zm0 122.333V112h53.667v53.666H46.667zm122.333 0h-53.666V112H169v53.666z"
    />
  </Svg>
);

export default SvgComponent;
