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
import Button from ".../../Includes/Button"
//import LoaderModal from './Modals/LoaderModal';
//var SharedPreferences = require("react-native-shared-preferences");
type Props = {};
//import { connect } from "react-redux";
/*const mapStateToProps = state => ({
  ...state
});*/
class DriverSignUp extends Component<Props> {
  static navigationOptions = {
    header: null,
    drawerLockMode: "locked-closed"
  };
  constructor(props) {
    super(props);
    this.state = {
     regLoader: false,
     eye_of_tiger: true,
     last_name_text_input: false,
     password_text_input: false,
     phone_number_text_input: false,
     first_name_text_input: false,
     email_text_input: false,
     address_text_input: false,
     passenger: true,
     driver: false
    };
  }
  componentDidMount(){
  }
  render() {
    return (
        <View style={styles.container}>
          <View style={styles.nameViewRow}>
          <View style={!this.state.first_name_text_input?styles.nametextFieldView:
          styles.focusedNametextFieldView}>
            <TextInput
              underlineColorAndroid={"transparent"}
              allowFontScaling={false}
              autoFocus={true}
              blurOnSubmit={false}
              returnKeyType={'next'}
              onFocus={()=> this.setState({first_name_text_input: true})}
              onBlur={()=> this.setState({first_name_text_input: false})}
              onSubmitEditing={()=> {this.lastNameTextInput.focus();}}
              placeholder="First Name"
           //   value={this.state.first_name}
            //  onChangeText={interests => this.setState({ first_name })}
              placeholderStyle={{ fontSize: 7, fontFamily: "mont-semi" }}
              placeholderTextColor="#B9B2B2"
              style={styles.nametextFieldInput}
            />
          </View>
          <View style={!this.state.last_name_text_input?styles.nametextFieldView:
          styles.focusedNametextFieldView}>
            <TextInput
              underlineColorAndroid={"transparent"}
              allowFontScaling={false}
              ref={ (input) => {this.lastNameTextInput = input }}
              blurOnSubmit={false}
              returnKeyType={'next'}
              onFocus={()=> this.setState({last_name_text_input: true})}
              onBlur={()=> this.setState({last_name_text_input: false})}
              onSubmitEditing={()=> {this.emailTextInput.focus();}}
              placeholder="Last Name"
           //   value={this.state.last_name}
            //  onChangeText={interests => this.setState({ last_name })}
              placeholderStyle={{ fontSize: 7, fontFamily: "mont-semi" }}
              placeholderTextColor="#B9B2B2"
              style={styles.nametextFieldInput}
            />
          </View>
          </View>
          <View style={!this.state.email_text_input?styles.textFieldView:
          styles.focusedTextFieldView}>
          <TextInput
              underlineColorAndroid={"transparent"}
              allowFontScaling={false}
              placeholder="Email"
              returnKeyType={'next'}
              ref={ (input) => {this.emailTextInput = input }}
              blurOnSubmit={false}
              onFocus={()=> this.setState({email_text_input: true})}
              onBlur={()=> this.setState({email_text_input: false})}
              onSubmitEditing={()=> {this.addressTextInput.focus();}}
              //   value={this.state.email}
              //  onChangeText={interests => this.setState({ email })}
              placeholderStyle={{ fontSize: 7, fontFamily: "mont-semi" }} 
              placeholderTextColor="#B9B2B2"
              style={styles.nametextFieldInput}
            />
          </View>
          <View style={!this.state.address_text_input?styles.textFieldView:
          styles.focusedTextFieldView}>
          <TextInput
              underlineColorAndroid={"transparent"}
              allowFontScaling={false}
              placeholder="Address"
              returnKeyType={'next'}
              ref={ (input) => {this.addressTextInput = input }}
              blurOnSubmit={false}
              onFocus={()=> this.setState({address_text_input: true})}
              onBlur={()=> this.setState({address_text_input: false})}
              onSubmitEditing={()=> {this.passwordTextInput.focus();}}
           //   value={this.state.email}
            //  onChangeText={interests => this.setState({ email })}
              placeholderStyle={{ fontSize: 7, fontFamily: "mont-semi" }}
              placeholderTextColor="#B9B2B2"
              style={styles.nametextFieldInput}
            />
          </View>
          <View style={!this.state.password_text_input?styles.passwordView:
          styles.focusedPasswordView}>
            <TextInput
              underlineColorAndroid={"transparent"}
              allowFontScaling={false}
              ref={ (input) => {this.passwordTextInput = input }}
              blurOnSubmit={false}
              returnKeyType={'next'}
              onFocus={()=> this.setState({password_text_input: true})}
              onBlur={()=> this.setState({password_text_input: false})}
              onSubmitEditing={()=> {this.phoneNumberTextInput.focus();}}
              secureTextEntry={this.state.eye_of_tiger}
              placeholder="Password"
       //       value={this.state.password}
       //       onChangeText={password => this.setState({ password })}
             placeholderStyle={{ fontSize: 7, fontFamily: "mont-semi" }}
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
                  source={require("../../../assets/images/eye.png")}
                  resizeMode="contain"
                  style={styles.eyeImage}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.nameViewRow}>
          <View style={styles.dialCodeView}>
            <Text
              style={styles.dialCodeText}
            >+234</Text>
          </View>
          <View style={!this.state.phone_number_text_input?styles.numberView
          :styles.focusedNumberView}>
            <TextInput
              underlineColorAndroid={"transparent"}
              allowFontScaling={false}
              placeholder="Mobile no"
              ref={ (input) => {this.phoneNumberTextInput = input }}
              onFocus={()=> this.setState({phone_number_text_input: true})}
              onBlur={()=> this.setState({phone_number_text_input: false})}
           //   value={this.state.mobile_number}
            //  onChangeText={interests => this.setState({ mobile_number })}
              placeholderStyle={{ fontSize: 7, fontFamily: "mont-semi" }}
              placeholderTextColor="#B9B2B2"
              style={styles.nametextFieldInput}
            />
          </View>
          </View>
          <Text style={styles.connectText}>Or connect with</Text>
          <View style={styles.iconView}>
          <TouchableOpacity>
          <Image
            source={require("../../../assets/images/facebook.png")}
            resizeMode="contain"
            style={styles.iconImage}
          /></TouchableOpacity>
          <TouchableOpacity>
          <Image
            source={require("../../../assets/images/gmail.png")}
            resizeMode="contain"
            style={styles.iconImage}
          /></TouchableOpacity>
          </View>
          <Button 
             action={()=>this.props.navigation.navigate('BVN', {forgotPassword: false})}
              style={{marginTop: 40, marginBottom: 30}}
              navigation={this.props.navigation}
              text={'Continue'}
          />
        </View>
    );
  }
}
/*const Splash = connect(
  mapStateToProps,
)(reduxSplash);*/
export default DriverSignUp;
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
     header: {
      width: '85%',
      height: 58,
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingTop: 30,
      flexDirection: 'column',
      alignSelf: 'center',
      backgroundColor: 'white'
  },
  headerSmall: {
   width: '100%',
   height: 14,
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
     nameViewRow: {
         flexDirection: 'row',
         height: 50,
         width: '85%',
         alignItems: 'center',
         justifyContent: 'space-between',
         alignSelf: 'center',
         marginBottom: 23
     },
     nametextFieldView: {
         width: '44.44%',
         height: 50,
         borderRadius: 6,
         borderColor: '#B1ADAD',
         borderWidth: 1,
         alignItems: 'center',
         justifyContent: 'center'
     },
     focusedNametextFieldView: {
      width: '44.44%',
      height: 50,
      borderRadius: 6,
      borderColor: '#1bc47d',
      borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center'
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
    numberView: {
        width: '60%',
        height: 50,
        borderRadius: 6,
        borderColor: '#B1ADAD',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    focusedNumberView: {
      width: '60%',
      height: 50,
      borderRadius: 6,
      borderColor: '#1bc47d',
      borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center'
  },
    dialCodeView: {
        width: '30%',
        height: 50,
        borderRadius: 6,
        borderColor: '#B1ADAD',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    focusedDialCodeView: {
      width: '30%',
      height: 50,
      borderRadius: 6,
      borderColor: '#1bc47d',
      borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center'
  },
    dialCodeText: {
        color: '#000',
        fontFamily: 'mont-semi',
        fontSize: 12
    },
    passwordView: {
        width: '85%',
        height: 50,
        borderRadius: 6,
        borderColor: '#B1ADAD',
        borderWidth: 1,
         marginBottom: 23,
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
         marginBottom: 23,
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
        height: 45
      },
      eyeImage: {
        width: 12,
        height: 7,
        alignSelf: "center"
      },
      byView: {
          alignSelf: 'center',
          alignItems: 'center', 
          height: 20,
          width: '90%',
          marginTop: 23
      },
      byText: {
          color: '#000',
          fontSize: 7,
          fontFamily: 'mont-semi'
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
