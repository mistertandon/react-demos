import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { StackNavigator } from 'react-navigation'
import { MaterialCommunityIcons } from '@expo/vector-icons'

function Home({ navigation }) {

  return (
    <View style={[styles.container, { jusdtifyContent: 'center', alignItems: 'center' }]}>
      <Text>Home</Text>
      <TouchableOpacity style={{ flex: 0.3, backgroundColor: '#FF0000', height:30 }}
        onPress={() => { navigation.navigate('Dashboard') }}
      >
        <Text>To Dashboard</Text>
      </TouchableOpacity>
    </View>
  )
}

function Dashboard() {

  return (
    <View style={[styles.container]}>
      <Text>Dashboard</Text>
    </View>
  )
}

const Stack = StackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: 'Home'
      }
    },
    Dashboard: {
      screen: Dashboard,
      navigationOptions: {
        title: 'Dashboard',
        headerTintColor: 'red',
        headerStyle: {
          backgroundColor: 'green'
        }
      }
    }
  }
)

export default class App extends React.Component {

  render() {

    return (
      <View style={styles.container}>
        <Stack />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
