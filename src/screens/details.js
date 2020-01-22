import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';



export default class Details extends React.Component {
  //Detail Screen to show from any Open detail button
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Details!</Text>
      </View>
    );
  }
}