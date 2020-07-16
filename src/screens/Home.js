/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  FlatList,
  SafeAreaView,
  Dimensions,
} from 'react-native';

import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import Icon3 from 'react-native-vector-icons/FontAwesome5';

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

class ItemHolder extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <View style={Styles.customersList}>
        <Text style={Styles.customersDataStyle}>{this.props.item.id}</Text>
        <Text style={Styles.customersDataStyle}>{this.props.item.nome}</Text>
        <Text style={Styles.customersDataStyle}>{this.props.item.saldo}</Text>
        <Icon style={{width: '10%'}} name="check" size={30} color={'#004d00'} />
      </View>
    );
  }
}

class LabelCustomer extends Component {
  render() {
    return (
      <View style={Styles.customersLabel}>
        <Text style={Styles.customerLabelItem}>Cliente</Text>
        <Text style={Styles.customerLabelItem}>Saldo</Text>
        <Text style={Styles.customerLabelItem}>Recebido</Text>
      </View>
    );
  }
}

export default class Home extends Component {
  render() {
    function refreshPage() {
      return window.location.reload;
    }
    const getCurrentDate = () => {
      var date = new Date().getDate();
      var month = new Date().getMonth() + 1;
      var year = new Date().getFullYear();
      return date + '/' + month + '/' + year;
    };
    return (
      <View style={Styles.pageContainer}>
        <StatusBar backgroundColor="black" barStyle="light-content" />

        {/** header */}
        <View style={Styles.header}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={Styles.btnHamburguer}
              onPress={() => this.props.navigation.openDrawer()}>
              <Icon name="menu" size={35} color="white" />
            </TouchableOpacity>

            <View
              style={{flexDirection: 'row', left: 110, alignItems: 'center'}}>
              <Text
                style={{
                  flexDirection: 'row',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: 20,
                }}>
                {getCurrentDate()}
              </Text>
            </View>
          </View>
        </View>
        {/** end header */}

        {/** saldoContainer */}
        <View style={Styles.saldoContainer}>
          <Text style={Styles.subtitle}>
            Saldo Anterior: &nbsp;&nbsp;&nbsp;&nbsp;R$ 100,00
          </Text>

          <View>
            <Text style={Styles.saldoValue}>
              Total a Receber:&nbsp;&nbsp;&nbsp;R$ 430,00
            </Text>
          </View>
        </View>

        {/**  end saldoContainer */}

        <View style={Styles.listContainer}>
          <LabelCustomer />
          <FlatList
            data={test}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <>
                <ItemHolder item={item} />
              </>
            )}
          />
        </View>

        {/*footer*/}
        <View style={Styles.footer}>
          <View>
            <TouchableHighlight>
              <View
                style={{
                  flex: 1,
                }}>
                <Icon3
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                  }}
                  name="sync"
                  size={30}
                  color="white"
                />
                <Icon
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                  }}
                  name="back"
                  size={30}
                  color={'white'}
                />
              </View>
            </TouchableHighlight>
          </View>
        </View>
        {/*footer*/}
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  textHome: {
    fontSize: 32,
    fontFamily: 'FiraCode',
    paddingBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },

  saldoContainer: {
    top: 10,
    backgroundColor: '#006600',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'red',
    borderRadius: 15,
    padding: 0,
    marginHorizontal: 10,
    flex: 0.15,
    width: '95%',
  },

  button: {
    borderColor: '#e67300',
    backgroundColor: '#e67300',
    padding: 10,
    borderRadius: 10,
    marginVertical: 40,
  },
  buttonText: {
    color: '#ffffff',
    fontFamily: 'Fira Code',
    fontSize: 20,
  },
  customersList: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    marginBottom: 0,
    margin: 10,
    paddingHorizontal: 15,
    width: '100%',
  },
  listContainer: {
    top: 20,
    width: '90%',
    height: '100%',
    flex: 1,
    borderColor: 'red',
  },

  customersLabel: {
    flexDirection: 'row',
    top: 0,
    left: 22,
    color: 'black',
    alignContent: 'center',
    alignItems: 'center',
    fontFamily: 'Fira Code',
    fontWeight: 'bold',
    backgroundColor: '#cccccc',
    borderRadius: 5,
    fontSize: 40,
    fontStyle: 'italic',
    width: '90%',
    height: '10%',
  },

  saldoValueTitle: {
    color: 'white',
    fontFamily: 'Fira Code',
    paddingTop: 15,
    fontSize: 25,
    textDecorationStyle: 'solid',
    fontStyle: 'italic',
  },

  customersDataStyle: {
    color: 'black',
    flexDirection: 'row',
    fontFamily: 'Fira Code',
    fontSize: 20,
    paddingHorizontal: 5,

    width: '28%',
  },

  btnHamburguer: {
    alignItems: 'flex-start',
    flexDirection: 'row',
  },

  saldoValue: {
    flexDirection: 'column',
    flex: 0.6,
    color: 'white',
    fontFamily: 'Fira Code',
    paddingTop: 5,
    fontSize: 22,
    textDecorationStyle: 'solid',
    fontStyle: 'italic',
  },
  value: {
    color: 'white',
    fontFamily: 'Fira Code',
    paddingTop: 20,
    fontSize: 25,
    textDecorationStyle: 'solid',
    fontStyle: 'italic',
  },

  header: {
    top: 0,
    alignItems: 'center',
    backgroundColor: 'black',
    height: Dimensions.get('window').height * 0.08,
    flexDirection: 'row',
    width: '100%',
    borderWidth: 2,
  },

  footer: {
    top: 0,
    backgroundColor: 'black',
    height: Dimensions.get('window').height * 0.1,
    flexDirection: 'row',
    borderColor: 'black',
    width: '100%',
    justifyContent: 'center',
    borderWidth: 2,
  },
  customerLabelItem: {
    flexDirection: 'row',
    fontSize: 20,
    flex: 1,
  },
});
