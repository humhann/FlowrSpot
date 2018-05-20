import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import SightingList from '../../assets/icons/SightingList';

export default class Tab4Screen extends React.Component {
  static navigationOptions = {
    tabBarIcon: props => (<SightingList {...props} />),
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Tab 4</Text>
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
