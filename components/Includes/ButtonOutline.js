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
} from "react-native";
export default class ButtonOutline extends Component {
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
backgroundColor: '#fff',
justifyContent: 'center',
borderWidth: 1,
borderColor: '#1bc47d',
borderRadius: 10
},
buttonText: {
fontFamily: 'mont-bold',
fontSize: 14,
color: '#1bc47d'    
}
});
