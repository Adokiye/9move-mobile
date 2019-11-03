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
import Button from '../Includes/Button'
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
     eye_of_tiger: true,
     sign_focus: false,
     password_focus: false,
     passenger: true,
     driver: false
    };
  }
  componentDidMount(){
  }
  render() {
    return (
        <View style={styles.container}>
        <View style={styles.header}>
        <View style={styles.headerSmall}>
              <TouchableOpacity onPress={()=> this.props.navigation.goBack()}>
              <Image 
                  source={require('../../assets/images/back.png')}
                  resizeMode={'contain'}
                  style={{height: 20, width: 20}}
              /></TouchableOpacity>
              <TouchableOpacity onPress={()=> this.props.navigation.navigate('SignUp')}>
              <Text style={styles.headerSignIn}>Sign Up</Text>
              </TouchableOpacity>
              </View></View>
          <ScrollView>
          <View style={styles.signUpView}>
              <Text style={styles.signUpText}>Sign In</Text>
          </View>
          <View style={!this.state.sign_focus?styles.textFieldView: styles.focusedTextFieldView}>
          <TextInput
              underlineColorAndroid={"transparent"}
              returnKeyType={'next'}
              autoFocus={true}
              allowFontScaling={false}
              blurOnSubmit={false}
              onSubmitEditing={()=> {this.passwordTextInput.focus();}}
              placeholder="Email"
              onFocus={()=> this.setState({sign_focus: true})}
              onBlur={()=> this.setState({sign_focus: false})}
           //   value={this.state.email}
            //  onChangeText={interests => this.setState({ email })}
              placeholderStyle={{ fontSize: 10, fontFamily: "mont-semi" }}
              placeholderTextColor="#B9B2B2"
              style={styles.nametextFieldInput}
            />
          </View>
          <View style={!this.state.password_focus?styles.passwordView: styles.focusedPasswordView}>
            <TextInput
              underlineColorAndroid={"transparent"}
              onSubmitEditing={()=> this.props.navigation.navigate('WelcomeSignIn')}
              ref={ (input) => {this.passwordTextInput = input }}
              onFocus={()=> this.setState({password_focus: true})}
              onBlur={()=> this.setState({password_focus: false})}
              allowFontScaling={false}
              secureTextEntry={this.state.eye_of_tiger}
              placeholder="Password"
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
          <TouchableOpacity onPress={()=> this.props.navigation.navigate('ForgotPassword')}>
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
          <Button 
             action={()=> this.props.navigation.navigate('WelcomeSignIn')}
              style={{marginTop: 23, marginBottom: 30}}
              navigation={this.props.navigation}
              text={'Sign In'}
          />
          </ScrollView>
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
         height: 82,
         bottom: 0,
         position: 'absolute',
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
      width: '100%',
      height: 65,
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingTop: 20,
      flexDirection: 'column',
      alignSelf: 'center',
      backgroundColor: 'white',
      marginBottom:  40,
      elevation: 2
  },
  headerSmall: {
   width: '85%',
   height: 35,
   alignItems: 'center',
   justifyContent: 'space-between',
   flexDirection: 'row',
   alignSelf: 'center'
},
     headerSignIn: {
         color: '#1bc47d',
         fontFamily: 'mont-semi',
         fontSize: 10
     },
     signUpView: {
         width: '85%',
         alignSelf: 'center',
         marginTop: 28,
         marginBottom: 46
     },
     signUpText: {
         color: '#000',
         fontFamily: 'mont-bold',
         fontSize: 25
     },
     nametextFieldInput: {
        width: '100%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#000',
        fontSize: 12,
         fontFamily: "mont-semi",
         paddingLeft: 15
     },
     textFieldView: {
        width: '85%',
        height: 50,
        borderRadius: 6,
        borderColor: '#B1ADAD',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 23,
        alignSelf: 'center'
    },
    focusedTextFieldView: {
      width: '85%',
      height: 50,
      borderRadius: 6,
      borderColor: '#1bc47d',
      borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 23,
      alignSelf: 'center'
  },
    passwordView: {
        width: '85%',
        height: 50,
        borderRadius: 6,
        borderColor: '#B1ADAD',
        borderWidth: 1,
        alignSelf: "center",
        justifyContent: "space-between",
        flexDirection: "row",
      },
      focusedPasswordView: {
        width: '85%',
        height: 50,
        borderRadius: 6,
        borderColor: '#1bc47d',
        borderWidth: 1,
        alignSelf: "center",
        justifyContent: "space-between",
        flexDirection: "row",
      },
      passwordTextFieldInput: {
        height: 45,
        width: "80%",
        backgroundColor: "#ffffff",
        color: '#000',
        fontSize: 12,
        fontFamily: "mont-semi",
        paddingLeft: 15,
        alignItems: 'center',
        justifyContent: 'center'
      },
      eyeView: {
        width: "20%",
        alignItems: "center",
        justifyContent: "center",
        height: 44
      },
      eyeImage: {
        width: 12,
        height: 7,
        alignSelf: "center"
      },
      forgetTextView: {
          width: '85%',
          alignSelf: 'center',
          marginTop: 15
      },
      forgetText: {
          fontSize: 9,
          fontFamily: 'mont-semi',
          color: '#1bc47d'
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
      },
      tabs: {
          width: '100%',
          height: 44,
          elevation: 2,
          flexDirection: 'row',
          alignItems:'center',
          justifyContent: 'space-between'
      },
      tabBox: {
        height: 44,
        flexDirection: 'column',
        width: 116,
        alignItems: 'center',
        justifyContent: 'space-between'
      },
      tabOnlineText: {
        color: '#B1ADAD',
        fontFamily: 'mont-bold',
        fontSize: 13
      },
      tabOfflineText: {
        color: '#5EA135',
        fontFamily: 'mont-bold',
        fontSize: 13
      },
      tabOnline:{
        color: '#5EA135',
        width: 116,
        height: 3,
        borderRadius: 9
      },
      tabOffline:{
        backgroundColor: 'white',
        width: 116,
        height: 3,
        borderRadius: 9
      }
});
