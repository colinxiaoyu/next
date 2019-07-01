import React from "react";
import {Text, View, AsyncStorage, SafeAreaView} from "react-native";



export default class Main extends React.Component {

  static navigationOptions = {
    title: 'Main'
  };




  render () {

    return (
      <SafeAreaView style={{flex: 1, alignItems: "center",}}>
        <Text>Main</Text>
      </SafeAreaView>
    );
  }
}
