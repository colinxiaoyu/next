import React from 'react';
import {SafeAreaView, Text, AsyncStorage} from "react-native";
import TextAdd from "./TextAdd";
import ColorButton from "./ColorButton";

export default class Select extends React.Component {

  static navigationOptions = {
    title: 'Select'
  };

  state = {
    text: '',
    username: '',
    password: '',
  }


  render () {
    const {text} = this.state;
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
          text={' Get privateKey '}
          onPress={() => {}}/>

        <Text>{text}</Text>

      </SafeAreaView>
    )
  }
}
