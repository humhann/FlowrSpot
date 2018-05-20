import React from 'react';
import Svg, {
  G,
  Circle,
  Path,
} from 'react-native-svg';
import PropTypes from 'prop-types';

const Sighting = ({ focused, tintColor }) => (
  <Svg
    width="31"
    height="31"
  >
    <G fill="none" fillRule="evenodd" stroke="#EAA79E" transform="translate(1 1)">
      <Circle cx="14.5" cy="14.5" r="14.5" />
      <G transform="translate(5 5)">
        <Circle fill={focused ? tintColor : 'none'} cx="10" cy="10" r="7" />
        <Path strokeLinecap="square" d="M0 10h20M10 0v20" />
        <Path stroke={focused ? '#fff' : 'none'} strokeLinecap="square" d="M3 10h14M10 3v14" />
      </G>
    </G>
  </Svg>
);

Sighting.propTypes = {
  focused: PropTypes.bool.isRequired,
  tintColor: PropTypes.string.isRequired,
};

export default Sighting;
