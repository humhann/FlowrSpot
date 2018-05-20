import React from 'react';
import Svg, {
  G,
  Circle,
  Path,
} from 'react-native-svg';

const Favorites = () => (
  <Svg
    width="31"
    height="31"
  >
    <G fill="none" fillRule="evenodd" stroke="#EAA79E" transform="translate(1 1)">
      <Circle cx="14.5" cy="14.5" r="14.5" />
      <Path d="M24 12.676C24 10.094 21.824 8 19.139 8a4.895 4.895 0 0 0-4.14 2.234A4.896 4.896 0 0 0 10.86 8C8.176 8 6 10.094 6 12.676c0 1.406.648 2.664 1.668 3.52l6.888 6.627A.64.64 0 0 0 15 23a.64.64 0 0 0 .444-.177l6.887-6.626C23.352 15.34 24 14.082 24 12.676z" />
    </G>
  </Svg>
);

export default Favorites;
