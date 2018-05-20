import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Favorites from '../../icons/Favorites';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Home</Text>
      </View>
    );
  }
}

HomeScreen.navigationOptions = {
  tabBarIcon: <Favorites />,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
