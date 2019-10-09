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
/*const mapStateToProps = state => ({
  ...state
});*/
class Verify extends Component<Props> {
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
        <View style={styles.container}>
        <View style={styles.header}>
              <TouchableOpacity onPress={()=> this.props.navigation.goBack()}>
              <Image 
                  source={require('../../assets/images/back.png')}
                  resizeMode={'contain'}
                  style={{height: 14, width: 14}}
              /></TouchableOpacity>
          </View>
          <ScrollView>
          <View style={styles.signUpView}>
              <Text style={styles.signUpText}>Verify Phone Number</Text>
          </View>
          <View style={styles.checkView}>
              <Text style={styles.checkText}>Check your SMS messages, we’ve sent you
             the PIN at <Text style={styles.numberText}>08011233122 </Text></Text>
          </View>
          <View style={styles.pinView}>
              <View style={styles.pinBox}>
              <TextInput
              underlineColorAndroid={"transparent"}
              allowFontScaling={false}
              style={styles.pinTextInput}
              keyboardType={'numeric'}
            />
              </View>
              <View style={styles.pinBox}>
              <TextInput
              underlineColorAndroid={"transparent"}
              allowFontScaling={false}
              style={styles.pinTextInput}
              keyboardType={'numeric'}
            />
              </View>
              <View style={styles.pinBox}>
              <TextInput
              underlineColorAndroid={"transparent"}
              allowFontScaling={false}
              style={styles.pinTextInput}
              keyboardType={'numeric'}
            />
              </View>
              <View style={styles.pinBox}>
              <TextInput
              underlineColorAndroid={"transparent"}
              allowFontScaling={false}
              style={styles.pinTextInput}
              keyboardType={'numeric'}
            />
              </View>
          </View>
          <View style={styles.checkView}>
          <Text style={styles.checkText}>Didn’t receive SMS?{" "}
           <Text style={styles.resendText}>Resend pin </Text></Text></View>
          <TouchableOpacity onPress={()=> this.props.navigation.navigate('WelcomeSignUp')}>
          <LinearGradient colors={['#8DDC5E', '#316A0E']} style={styles.buttonSelected}>
              <Text style={styles.buttonSelectedText}>Verify</Text>
          </LinearGradient>
          </TouchableOpacity>
          </ScrollView>
        </View>
    );
  }
}
/*const Splash = connect(
  mapStateToProps,
)(reduxSplash);*/
export default Verify;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: '#fff'
      },
     bottomCity: {
         width: '100%',
         height: 82
     },
     buttonSelected: {
         borderRadius: 20,
         height: 37,
         width: 180,
         alignItems: 'center',
         alignSelf: 'center',
         justifyContent: 'center',
         marginTop: 23,
         marginBottom: 30
     },
     buttonSelectedText: {
         color: 'white',
         fontFamily: 'mont-bold',
         fontSize: 13
     },
     header: {
         width: '80%',
         height: 14,
         alignItems: 'center',
         marginTop: 30,
         flexDirection: 'row',
         alignSelf: 'center'
     },
     signUpView: {
         width: '80%',
         alignSelf: 'center',
         marginTop: 28,
     },
     signUpText: {
         color: '#000',
         fontFamily: 'mont-bold',
         fontSize: 31
     },
     checkView: {
         width: '80%',
         alignSelf: 'center',
         marginTop: 20,
     },
     checkText: {
         fontSize: 10,
         color: '#000',
         fontFamily: 'mont-semi'
     },
     numberText: {
         color: '#959292'
     },
     resendText: {
         color: '#518731'
     },
     pinView: {
         height: 46,
         width: '80%',
         alignSelf: 'center',
         marginTop: 30,
         alignItems: 'center',
         justifyContent: 'space-between',
         flexDirection: 'row'
     },
     pinBox: {
         width: '17.5%',
         height: 45,
         borderWidth: 1,
         borderRadius: 5,
         borderColor: '#AFA6A6'
     },
     pinTextInput: {
         width: '100%',
         height: 40,
         fontSize: 16,
         fontFamily: 'mont-bold',
         color: '#000',
         textAlign: 'center'
     }
});