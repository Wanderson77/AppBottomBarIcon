import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';


export default class Profile extends React.Component {
  //Profile Screen to show from Open profile button
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profile!</Text>
      </View>
    );
  }
}