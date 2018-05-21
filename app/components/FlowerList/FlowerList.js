import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import PropTypes from 'prop-types';

import FlowerItem from '../FlowerItem/FlowerItem';

export default class FlowerList extends React.PureComponent {
  render() {
    return (
      <View
        style={styles.container}
      >
        { this.props.items.length > 0 && this.props.items.map((item, key) => (
          <FlowerItem
            item={item}
            key={key}
          />
        )) }
      </View>
    );
  }
}

FlowerList.propTypes = {
  items: PropTypes.array.isRequired,
};

const styles = StyleSheet.create({
  container: {
  },
});
