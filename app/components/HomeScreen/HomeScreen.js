import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Favorites from '../../assets/icons/Favorites';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    tabBarIcon: props => (<Favorites {...props} />),
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Home</Text>
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
