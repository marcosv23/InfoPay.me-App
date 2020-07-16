/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default class ExtratoCliente extends Component {
  static navigationOptions =
  {
      drawerLabel: 'Extrato Cliente',
  }

  render() {
    return (
      <View style ={Styles.alignment}>
              <View >
                <Text style={Styles.titleText}>Extrato de Clientes</Text>
              </View>
             <Text style={Styles.lead}>Veja aqui seus extratos</Text>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  alignment:{
    alignItems:'center',
    justifyContent:'center',
  },

  titleText: {
    fontFamily: 'Fira Code',
    fontSize: 32,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight:'bold',
    color: '#e67300',
  },
    lead:{
      marginVertical:20,
      fontSize:20,
      fontStyle:'italic',
      color: '#ff884d',
    },
});
