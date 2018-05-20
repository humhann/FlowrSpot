import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Sighting from '../../icons/Sighting';

export default class Tab3Screen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Tab 3</Text>
      </View>
    );
  }
}

Tab3Screen.navigationOptions = {
  tabBarIcon: <Sighting />,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
