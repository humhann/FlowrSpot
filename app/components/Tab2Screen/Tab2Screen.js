import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Comment from '../../assets/icons/Comment';

export default class Tab2Screen extends React.Component {
  static navigationOptions = {
    tabBarIcon: props => (<Comment {...props} />),
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Tab 2</Text>
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
