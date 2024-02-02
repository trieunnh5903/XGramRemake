import {colors} from '@/theme/colors';

import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = ({size = 24, color = colors.black
}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512.002 512.002"
    width={size
}
    height={size
}>
    <Path
      fill={color}
      d="M334.549 460.097a11.447 11.447 0 0 0-.651-2.135 11.138 11.138 0 0 0-1.051-1.975 10.976 10.976 0 0 0-1.416-1.736 10.931 10.931 0 0 0-1.736-1.416 11.342 11.342 0 0 0-1.975-1.051 10.765 10.765 0 0 0-2.135-.651c-3.711-.754-7.651.468-10.3 3.117a11.638 11.638 0 0 0-1.427 1.736 11.6 11.6 0 0 0-1.702 4.11c-.148.731-.217 1.484-.217 2.227a11.269 11.269 0 0 0 .868 4.362c.285.697.639 1.359 1.051 1.975.422.628.902 1.21 1.427 1.736a11.484 11.484 0 0 0 8.073 3.346c.742 0 1.496-.08 2.227-.228.731-.137 1.45-.365 2.135-.651a11.138 11.138 0 0 0 1.975-1.051c.628-.411 1.21-.891 1.736-1.416a10.931 10.931 0 0 0 1.416-1.736 11.623 11.623 0 0 0 1.702-4.11c.149-.73.228-1.484.228-2.227a11.137 11.137 0 0 0-.228-2.226z"
    />
    <Path
      fill={color}
      d="M481.853 341.049h-43.059V62.48c0-6.307-5.112-11.419-11.419-11.419H300.473V11.419C300.474 5.112 295.361 0 289.055 0h-66.109c-6.307 0-11.419 5.112-11.419 11.419v39.642H84.627c-6.307 0-11.419 5.112-11.419 11.419v278.57H30.149c-6.307 0-11.419 5.112-11.419 11.419v57.876c0 6.307 5.112 11.419 11.419 11.419h61.964L44.122 494.28A11.418 11.418 0 0 0 53.645 512h66.109a11.42 11.42 0 0 0 9.522-5.117l21.931-33.139h138.695c6.307 0 11.419-5.112 11.419-11.419s-5.112-11.419-11.419-11.419H166.32l19.286-29.143h140.79l56.33 85.121a11.42 11.42 0 0 0 9.522 5.117h66.109a11.42 11.42 0 0 0 9.523-17.72l-47.991-72.518h61.964c6.307 0 11.419-5.112 11.419-11.419v-57.876c0-6.306-5.113-11.419-11.419-11.419zM234.365 22.837h43.271v28.224h-43.271V22.837zm-49.984 51.061H327.622v31.513h-143.24V73.898zm-88.335 0h65.499v42.932c0 6.307 5.112 11.419 11.419 11.419H339.04c6.307 0 11.419-5.112 11.419-11.419V73.898h65.499v267.151H96.046V73.898zm17.572 415.265H74.895l44.603-67.4h38.723l-44.603 67.4zm323.49 0h-38.724l-44.603-67.4h38.723l44.604 67.4zm33.326-90.238H41.568v-35.038h428.866v35.038z"
    />
    <Path
      fill={color}
      d="M351.674 209.56a11.416 11.416 0 0 0-8.646-7.673l-51.476-10.174-25.581-45.813a11.42 11.42 0 0 0-19.94 0l-25.581 45.812-51.476 10.174a11.42 11.42 0 0 0-6.161 18.963l35.665 38.487-6.232 52.099a11.42 11.42 0 0 0 16.131 11.72l47.624-22.027 47.624 22.027a11.417 11.417 0 0 0 16.131-11.72l-6.232-52.099 35.665-38.487a11.418 11.418 0 0 0 2.485-11.289zm-58.49 38.127a11.413 11.413 0 0 0-2.962 9.117l4.43 37.04-33.858-15.659a11.422 11.422 0 0 0-9.588 0l-33.858 15.659 4.43-37.04a11.417 11.417 0 0 0-2.962-9.117l-25.356-27.362 36.596-7.233a11.424 11.424 0 0 0 7.756-5.635L256 174.889l18.187 32.568a11.422 11.422 0 0 0 7.756 5.635l36.596 7.233-25.355 27.362z"
    />
  </Svg>
);

export default SvgComponent;
