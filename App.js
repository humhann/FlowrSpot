import React from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';
import { Font } from 'expo';

import HomeScreen from './app/components/HomeScreen/HomeScreen';
import Tab2Screen from './app/components/Tab2Screen/Tab2Screen';
import Tab3Screen from './app/components/Tab3Screen/Tab3Screen';
import Tab4Screen from './app/components/Tab4Screen/Tab4Screen';

import HeaderTitle from './app/components/HeaderTitle/HeaderTitle';

export default class App extends React.Component {
  state = {
    fontsLoaded: false,
  };

  async componentDidMount() {
    /* eslint-disable global-require */
    await Font.loadAsync({
      'ubuntu-bold': require('./app/assets/fonts/Ubuntu-Bold.ttf'),
      'ubuntu-bold-italic': require('./app/assets/fonts/Ubuntu-BoldItalic.ttf'),
      'ubuntu-italic': require('./app/assets/fonts/Ubuntu-Italic.ttf'),
      'ubuntu-light': require('./app/assets/fonts/Ubuntu-Light.ttf'),
      'ubuntu-light-italic': require('./app/assets/fonts/Ubuntu-LightItalic.ttf'),
      'ubuntu-medium': require('./app/assets/fonts/Ubuntu-Medium.ttf'),
      'ubuntu-medium-italic': require('./app/assets/fonts/Ubuntu-MediumItalic.ttf'),
      'ubuntu-regular': require('./app/assets/fonts/Ubuntu-Regular.ttf'),
    });
    /* eslint-enable global-require */

    this.setState({ fontsLoaded: true });
  }

  render() {
    return (
      this.state.fontsLoaded && <AppNavigator />
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Tab2: Tab2Screen,
  Tab3: Tab3Screen,
  Tab4: Tab4Screen,
}, {
  tabBarOptions: {
    tabStyle: {
      backgroundColor: '#fff',
      /* Workaround to hide border */
      borderTopWidth: 1,
      borderTopColor: '#fff',
      marginTop: -1,
    },
    showLabel: false,
    activeTintColor: '#EAA79E',
    inactiveTintColor: '#EAA79E',
  },
});

TabNavigator.navigationOptions = {
  headerTitle: <HeaderTitle />,
  headerStyle: {
    backgroundColor: '#fff',
    borderBottomWidth: 0,
  },
};

const AppNavigator = createStackNavigator({
  Tabs: TabNavigator,
});
