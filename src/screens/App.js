/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, {Component} from 'react';
import AppContainer from '../services/routes/routes';
import Menu from './../components/AppMenu';

export default class App extends Component {
  render() {
    return <Menu />;
  }
}
