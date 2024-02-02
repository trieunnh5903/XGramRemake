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
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M17.75 3A3.25 3.25 0 0 1 21 6.25v5.772A6.47 6.47 0 0 0 17.5 11c-1.845 0-3.51.769-4.693 2.003h-4.06l-.1.007a.75.75 0 0 0 0 1.486l.1.007h2.984A6.471 6.471 0 0 0 11 17.5a6.47 6.47 0 0 0 1.022 3.5H6.25A3.25 3.25 0 0 1 3 17.75V9.372a2.25 2.25 0 1 0 .224-4.31A3.252 3.252 0 0 1 6.25 3h11.5Zm-2.498 6.496H8.748l-.102.007a.75.75 0 0 0 0 1.486l.102.007h6.504l.102-.007a.75.75 0 0 0-.102-1.493Z"
      fill={color}
    />
    <Path
      d="M3.75 6a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM23 17.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0Zm-5 .5.001 2.503a.5.5 0 1 1-1 0V18h-2.505a.5.5 0 0 1 0-1H17v-2.5a.5.5 0 1 1 1 0V17h2.497a.5.5 0 0 1 0 1H18Z"
      fill={color}
    />
  </Svg>
);

export default SvgComponent;
