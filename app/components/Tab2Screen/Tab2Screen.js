import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Comment from '../../icons/Comment';

export default class Tab2Screen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Tab 2</Text>
      </View>
    );
  }
}

Tab2Screen.navigationOptions = {
  tabBarIcon: <Comment />,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
