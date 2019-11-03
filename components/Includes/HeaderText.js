/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  Image,
  Dimensions,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  StatusBar,
  TouchableWithoutFeedback,
  PermissionsAndroid,
  Animated
} from "react-native";
export default class HeaderText extends Component {
  static navigationOptions = {
    header: null,
    drawerLockMode: "locked-closed"
  };
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount() {
  }
  render() {
    return (
                 <Text style={styles.text}>{this.props.text}</Text>
    );
  }
}
const styles = StyleSheet.create({
text: {
fontFamily: 'mont-bold',
fontSize: 25,
color: '#000'    
}
});
