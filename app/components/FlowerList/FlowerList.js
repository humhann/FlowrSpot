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
        { this.props.items.map(item => (
          <FlowerItem
            item={item}
            key={item.key}
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
