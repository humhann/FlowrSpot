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
    this.setLoading(true);
    const flowersIndex = await FlowerService.getFlowersIndex();

    if (flowersIndex && flowersIndex.flowers) {
      this.setState({
        items: flowersIndex.flowers,
      });
    }

    this.setLoading(false);
  }

  setLoading(loading) {
    this.setState({
      loading,
    });
  }

  async search(searchTerm) {
    this.setLoading(true);
    const flowersIndex = await FlowerService.searchFlowers(searchTerm);

    if (flowersIndex && flowersIndex.flowers) {
      this.setState({
        items: flowersIndex.flowers,
      });
    }

    this.setState({
      loading: false,
    });

    this.setLoading(false);
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <HeroSection
          search={this.search.bind(this)}
        />
        <FlowerList
          items={this.state.items}
          loading={this.state.loading}
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
