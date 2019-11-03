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
export default class Button extends Component {

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
         <TouchableOpacity onPress={this.props.action}
         activeOpacity={0.7}>
             <View style={[styles.container, {...this.props.style}]}>
                 <Text style={styles.buttonText}>{this.props.text}</Text>
             </View>
         </TouchableOpacity>
    );
  }
}
const dimensions = Dimensions.get("window");
const Width = dimensions.width;
const styles = StyleSheet.create({
container: {
width: Width*(85/100),
height: 40,
alignSelf: 'center',
alignItems: 'center',
backgroundColor: '#1bc47d',
justifyContent: 'center',
borderRadius: 10
},
buttonText: {
fontFamily: 'mont-bold',
fontSize: 14,
color: '#fff'    
}
});
