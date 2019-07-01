import React from 'react';
import {SafeAreaView, Text, AsyncStorage} from "react-native";
import TextAdd from "./TextAdd";
import ColorButton from "./ColorButton";
import Crypto from './Crypto';


export default class Select extends React.Component {

  static navigationOptions = {
    title: 'Select'
  };

  state = {
    text: '',
    username: '',
  }

  _handlePress = () => {
    const {username, password} = this.state;
    AsyncStorage.getItem(username).then((result) => {
      const data = JSON.parse(result);
      console.log('getItem data', data);
      if (data.password === password) {
        console.log('getItem password', password);
        const text = Crypto.decrypt(password, data.privateKey);
        this.setState({
          text: text,
        })
      } else {
        this.setState({
          text: 'username or password is error',
        })
      }
    }).catch(()=>{
      this.setState({
        text: 'username or password is error',
      })
    })
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
          onPress={() => {this._handlePress()}}/>

        <Text>{text}</Text>

      </SafeAreaView>
    )
  }
}
