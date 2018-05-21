import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  Dimensions,
  PixelRatio,
} from 'react-native';
import PropTypes from 'prop-types';

import SearchInput from '../SearchInput/SearchInput';

import image from '../../assets/images/pl_hero.jpg';

const imageInfo = Image.resolveAssetSource(image);

const HeroSection = ({ search }) => (
  <ImageBackground
    style={styles.background}
    resizeMode="contain"
    source={image}
  >
    <Text style={styles.title}>
      Discover flowers{'\n'}
      around you
    </Text>
    <Text style={styles.subtitle}>
      Explore between more than 8.427 sightings
    </Text>
    <SearchInput
      search={search}
    />
  </ImageBackground>
);

HeroSection.propTypes = {
  search: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  background: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width / (imageInfo.width / imageInfo.height),
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'ubuntu-light',
    fontSize: PixelRatio.getFontScale() * 24,
    marginBottom: 26,
  },
  subtitle: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'ubuntu-light',
    fontSize: PixelRatio.getFontScale() * 15,
    marginBottom: 29,
    opacity: 0.7,
  },
});

export default HeroSection;
