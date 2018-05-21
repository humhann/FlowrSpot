import React from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  Dimensions,
  PixelRatio,
} from 'react-native';
import PropTypes from 'prop-types';

export default class FlowerItem extends React.PureComponent {
  render() {
    return (
      <View
        style={{
          marginRight: this.props.applyRightMargin ? 12 : 0,
          marginBottom: 12,
        }}
      >
        <ImageBackground
          style={styles.image}
          source={{ uri: `https:${this.props.item.profile_picture}` }}
        >
          <View style={styles.gradient} />
          <Text style={styles.title}>
            { this.props.item.name }
          </Text>
          <Text style={styles.subtitle}>
            { this.props.item.latin_name }
          </Text>
          <View style={styles.sightingsWrapper}>
            <Text style={styles.sightings}>
              { this.props.item.sightings } sightings
            </Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

FlowerItem.propTypes = {
  item: PropTypes.object.isRequired,
  applyRightMargin: PropTypes.bool,
};

FlowerItem.defaultProps = {
  applyRightMargin: false,
};

const styles = StyleSheet.create({
  image: {
    width: (Dimensions.get('window').width - (2 * 14) - 12) / 2,
    height: 200,
    alignItems: 'center',
    justifyContent: 'flex-end',
    borderRadius: 2.4,
    overflow: 'hidden',
  },
  // TODO: add gradient
  gradient: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  title: {
    color: '#fff',
    fontFamily: 'ubuntu-regular',
    fontSize: PixelRatio.getFontScale() * 16,
    textAlign: 'center',
    marginBottom: 9,
  },
  subtitle: {
    color: '#fff',
    fontFamily: 'ubuntu-italic',
    fontSize: PixelRatio.getFontScale() * 9.6,
    textAlign: 'center',
    marginBottom: 15,
    opacity: 0.7,
  },
  sightingsWrapper: {
    width: 82.4,
    marginBottom: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingTop: 6.2,
    paddingBottom: 7.8,
    paddingHorizontal: 2,
    borderRadius: 16,
    overflow: 'hidden',
  },
  sightings: {
    color: '#fff',
    fontFamily: 'ubuntu-regular',
    fontSize: PixelRatio.getFontScale() * 9.6,
    textAlign: 'center',
  },
});
