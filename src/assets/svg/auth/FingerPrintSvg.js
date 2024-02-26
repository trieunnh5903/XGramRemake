import { Colors } from '@/theme/colors';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgComponent = ({ size = 24, color = Colors.black }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 463 463">
    <Path
      fill={color}
      d="M259.476 280.364V247.5c0-12.958-10.542-23.5-23.5-23.5s-23.5 10.542-23.5 23.5v29.672c0 35.757-13.173 70.087-37.094 96.665l-32.981 36.646a7.501 7.501 0 0 0 11.15 10.035l32.981-36.646c26.403-29.338 40.944-67.231 40.944-106.7V247.5c0-4.687 3.813-8.5 8.5-8.5s8.5 3.813 8.5 8.5v32.864c0 44.003-16.301 86.167-45.901 118.727l-32.149 35.364a7.5 7.5 0 0 0 11.099 10.09l32.148-35.364c32.116-35.327 49.803-81.075 49.803-128.817z"
    />
    <Path
      fill={color}
      d="M291.476 247.5c0-30.603-24.897-55.5-55.5-55.5s-55.5 24.897-55.5 55.5v29.672a112.322 112.322 0 0 1-28.879 75.258l-23.447 26.053a7.501 7.501 0 0 0 11.15 10.035l23.447-26.053a127.3 127.3 0 0 0 32.73-85.293V247.5c0-22.332 18.168-40.5 40.5-40.5s40.5 18.168 40.5 40.5v32.864c0 51.979-19.256 101.789-54.223 140.252l-27.125 29.839a7.5 7.5 0 1 0 11.098 10.09l27.126-29.839c37.481-41.23 58.123-94.622 58.123-150.342V247.5z"
    />
    <Path
      fill={color}
      d="M323.476 247.5c0-48.248-39.252-87.5-87.5-87.5s-87.5 39.252-87.5 87.5v29.672a80.372 80.372 0 0 1-20.665 53.851l-21.112 23.458a7.501 7.501 0 0 0 11.15 10.035l21.112-23.458a95.35 95.35 0 0 0 24.515-63.886V247.5c0-39.977 32.523-72.5 72.5-72.5s72.5 32.523 72.5 72.5v32.864c0 59.958-22.212 117.412-62.545 161.777l-7.507 8.258a7.5 7.5 0 0 0 11.099 10.09l7.506-8.258c42.848-47.133 66.446-108.169 66.446-171.867V247.5z"
    />
    <Path
      fill={color}
      d="M116.476 247.5c0 4.143 3.358 7.5 7.5 7.5s7.5-3.357 7.5-7.5c0-25.255 9.169-49.651 25.819-68.695 16.495-18.867 39.134-31.205 63.746-34.741a7.5 7.5 0 0 0-2.133-14.847c-28.16 4.046-54.052 18.15-72.906 39.716a119.347 119.347 0 0 0-29.526 78.567zM131.476 277.172c0-4.143-3.358-7.5-7.5-7.5s-7.5 3.357-7.5 7.5a48.42 48.42 0 0 1-12.449 32.443l-18.779 20.867a7.5 7.5 0 1 0 11.15 10.034l18.779-20.866a63.402 63.402 0 0 0 16.299-42.478zM340.755 344.123a7.505 7.505 0 0 0-9.155 5.357 272.367 272.367 0 0 1-10.24 31.258 7.5 7.5 0 0 0 6.971 10.264 7.504 7.504 0 0 0 6.975-4.739 287.597 287.597 0 0 0 10.806-32.986 7.502 7.502 0 0 0-5.357-9.154zM315.791 158.632a7.5 7.5 0 1 0-10.029 11.154c22.061 19.832 34.713 48.157 34.713 77.714v32.864c0 12.473-.86 25.042-2.557 37.359a7.5 7.5 0 1 0 14.859 2.046 289.747 289.747 0 0 0 2.698-39.406V247.5c.001-33.805-14.464-66.196-39.684-88.868zM280.729 153.076a7.501 7.501 0 0 0 9.996-3.548 7.5 7.5 0 0 0-3.547-9.995 118.513 118.513 0 0 0-34.136-10.317 7.5 7.5 0 0 0-2.133 14.847 103.575 103.575 0 0 1 29.82 9.013z"
    />
    <Path
      fill={color}
      d="M235.976 96c-2.806 0-5.644.078-8.437.232a7.5 7.5 0 0 0-7.076 7.901c.229 4.136 3.763 7.321 7.902 7.075 2.519-.139 5.079-.209 7.61-.209 75.266 0 136.5 61.233 136.5 136.5v32.864c0 4.143 3.358 7.5 7.5 7.5s7.5-3.357 7.5-7.5V247.5C387.476 163.963 319.513 96 235.976 96zM153.972 136.693a7.47 7.47 0 0 0 4.275-1.343c12.478-8.677 26.182-15.155 40.733-19.258a7.5 7.5 0 0 0-4.07-14.438c-16.16 4.556-31.376 11.749-45.226 21.379a7.5 7.5 0 0 0-1.876 10.439 7.487 7.487 0 0 0 6.164 3.221zM99.476 277.172V247.5c0-34.89 13.213-68.118 37.205-93.565a7.5 7.5 0 0 0-10.914-10.29C99.14 171.886 84.476 208.77 84.476 247.5v29.672c0 4.083-1.504 8.002-4.234 11.035l-9.248 10.275a7.5 7.5 0 0 0 .558 10.592A7.467 7.467 0 0 0 76.567 311a7.482 7.482 0 0 0 5.577-2.482l9.248-10.275a31.454 31.454 0 0 0 8.084-21.071zM409.951 189.104c-8.226-24.446-21.299-46.531-38.856-65.642a7.5 7.5 0 0 0-10.597-.449 7.502 7.502 0 0 0-.449 10.598c16.127 17.554 28.134 37.834 35.686 60.276a7.503 7.503 0 0 0 7.107 5.11 7.5 7.5 0 0 0 7.109-9.893zM295.247 73.822a7.5 7.5 0 0 0-4.856 14.191c16.538 5.659 32.065 13.857 46.15 24.369a7.466 7.466 0 0 0 4.48 1.489 7.5 7.5 0 0 0 4.492-13.511c-15.337-11.444-32.249-20.374-50.266-26.538z"
    />
    <Path
      fill={color}
      d="M119.442 125.908C150.991 95.659 192.377 79 235.976 79c8.096 0 16.237.583 24.196 1.731 4.103.598 7.903-2.252 8.495-6.352a7.499 7.499 0 0 0-6.351-8.494A185.167 185.167 0 0 0 235.976 64c-47.487 0-92.56 18.141-126.915 51.081-34.248 32.838-54.277 76.905-56.397 124.084a7.5 7.5 0 0 0 7.498 7.837 7.5 7.5 0 0 0 7.487-7.163c1.945-43.312 20.339-83.773 51.793-113.931z"
    />
    <Path
      fill={color}
      d="M235.976 32c-16.772 0-33.485 1.944-49.674 5.778a7.5 7.5 0 1 0 3.457 14.595A200.91 200.91 0 0 1 235.976 47c54.996 0 106.332 21.911 144.55 61.695a7.478 7.478 0 0 0 5.41 2.305 7.5 7.5 0 0 0 5.408-12.695c-19.913-20.729-43.304-37.036-69.522-48.465C294.666 38.002 265.783 32 235.976 32zM67.507 125.404a7.47 7.47 0 0 0 4.619 1.595 7.486 7.486 0 0 0 5.91-2.876c21.375-27.302 49.515-48.717 81.377-61.932 3.826-1.587 5.642-5.975 4.055-9.801s-5.977-5.644-9.801-4.055c-34.241 14.201-64.478 37.21-87.441 66.539a7.501 7.501 0 0 0 1.281 10.53zM131.983 38.725c1.094 0 2.205-.24 3.255-.748C166.816 22.73 200.709 15 235.976 15c18.378 0 36.682 2.162 54.401 6.426a7.5 7.5 0 0 0 3.508-14.584C275.019 2.302 255.535 0 235.976 0c-37.544 0-73.631 8.232-107.259 24.469a7.5 7.5 0 0 0 3.266 14.256zM321.724 31.383a232.314 232.314 0 0 1 22.746 10.52 7.498 7.498 0 0 0 10.138-3.115 7.5 7.5 0 0 0-3.115-10.139 247.448 247.448 0 0 0-24.22-11.201 7.5 7.5 0 1 0-5.549 13.935z"
    />
  </Svg>
);

export default SvgComponent;
