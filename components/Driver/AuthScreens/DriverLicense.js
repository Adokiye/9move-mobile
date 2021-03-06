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
  TextInput,
  Picker
} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import HideWithKeyboard from "react-native-hide-with-keyboard";
import Button from '../../Includes/Button'
//import LoaderModal from './Modals/LoaderModal';
//var SharedPreferences = require("react-native-shared-preferences");
type Props = {};
//import { connect } from "react-redux";
/*const mapStateToProps = state => ({
  ...state
});*/
class DriverLicense extends Component<Props> {
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
     passenger: true,
     driver: false,
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
                  source={require('../../../assets/images/back.png')}
                  resizeMode={'contain'}
                  style={{height: 20, width: 20}}
              /></TouchableOpacity>
              <Text style={styles.signUpText}>Driver License Details</Text>
              <TouchableOpacity onPress={()=> this.props.navigation.goBack()}>
              <Image 
                  source={require('../../../assets/images/back.png')}
                  resizeMode={'contain'}
                  style={{height: 20, width: 20, opacity: 0}}
              /></TouchableOpacity>
              </View>
              <View style={styles.tabBeneath}>
               <View style={styles.tabOnline}></View>
               </View>
          </View>
          <ScrollView>
          <View style={styles.byView}>
          <Text style={styles.byText}>
          Enter Driver's License Expiry Details
          </Text>
          </View>
          <View style={!this.state.email_text_input?styles.textFieldView:
          styles.focusedTextFieldView}>
          <TextInput
              underlineColorAndroid={"transparent"}
              allowFontScaling={false}
              placeholder="Year"
              returnKeyType={'next'}
              ref={ (input) => {this.emailTextInput = input }}
              keyboardType={'numeric'}
              blurOnSubmit={false}
              onFocus={()=> this.setState({email_text_input: true})}
              onBlur={()=> this.setState({email_text_input: false})}
              onSubmitEditing={()=> {this.passwordTextInput.focus();}}
           //   value={this.state.email}
            //  onChangeText={interests => this.setState({ email })}
              placeholderStyle={{ fontSize: 7, fontFamily: "mont-semi" }}
              placeholderTextColor="#B9B2B2"
              style={styles.nametextFieldInput}
            />
          </View>
          <View style={!this.state.password_text_input?styles.textFieldView:
          styles.focusedTextFieldView}>
          <TextInput
              underlineColorAndroid={"transparent"}
              allowFontScaling={false}
              placeholder="Month"
              returnKeyType={'next'}
              keyboardType={'numeric'}
              ref={ (input) => {this.passwordTextInput = input }}
              blurOnSubmit={false}
              onFocus={()=> this.setState({password_text_input: true})}
              onBlur={()=> this.setState({password_text_input: false})}
              onSubmitEditing={()=> {this.yearTextInput.focus();}}
           //   value={this.state.email}
            //  onChangeText={interests => this.setState({ email })}
              placeholderStyle={{ fontSize: 7, fontFamily: "mont-semi" }}
              placeholderTextColor="#B9B2B2"
              style={styles.nametextFieldInput}
            />
          </View>
          <View style={!this.state.last_name_text_input?styles.textFieldView:
          styles.focusedTextFieldView}>
          <TextInput
              underlineColorAndroid={"transparent"}
              allowFontScaling={false}
              placeholder="Day"
              returnKeyType={'next'}
              ref={ (input) => {this.yearTextInput = input }}
              blurOnSubmit={false}
              keyboardType={'numeric'}
              onFocus={()=> this.setState({last_name_text_input: true})}
              onBlur={()=> this.setState({last_name_text_input: false})}
              onSubmitEditing={()=> {this.plateNoTextInput.focus();}}
           //   value={this.state.email}
            //  onChangeText={interests => this.setState({ email })}
              placeholderStyle={{ fontSize: 7, fontFamily: "mont-semi" }}
              placeholderTextColor="#B9B2B2"
              style={styles.nametextFieldInput}
            />
          </View>
          <View style={!this.state.first_name_text_input?styles.textFieldView:
          styles.focusedTextFieldView}>
          <TextInput
              underlineColorAndroid={"transparent"}
              allowFontScaling={false}
              placeholder="Vehicle Plate Number"
              returnKeyType={'next'}
              ref={ (input) => {this.plateNoTextInput = input }}
              blurOnSubmit={false}
              keyboardType={'numeric'}
              onFocus={()=> this.setState({first_name_text_input: true})}
              onBlur={()=> this.setState({first_name_text_input: false})}
    //          onSubmitEditing={()=> {this.plateNoTextInput.focus();}}
           //   value={this.state.email}
            //  onChangeText={interests => this.setState({ email })}
              placeholderStyle={{ fontSize: 7, fontFamily: "mont-semi" }}
              placeholderTextColor="#B9B2B2"
              style={styles.nametextFieldInput}
            />
          </View>
          <Button 
             action={()=>this.props.navigation.navigate('DriverMap', )}
              style={{marginTop: 40, marginBottom: 30}}
              navigation={this.props.navigation}
              text={'Continue'}
          />
          </ScrollView>
        </View>
    );
  }
}
/*const Splash = connect(
  mapStateToProps,
)(reduxSplash);*/
export default DriverLicense;
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
         marginTop: 40,
         marginBottom: 30
     },
     buttonSelectedText: {
         color: 'white',
         fontFamily: 'mont-bold',
         fontSize: 13
     },
     header: {
      width: '100%',
      height: 55,
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingTop: 10,
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
      fontSize: 10,
      marginRight: 2
  },
   tabs: {
       width: '100%',
       height: 50,
       flexDirection: 'row',
       alignItems:'center',
       justifyContent: 'space-between',
   },
   tabBox: {
     height: 15,
     flexDirection: 'column',
     width: 116,
     alignItems: 'center',
     justifyContent: 'space-between'
   },
   tabBeneath: {
     flexDirection: 'row',
     height: 3,
     width: '100%',
     position: 'absolute',
     bottom: 0
   },
   tabOnlineText: {
     color: '#1bc47d',
     fontFamily: 'mont-bold',
     fontSize: 13
   },
   tabOfflineText: {
     color: '#B1ADAD',
     fontFamily: 'mont-bold',
     fontSize: 13
   },
   tabOnline:{
     backgroundColor: '#1bc47d',
     width: '100%',
     height: 3,
     borderRadius: 9
   },
   tabOffline:{
     backgroundColor: '#E7E7E7',
     width: '50%',
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
      borderColor: '#44811F',
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
      borderColor: '#44811F',
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
      borderColor: '#44811F',
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
      borderColor: '#44811F',
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
        borderColor: '#44811F',
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
