import React from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
} from 'react-native';
import PropTypes from 'prop-types';

import FlowerItem from '../FlowerItem/FlowerItem';

export default class FlowerList extends React.PureComponent {
  render() {
    return (
      <View
        style={styles.container}
      >
        { this.props.loading &&
          <View style={styles.loadingWrapper}>
            <ActivityIndicator
              size="large"
              color="#000"
            />
          </View>
        }

        { !this.props.loading && this.props.items.map((item, index) => (
          <FlowerItem
            key={item.id}
            item={item}
            applyRightMargin={index % 2 === 0}
          />
        )) }
      </View>
    );
  }
}

FlowerList.propTypes = {
  items: PropTypes.array.isRequired,
  loading: PropTypes.bool,
};

FlowerList.defaultProps = {
  loading: false,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 14,
    marginTop: 12,
  },
  loadingWrapper: {
    flex: 1,
    alignItems: 'center',
    marginVertical: 30,
  },
});
