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
import Button from "../Includes/Button"
//import LoaderModal from './Modals/LoaderModal';
//var SharedPreferences = require("react-native-shared-preferences");
type Props = {};
//import { connect } from "react-redux";
/*const mapStateToProps = state => ({
  ...state
});*/
class ForgotPassword extends Component<Props> {
  static navigationOptions = {
    header: null,
    drawerLockMode: "locked-closed"
  };
  constructor(props) {
    super(props);
    this.state = {
     regLoader: false,
     phone_number_text_input: false,
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
              <TouchableOpacity onPress={()=> this.props.navigation.navigate('SignIn')}>
              <Text style={styles.headerSignIn}>Sign In</Text>
              </TouchableOpacity>
              </View></View>
          <ScrollView>
          <View style={styles.signUpView}>
              <Text style={styles.signUpText}>Forgot Password</Text>
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
              placeholder="Phone number"
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
          <Button 
             action={()=> this.props.navigation.navigate('Verify', {forgotPassword: true})}
              style={{marginTop: 40, marginBottom: 30}}
              navigation={this.props.navigation}
              text={'Next'}
          />
          </ScrollView>
        </View>
    );
  }
}
/*const Splash = connect(
  mapStateToProps,
)(reduxSplash);*/
export default ForgotPassword;
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
         width: '90%',
         height: 14,
         alignItems: 'center',
         justifyContent: 'space-between',
         marginTop: 30,
         flexDirection: 'row',
         alignSelf: 'center'
     },
     headerSignIn: {
         color: '#1bc47d',
         fontFamily: 'mont-semi',
         fontSize: 10
     },
     signUpView: {
         width: '90%',
         alignSelf: 'center',
         marginTop: 28,
         marginBottom: 46
     },
     signUpText: {
         color: '#000',
         fontFamily: 'mont-bold',
         fontSize: 25
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
    nameViewRow: {
      flexDirection: 'row',
      height: 50,
      width: '90%',
      alignItems: 'center',
      justifyContent: 'space-between',
      alignSelf: 'center',
      marginBottom: 23
  },

});
