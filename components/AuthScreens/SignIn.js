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
class SignIn extends Component<Props> {
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
              <TouchableOpacity onPress={()=> this.props.navigation.navigate('SignIn')}>
              <Text style={styles.headerSignIn}>Sign Up</Text></TouchableOpacity>
          </View>
          <ScrollView>
          <View style={styles.signUpView}>
              <Text style={styles.signUpText}>Sign In</Text>
          </View>
          <View style={styles.textFieldView}>
          <TextInput
              underlineColorAndroid={"transparent"}
              allowFontScaling={false}
              placeholder="EMAIL"
           //   value={this.state.email}
            //  onChangeText={interests => this.setState({ email })}
              placeholderStyle={{ fontSize: 10, fontFamily: "mont-semi" }}
              placeholderTextColor="#B9B2B2"
              style={styles.nametextFieldInput}
            />
          </View>
          <View style={styles.passwordView}>
            <TextInput
              underlineColorAndroid={"transparent"}
              allowFontScaling={false}
              secureTextEntry={this.state.eye_of_tiger}
              placeholder="PASSWORD"
       //       value={this.state.password}
       //       onChangeText={password => this.setState({ password })}
             placeholderStyle={{ fontSize: 10, fontFamily: "mont-semi" }}
              placeholderTextColor="#B9B2B2"
              style={styles.passwordTextFieldInput}
            />
            <TouchableOpacity
              onPress={() =>
                this.setState({ eye_of_tiger: !this.state.eye_of_tiger })
              }
            >
              <View style={styles.eyeView}>
                <Image
                  source={require("../../assets/images/eye.png")}
                  resizeMode="contain"
                  style={styles.eyeImage}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.forgetTextView}>
          <TouchableOpacity>
          <Text style={styles.forgetText}>Forgot Password?</Text>
          </TouchableOpacity>
          </View>
          <Text style={styles.connectText}>Or connect with</Text>
          <View style={styles.iconView}>
          <TouchableOpacity>
          <Image
            source={require("../../assets/images/facebook.png")}
            resizeMode="contain"
            style={styles.iconImage}
          /></TouchableOpacity>
          <TouchableOpacity>
          <Image
            source={require("../../assets/images/gmail.png")}
            resizeMode="contain"
            style={styles.iconImage}
          /></TouchableOpacity>
          </View>
          <TouchableOpacity onPress={()=> this.props.navigation.navigate('WelcomeSignIn')}>
          <LinearGradient colors={['#8DDC5E', '#316A0E']} style={styles.buttonSelected}>
              <Text style={styles.buttonSelectedText}>Sign In</Text>
          </LinearGradient>
          </TouchableOpacity>
          </ScrollView>
           <Image
            source={require("../../assets/images/welcomeBottom.png")}
            resizeMode="cover"
            style={styles.bottomCity}
          />
        </View>
    );
  }
}
/*const Splash = connect(
  mapStateToProps,
)(reduxSplash);*/
export default SignIn;
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
         justifyContent: 'space-between',
         marginTop: 30,
         flexDirection: 'row',
         alignSelf: 'center'
     },
     headerSignIn: {
         color: '#44811F',
         fontFamily: 'mont-semi',
         fontSize: 10
     },
     signUpView: {
         width: '80%',
         alignSelf: 'center',
         marginTop: 28,
         marginBottom: 46
     },
     signUpText: {
         color: '#000',
         fontFamily: 'mont-bold',
         fontSize: 31
     },
     nametextFieldInput: {
        width: '100%',
        height: 31,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#000',
        fontSize: 9,
         fontFamily: "mont-semi",
         paddingLeft: 15
     },
     textFieldView: {
        width: '80%',
        height: 36,
        borderRadius: 6,
        borderColor: '#B1ADAD',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 23,
        alignSelf: 'center'
    },
    passwordView: {
        width: '80%',
        height: 36,
        borderRadius: 6,
        borderColor: '#B1ADAD',
        borderWidth: 1,
        alignSelf: "center",
        justifyContent: "space-between",
        flexDirection: "row",
      },
      passwordTextFieldInput: {
        height: 31,
        width: "80%",
        backgroundColor: "#ffffff",
        color: '#000',
        fontSize: 9,
        fontFamily: "mont-semi",
        paddingLeft: 15,
        alignItems: 'center',
        justifyContent: 'center'
      },
      eyeView: {
        width: "20%",
        alignItems: "center",
        justifyContent: "center",
        height: 34
      },
      eyeImage: {
        width: 12,
        height: 7,
        alignSelf: "center"
      },
      forgetTextView: {
          width: '80%',
          alignSelf: 'center',
          marginTop: 15
      },
      forgetText: {
          fontSize: 9,
          fontFamily: 'mont-semi',
          color: '#589A30'
      },
      iconView: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: 65,
          height: 24,
          marginTop: 18,
          alignSelf: 'center'
      },
      iconImage: {
          width: 23,
          height: 23
      },
      connectText: {
          alignSelf: 'center',
          fontSize: 8,
          color: '#000',
          fontFamily: 'mont-semi',
          marginTop: 40
      }
});
