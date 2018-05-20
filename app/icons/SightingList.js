import React from 'react';
import Svg, {
  G,
  Circle,
  Path,
} from 'react-native-svg';

const SightingList = () => (
  <Svg
    width="31"
    height="31"
  >
    <G fill="none" fillRule="evenodd" stroke="#EAA79E" transform="translate(1 1)">
      <Circle cx="14.5" cy="14.5" r="14.5" />
      <Path d="M15 14.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5M15 5c-3.87 0-7 3.13-7 7 0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7" />
    </G>
  </Svg>
);

export default SightingList;
