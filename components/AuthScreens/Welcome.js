import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  StatusBar,
  View,
  TouchableOpacity,
  BackHandler,
  ScrollView
} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import Button from '../Includes/Button'
import ButtonOutline from '../Includes/ButtonOutline'
//import LoaderModal from './Modals/LoaderModal';
//var SharedPreferences = require("react-native-shared-preferences");
type Props = {};
//import { connect } from "react-redux";
/*const mapStateToProps = state => ({
  ...state
});*/
class Welcome extends Component<Props> {
  static navigationOptions = {
    header: null,
    drawerLockMode: "locked-closed"
  };
  constructor(props) {
    super(props);
    this.state = {
     regLoader: false,
     signIn: false,
     signUp: false
    };
  }
  componentDidMount(){
  }
  signIn(){
    this.props.navigation.navigate('SignIn')
  }
  signUp(){
    this.props.navigation.navigate('SignUp')
  }
  render() {
    return (
        <View style={styles.container}>
        <View style={styles.nine_moveView}>
        <Image
            source={require("../../assets/images/ninemove.png")}
            resizeMode="contain"
            style={{width: 167, height: 46}}
          />
          <Text style={styles.easeText}>Ride with Ease</Text>
        </View>
          <Image
            source={require("../../assets/images/illustration.png")}
            resizeMode="contain"
            style={styles.logo}
          />
          <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this.signIn.bind(this)}
          activeOpacity={0.7}>
            <View style={styles.button}>
            <Text style={styles.buttonText}>Sign In</Text>
            </View>
            </TouchableOpacity>
           <TouchableOpacity onPress={this.signUp.bind(this)}
           activeOpacity={0.7}>
            <View style={styles.buttonOutline}>
            <Text style={styles.buttonOutlineText}>
            Sign Up
            </Text>
            </View>
            </TouchableOpacity></View>
        </View>
    );
  }
}
/*const Splash = connect(
  mapStateToProps,
)(reduxSplash);*/
const dimensions = Dimensions.get("window");
const Width = dimensions.width;
const Height = dimensions.height;
export default Welcome;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: '#fff',
        justifyContent: 'space-around'
      },
     logo: {
         width: Width*(97/100),
         height: Height*(32.8/100),
         alignSelf: 'center',
 //        marginTop:'50%'
     },
     nine_moveView: {
        flexDirection: 'column',
        alignItems: 'center'
     },
     easeText: {
         fontFamily: 'mont-semi',
         fontSize: 12,
         color: '#000'
     },
     button: {
      width: 219,
      height: 45,
      alignSelf: 'center',
      alignItems: 'center',
      backgroundColor: '#1bc47d',
      justifyContent: 'center',
      borderRadius: 20,
      marginBottom: 10
      },
      buttonText: {
      fontFamily: 'mont-bold',
      fontSize: 14,
      color: '#fff'    
      },
      buttonOutline: {
        width: 219,
        height: 45,
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        justifyContent: 'center',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#1bc47d',
        marginBottom: 50
        },
        buttonOutlineText: {
        fontFamily: 'mont-bold',
        fontSize: 14,
        color: '#1bc47d'    
        },
        buttonContainer: {
          height: 102,
          flexDirection: 'column',
          justifyContent: 'space-between'
        }
});
