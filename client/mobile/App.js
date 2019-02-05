import React from 'react'
import {createAppContainer, createStackNavigator} from 'react-navigation';
import HomeScreen from './Screens/HomeScreen';

const RootStack = createStackNavigator({
  Home: HomeScreen
});

const App = createAppContainer(RootStack);

export default App;