/* eslint-disable react/react-in-jsx-scope */
import {createStackNavigator} from 'react-navigation-stack';
import {NavigationContainer} from '@react-navigation/native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Login from './../../screens/Login';
import Home from './../../screens/Home';
import ExtratoCliente from './../../screens/ExtratoCliente';
const MainStack = createStackNavigator({
  Home: Home,
});

const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      Login: Login,
      MainStack: MainStack,
      ExtratoCliente: ExtratoCliente,
    },
    {
      initialRouteName: 'Login',
    },
  ),
);

export default AppContainer;
