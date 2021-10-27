import * as React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import AppHeader from './components/AppHeader';
import HomeScreen from './screens/HomeScreen';
import JokeScreen from './screens/JokeScreen';
import Horoscope from './screens/Horoscope';
import Wheather from './screens/Weather';
import News from './screens/NewsScreen';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppHeader />
        <Container />
      </View>
    );
  }
}

let navigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  JokeScreen: JokeScreen,
  Horoscope: Horoscope,
  Weather: Wheather,
  NewsScreen: News,
});

const Container = createAppContainer(navigator);
