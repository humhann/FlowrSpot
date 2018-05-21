import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
} from 'react-native';
import PropTypes from 'prop-types';

import SearchIcon from '../../assets/icons/SearchIcon';

export default class SearchInput extends React.PureComponent {
  state = {
    searchTerm: '',
  };

  render() {
    return (
      <View style={styles.background}>
        <TextInput
          style={styles.input}
          onChangeText={searchTerm => this.setState({ searchTerm })}
          onSubmitEditing={() => this.props.search(this.state.searchTerm)}
          value={this.state.searchTerm}
          placeholder="Looking for something specific?"
          placeholderTextColor="#949ea0"
          returnKeyType="search"
        />
        <View style={styles.icon}>
          <SearchIcon />
        </View>
      </View>
    );
  }
}

SearchInput.propTypes = {
  search: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  background: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    maxWidth: 312,
    height: 48,
    backgroundColor: '#fff',
    borderRadius: 3,
  },
  input: {
    flex: 1,
    fontFamily: 'ubuntu-light',
    paddingTop: 16,
    paddingRight: 0,
    paddingBottom: 14,
    paddingLeft: 16,
  },
  icon: {
    height: '100%',
    justifyContent: 'center',
    paddingLeft: 5,
    paddingRight: 21,
  },
});
