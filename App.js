import React from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import HomeScreen from './app/components/HomeScreen/HomeScreen';
import Tab2Screen from './app/components/Tab2Screen/Tab2Screen';
import Tab3Screen from './app/components/Tab3Screen/Tab3Screen';
import Tab4Screen from './app/components/Tab4Screen/Tab4Screen';

export default class App extends React.Component {
  render() {
    return (
      <AppNavigator />
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
  headerStyle: {
    backgroundColor: '#fff',
    borderBottomWidth: 0,
  },
};

const AppNavigator = createStackNavigator({
  Tabs: TabNavigator,
});
