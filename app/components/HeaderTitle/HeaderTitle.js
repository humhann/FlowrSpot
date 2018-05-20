import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  PixelRatio,
} from 'react-native';

const HeaderTitle = () => (
  <View style={styles.container}>
    <Text style={styles.text}>FlowrSpot</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#e09186',
    fontFamily: 'ubuntu-bold',
    fontSize: PixelRatio.getPixelSizeForLayoutSize(10),
  },
});

export default HeaderTitle;
