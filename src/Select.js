import React from 'react';
import {SafeAreaView, Text, AsyncStorage} from "react-native";

export default class Select extends React.Component {

  static navigationOptions = {
    title: 'Select'
  };







  render () {
    const {text} = this.state;
    return (
      <SafeAreaView style={{flex: 1, alignItems: "center",}}>
        <Text>Select</Text>

      </SafeAreaView>
    )
  }
}
