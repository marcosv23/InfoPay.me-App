import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {CreateStackNavigator} from 'react-navigation-stack';
import Login from '../../screens/Login';
class Logoff extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Login />;
  }
}

export default Logoff;
