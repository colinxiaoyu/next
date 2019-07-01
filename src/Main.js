import React from "react";
import {Text, View, AsyncStorage, SafeAreaView} from "react-native";
import TextAdd from "./TextAdd";
import ColorButton from "./ColorButton";



export default class Main extends React.Component {

  static navigationOptions = {
    title: 'Main'
  };

  state = {
    username: 'Colin',
    password: '123',
  }

  _next = () => {
    this.props.navigation.navigate('Select')
  }


  render () {

    return (
      <SafeAreaView style={{flex: 1, alignItems: "center",}}>
        <TextAdd
          title={'username'} placeholder={'please tap in username'}
          onChangeText={(text) => {
            this.setState({username: text});
          }}
        />
        <TextAdd
          title={'password'} placeholder={'please tap in password'}
          onChangeText={(text) => {
            this.setState({password: text});
          }}
        />

        <ColorButton
          text={' Create Account '}
          onPress={() => {}}/>

        <ColorButton
          text={' NextPage '}
          onPress={() => this._next()}/>
      </SafeAreaView>
    );
  }
}
