import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import SightingList from '../../icons/SightingList';

export default class Tab4Screen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Tab 4</Text>
      </View>
    );
  }
}

Tab4Screen.navigationOptions = {
  tabBarIcon: <SightingList />,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
