import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import SightingIcon from '../../assets/icons/SightingIcon';

export default class Tab3Screen extends React.Component {
  static navigationOptions = {
    tabBarIcon: props => (<SightingIcon {...props} />),
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Tab 3</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
