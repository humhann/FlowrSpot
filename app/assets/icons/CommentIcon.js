import React from 'react';
import Svg, {
  G,
  Circle,
  Path,
} from 'react-native-svg';
import PropTypes from 'prop-types';

const CommentIcon = ({ focused, tintColor }) => (
  <Svg
    width="31"
    height="31"
  >
    <G fill="none" fillRule="evenodd" stroke="#EAA79E" transform="translate(1 1)">
      <Circle cx="14.5" cy="14.5" r="14.5" />
      <Path fill={focused ? tintColor : 'none'} d="M15 7c-4.411 0-8 3.188-8 7.106 0 1.37.439 2.695 1.27 3.843-.157 1.719-.579 2.996-1.192 3.601a.264.264 0 1 0 .225.447c.108-.015 2.618-.371 4.433-1.405A8.76 8.76 0 0 0 15 21.21c4.411 0 8-3.187 8-7.104C23 10.188 19.411 7 15 7zm-3.733 8.158a1.06 1.06 0 0 1-1.066-1.052c0-.581.477-1.053 1.066-1.053a1.06 1.06 0 0 1 1.066 1.053 1.06 1.06 0 0 1-1.066 1.052zm3.733 0a1.06 1.06 0 0 1-1.066-1.052c0-.581.477-1.053 1.066-1.053a1.06 1.06 0 0 1 1.066 1.053A1.06 1.06 0 0 1 15 15.158zm3.733 0a1.06 1.06 0 0 1-1.066-1.052c0-.581.478-1.053 1.066-1.053a1.06 1.06 0 0 1 1.066 1.053 1.06 1.06 0 0 1-1.066 1.052z" />
    </G>
  </Svg>
);

CommentIcon.propTypes = {
  focused: PropTypes.bool.isRequired,
  tintColor: PropTypes.string.isRequired,
};

export default CommentIcon;
