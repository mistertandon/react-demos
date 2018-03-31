import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator, TabNavigator, DrawerNavigator, TabBarTop } from 'react-navigation'

function Home() {

  return (
    <View style={{ flex: 1 }}>
      <Text>Home</Text>
    </View>
  )
}

function Dashboard() {

  return (
    <View style={{ flex: 1 }}>
      <Text>Dashboard</Text>
    </View>
  )
}

const Tabs = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: () => (<MaterialCommunityIcons name='home-circle' size={30} />)
  },
  Dashboard: {
    screen: Dashboard,
    navigationOptions: () => (<MaterialCommunityIcons name='view-dashboard' size={30} />)
  }
}, {
    tabBarComponent: TabBarTop
  })

export default class App extends React.Component {

  render() {

    return (
      <View style={{ flex: 1 }}>
        <Tabs />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
