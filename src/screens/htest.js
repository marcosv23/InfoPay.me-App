import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from 'react-native';

import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/FontAwesome';

const test = [
  {id: '01001', nome: 'Natanael', saldo: 255.77},
  {id: '01002', nome: 'Peterete', saldo: 2336.88},
  {id: '01003', nome: 'Marlon', saldo: 700},
  {id: '01004', nome: 'Peterete', saldo: 2336.88},
  {id: '01005', nome: 'Peterete', saldo: 2336.88},
  {id: '01006', nome: 'Marlon', saldo: 700},
  {id: '01007', nome: 'Peterete', saldo: 2336.88},
  {id: '01008', nome: 'Marlon', saldo: 700},
  {id: '01009', nome: 'Peterete', saldo: 2336.88},
  {id: '010010', nome: 'Marlon', saldo: 700},
  {id: '010011', nome: 'Peterete', saldo: 2336.88},
  {id: '010012', nome: 'Marlon', saldo: 700},
  {id: '010013', nome: 'Peterete', saldo: 2336.88},
  {id: '010014', nome: 'Marlon', saldo: 700},
  {id: '010015', nome: 'Peterete', saldo: 2336.88},
  {id: '010016', nome: 'Marlon', saldo: 700},
  {id: '010017', nome: 'Peterete', saldo: 2336.88},
  {id: '010018', nome: 'Marlon', saldo: 700},
  {id: '010019', nome: 'Peterete', saldo: 2336.88},
];

export default class Home extends Component {
  render() {
    return (
      <SafeAreaView>
        <View>
          {/*{footer}*/}
          <View>
            <View />
          </View>
          {/** end footer */}
        </View>
      </SafeAreaView>
    );
  }
}
