import React from 'react';
import Svg, {
  G,
  Circle,
  Path,
} from 'react-native-svg';

const Sighting = () => (
  <Svg
    width="31"
    height="31"
  >
    <G fill="none" fillRule="evenodd" stroke="#EAA79E" transform="translate(1 1)">
      <Circle cx="14.5" cy="14.5" r="14.5" />
      <G transform="translate(5 5)">
        <Circle cx="10" cy="10" r="7" />
        <Path strokeLinecap="square" d="M0 10h20M10 0v20" />
      </G>
    </G>
  </Svg>
);

export default Sighting;
