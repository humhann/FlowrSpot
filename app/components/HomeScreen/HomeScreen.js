import React from 'react';
import {
  StyleSheet,
  ScrollView,
} from 'react-native';

import HeroSection from '../HeroSection/HeroSection';
import FlowerList from '../FlowerList/FlowerList';

import FavoritesIcon from '../../assets/icons/FavoritesIcon';

export default class HomeScreen extends React.Component {
  state = {
    items: [
      { key: '0' },
      { key: '1' },
      { key: '2' },
      { key: '3' },
      { key: '4' },
    ],
  }

  static navigationOptions = {
    tabBarIcon: props => (<FavoritesIcon {...props} />),
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <HeroSection />
        <FlowerList
          items={ this.state.items }
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
