import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Home from './../screens/Home';
import Login from './../screens/Login';
import AcertoCliente from './../screens/AcertoCliente';
import Logoff from './../components/menuScreens/Logoff';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import AtualizarSaldoClientes from './menuScreens/AtualizarSaldoClientes';
import EnviarRecebimentosPendentes from './menuScreens/EnviarRecebimentosPendentes';
import ExtratoCaixa from './menuScreens/ExtratoCaixa';
import ExtratoCliente from './menuScreens/ExtratoCliente';
import FecharCaixa from './menuScreens/FecharCaixa';
import MudarCodigoCaixa from './menuScreens/MudarCodigoCaixa';

const menuDrawer = createDrawerNavigator(
  {
    Login: Login,
    Home: Home,
    AtualizarSaldoClientes: AtualizarSaldoClientes,
    EnviarRecebimentosPendentes: EnviarRecebimentosPendentes,
    ExtratoCaixa: ExtratoCaixa,
    ExtratoCliente: ExtratoCliente,
    FecharCaixa: FecharCaixa,
    MudarCodigoCaixa: MudarCodigoCaixa,
    Sair: Logoff,
  },

  {
    headerMode: 'none',
  },
);
export default (Menu = createAppContainer(menuDrawer));
