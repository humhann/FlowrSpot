import React from 'react';
import {
  StyleSheet,
  ScrollView,
} from 'react-native';

import Favorites from '../../assets/icons/Favorites';
import HeroSection from '../HeroSection/HeroSection';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    tabBarIcon: props => (<Favorites {...props} />),
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <HeroSection />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
