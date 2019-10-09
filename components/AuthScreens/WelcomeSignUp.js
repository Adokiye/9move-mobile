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
  ScrollView,
  TextInput
} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import HideWithKeyboard from "react-native-hide-with-keyboard";
//import LoaderModal from './Modals/LoaderModal';
//var SharedPreferences = require("react-native-shared-preferences");
type Props = {};
//import { connect } from "react-redux";
class WelcomeSignUp extends Component<Props> {
    static navigationOptions = {
      header: null,
      drawerLockMode: "locked-closed"
    };
    constructor(props) {
      super(props);
      this.state = {
       regLoader: false,
       eye_of_tiger: true
      };
    }
    componentDidMount(){
    }
    render() {
      return (
          <LinearGradient colors={['#73BB47', '#407C1B']} style={styles.container}>
            <Image
              source={require("../../assets/images/check.png")}
              resizeMode="contain"
              style={styles.check}
            />
            <Text style={styles.welcomeText}>You are set!</Text>
            <View style={styles.loremView}>
                <Text style={styles.loremText}>Lorem ipsum dolor sit amet, consectetur adipisc
               ing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
            </View>
            <TouchableOpacity onPress={()=> this.props.navigation.navigate('Map')}>
            <View style={styles.continueView}>
              <Text style={styles.continueText}>Continue</Text>
            </View></TouchableOpacity>
            <View style={styles.bottomCity}>
             <Image
              source={require("../../assets/images/bottomCity.png")}
              resizeMode="cover"
              style={styles.bottomCityImage}
            /></View>
          </LinearGradient>
      );
    }
  }
  /*const Splash = connect(
    mapStateToProps,
  )(reduxSplash);*/
  export default WelcomeSignUp;
  const styles = StyleSheet.create({
      container: {
          flex: 1,
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: '#fff'
        },
        bottomCity: {
            bottom: 0,
            position: 'absolute',
            width: '100%',
            height: 168
        },
        bottomCityImage: {
           width: '100%',
           height: 168
       }, 
       check: {
           width: 170,
           height: 170,
           marginTop: '20.1%'
       },
       welcomeText: {
           color: 'white',
           marginTop: 20,
           alignSelf: 'center',
           fontSize: 22,
           fontFamily: 'mont-bold'
       },
       loremView: {
           width: '81.9%',
           alignSelf: 'center',
           marginTop: 20
       },
       loremText: {
           textAlign: 'center',
           color: 'white',
           fontSize: 8,
           fontFamily: 'mont-reg',
           alignSelf: 'center'
       },
       continueView: {
           backgroundColor: 'white',
           borderRadius: 20,
           alignItems: 'center',
           justifyContent: 'center',
           width: 180,
           height: 37,
           marginTop: 38
       },
       continueText: {
           color: '#4B8924',
           fontSize: 13,
           fontFamily: 'mont-semi'
       }
  });