import {colors} from '@/theme/colors';

import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = ({size = 24, color = colors.black
}) => (
  <Svg
    width={size
}
    height={size
}
    viewBox="0 0 23 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M21.51 4.224a3.474 3.474 0 1 1-6.948 0 3.474 3.474 0 0 1 6.948 0ZM7.698 4.224a3.474 3.474 0 1 1-6.948 0 3.474 3.474 0 0 1 6.948 0ZM21.51 18.776a3.474 3.474 0 1 1-6.948 0 3.474 3.474 0 0 1 6.948 0ZM7.698 18.776a3.474 3.474 0 1 1-6.948 0 3.474 3.474 0 0 1 6.948 0Z"
      stroke={color}
      strokeWidth={1.5}
    />
  </Svg>
);

export default SvgComponent;
