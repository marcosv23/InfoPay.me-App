import React, {Component, createRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  ToastAndroid,
} from 'react-native';

const backgroundImage = {
  uri:
    'https://st2.depositphotos.com/1002049/7485/i/450/depositphotos_74850195-stock-photo-dollar-money-icon.jpg',
};

import API from './../services/api';
import sharedState from './../sharedStates/sharedState';
//
export default class Login extends Component {
  constructor() {
    super();
    this.userInput = createRef();
    this.passwordInput = createRef();

    this.credentials = {
      cdOperador: '',
      senha: '',
    };
  }

  render() {
    return (
      <View style={Styles.pageContainer}>
        <ImageBackground
          source={backgroundImage}
          style={Styles.backgroundImage}>
          <View style={Styles.imageContainer}>
            <Text>Your logo Here</Text>
          </View>

          <View style={Styles.inputsContainer}>
            <View style={Styles.credentialsContainer}>
              <TextInput
                ref={ref => (this.userInput = ref)}
                style={Styles.textInput}
                placeholder="Usuário"
                placeholderTextColor="#994d00"
                onChangeText={text => (this.credentials.cdOperador = text)}
                onSubmitEditing={() => this.passwordInput.focus()}
                returnKeyType={'next'}
              />

              <TextInput
                ref={ref => (this.passwordInput = ref)}
                style={Styles.textInput}
                placeholder="Senha"
                placeholderTextColor="#994d00"
                onChangeText={text => (this.credentials.senha = text)}
                onSubmitEditing={() => this.handleLoginPress()}
                secureTextEntry={true}
              />

              <View style={Styles.submitContainer}>
                <TouchableOpacity
                  style={Styles.button}
                  onPress={() => this.handleLoginPress()}>
                  <Text style={Styles.buttonText}>Login!</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }

  handleLoginPress = async () => {
    let message = '';
    try {
      API.getApiAddress();
      sharedState.currentUser.userId = this.credentials.cdOperador;
      const result = await API.post('/Usuario/UsuarioLogin', this.credentials);
      message = result.Message;
      console.log(message);
      console.log(result);
      if (result.code == 200) {
        sharedState.currentUser.userId = this.credentials.cdOperador;
        console.log('pronto, você deve ser logado, aguarde');
        this.props.navigation.navigate('Home');
      }
    } catch (e) {
      console.log(e);
      message = 'Ocorreu um erro: ' + e;
    } finally {
      ToastAndroid.showWithGravity(
        message,
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
      );
    }
  };
}

const Styles = StyleSheet.create({
  pageContainer: {
    flex: 1.2,
    backgroundColor: '#e67300',
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputsContainer: {
    flex: 1.3,
    padding: 15,
    width: '85%',
  },
  credentialsContainer: {
    padding: 10,
    borderRadius: 10,
    width: '100%',
    backgroundColor: 'rgba(255,255,255,.8)',
  },
  imageContainer: {
    flex: 1,
    width: '100%',
  },
  button: {
    backgroundColor: '#e67300',
    marginVertical: 20,
    padding: 10,
    alignItems: 'center',
    borderRadius: 15,
    borderColor: '#ff9933', //'rgb(141, 66, 166)',
    borderWidth: 2,
  },
  textInput: {
    marginVertical: 5,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 20,
    borderBottomColor: '#e67300',
    borderBottomWidth: 4,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Fira Code',
    color: 'white',
  },
});
