import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
} from 'react-native';

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
          value={this.state.searchTerm}
          placeholder="Looking for something specific?"
          placeholderTextColor="#949ea0"
          returnKeyType="search"
        />
        <SearchIcon />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    maxWidth: 312,
    height: 48,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 3,
  },
  input: {
    flex: 1,
    fontFamily: 'ubuntu-light',
  },
});
