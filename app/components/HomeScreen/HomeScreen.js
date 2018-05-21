import React from 'react';
import {
  StyleSheet,
  ScrollView,
} from 'react-native';

import FavoritesIcon from '../../assets/icons/FavoritesIcon';
import HeroSection from '../HeroSection/HeroSection';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    tabBarIcon: props => (<FavoritesIcon {...props} />),
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
