import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignInScreen from './Screens/SignInScreen'
import SignUpScreen from './Screens/SignUpScreen'
import HomeScreen from './Screens/HomeScreen';
import CommentScreen from './Screens/CommentScreen';
import {createAppContainer,createSwitchNavigator} from 'react-navigation'

export default class App extends React.Component {
  render(){
  return (
    <View style={styles.container}>
       <AppContainer/>
    </View>
  );
}
}
const AppNavigator = createSwitchNavigator({
  SignInScreen:SignInScreen,
  SignUpScreen:SignUpScreen,
  HomeScreen:HomeScreen,
  CommentScreen:CommentScreen,
})
const AppContainer=createAppContainer(AppNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
