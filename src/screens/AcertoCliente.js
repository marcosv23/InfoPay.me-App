import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';

class AcertoCliente extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView>
        {/**header */}
        <View>
          <Text>AcertoCliente</Text>
        </View>
        {/** ending header */}

        {/**body */}
        <View>
          <View />
        </View>
        {/** ending body */}

        {/** ending footer */}
        <View>
          <View />
        </View>
        {/** ending footer */}
      </SafeAreaView>
    );
  }
}

export default AcertoCliente;
