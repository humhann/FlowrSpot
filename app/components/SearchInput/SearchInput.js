import React from 'react';
import {
  StyleSheet,
  TextInput,
} from 'react-native';

export default class SearchInput extends React.PureComponent {
  state = {
    searchTerm: '',
  };

  render() {
    return (
      <TextInput
        style={styles.input}
        onChangeText={searchTerm => this.setState({ searchTerm })}
        value={this.state.searchTerm}
        placeholder="Looking for something specific?"
        placeholderTextColor="#949ea0"
        returnKeyType="search"
      />
    );
  }
}

const styles = StyleSheet.create({
  input: {
    width: '100%',
    maxWidth: 312,
    height: 48,
    backgroundColor: '#fff',
    paddingLeft: 20,
    paddingRight: 50,
    paddingVertical: 16,
    fontFamily: 'ubuntu-light',
    borderRadius: 3,
  },
});
