import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';

export default class FlowerItem extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Text>{ this.props.item.name }</Text>
      </View>
    );
  }
}

FlowerItem.propTypes = {
  item: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  container: {
  },
});
