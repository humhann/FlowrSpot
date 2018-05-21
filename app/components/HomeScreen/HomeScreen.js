import React from 'react';
import {
  StyleSheet,
  ScrollView,
} from 'react-native';

import FlowerService from '../../api/FlowerService';
import HeroSection from '../HeroSection/HeroSection';
import FlowerList from '../FlowerList/FlowerList';

import FavoritesIcon from '../../assets/icons/FavoritesIcon';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    tabBarIcon: props => (<FavoritesIcon {...props} />),
  }

  state = {
    items: [],
  }

  async componentDidMount() {
    const flowersIndex = await FlowerService.getFlowersIndex();

    if (flowersIndex && flowersIndex.flowers) {
      this.setState({
        items: flowersIndex.flowers,
      });
    }
  }

  async search(searchTerm) {
    const flowersIndex = await FlowerService.searchFlowers(searchTerm);

    if (flowersIndex && flowersIndex.flowers) {
      this.setState({
        items: flowersIndex.flowers,
      });
    }
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
