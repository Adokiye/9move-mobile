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
import Button from "../Includes/Button";
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
     eye_of_tiger: true,
     firstTextInput: false,
     secondTextInput: false,
     thirdTextInput: false,
     fourthTextInput: false
    };
  }
  componentDidMount(){
  }
  navigate(){
    const {params} = this.props.navigation.state
    if(params.forgotPassword){
      this.props.navigation.navigate('WelcomeSignIn')
    }else{
      this.props.navigation.navigate('WelcomeSignUp')
    }
  }
  render() {
    return (
        <View style={styles.container}>
        <View style={styles.header}>
              <TouchableOpacity onPress={()=> this.props.navigation.goBack()}>
              <Image 
                  source={require('../../assets/images/back.png')}
                  resizeMode={'contain'}
                  style={{height: 20, width: 20}}
              /></TouchableOpacity>
          </View>
          <ScrollView>
          <View style={styles.signUpView}>
              <Text style={styles.signUpText}>Verify Phone Number</Text>
          </View>
          <View style={styles.checkView}>
              <Text style={styles.checkText}>Check your SMS messages, we’ve sent you
             the PIN at <Text style={styles.numberText}>0801******* </Text></Text>
          </View>
          <View style={styles.pinView}>
              <View style={!this.state.firstTextInput?styles.pinBox:styles.focusPinBox}>
              <TextInput
              underlineColorAndroid={"transparent"}
              allowFontScaling={false}
              style={styles.pinTextInput}
              keyboardType={'numeric'}
              maxLength={1}
              returnKeyType='next'
              autoFocus={true}
              blurOnSubmit={false}
              onFocus={()=> this.setState({firstTextInput: true})}
              onBlur={()=> this.setState({firstTextInput: false})}
              onSubmitEditing={()=> {this.secondTextInput.focus();}}
              onChangeText={text => {
              //this.setState({cardExpDateMonth: text})
              //console.log('onChangeText', this.refs.card_exp_date_mm)
              if(text && text.length == 1){
              //this.refs.card_exp_date_aa.focus();
              this.secondTextInput.focus()
              }
              }}
            />
              </View>
              <View style={!this.state.secondTextInput?styles.pinBox:styles.focusPinBox}>
              <TextInput
              underlineColorAndroid={"transparent"}
              allowFontScaling={false}
              style={styles.pinTextInput}
              keyboardType={'numeric'}
              blurOnSubmit={false}
              onFocus={()=> this.setState({secondTextInput: true})}
              onBlur={()=> this.setState({secondTextInput: false})}
              ref={ (input) => {this.secondTextInput = input }}
              maxLength={1}
              returnKeyType='next'
              onSubmitEditing={()=> {this.thirdTextInput.focus();}}
              onChangeText={text => {
           //   this.setState({cardExpDateMonth: text})
              //console.log('onChangeText', this.refs.card_exp_date_mm)
              if(text && text.length == 1){
         //       this.refs.card_exp_date_aa.focus();
              this.thirdTextInput.focus()
              }
              }}
            />
              </View>
              <View style={!this.state.thirdTextInput?styles.pinBox:styles.focusPinBox}>
              <TextInput
              underlineColorAndroid={"transparent"}
              allowFontScaling={false}
              style={styles.pinTextInput}
              keyboardType={'numeric'}
              blurOnSubmit={false}
              onFocus={()=> this.setState({thirdTextInput: true})}
              onBlur={()=> this.setState({thirdTextInput: false})}
              ref={ (input) => {this.thirdTextInput = input }}
              maxLength={1}
              returnKeyType='next'
              onSubmitEditing={()=> {this.fourthTextInput.focus();}}
              onChangeText={text => {
           //   this.setState({cardExpDateMonth: text})
              //console.log('onChangeText', this.refs.card_exp_date_mm)
              if(text && text.length == 1){
         //       this.refs.card_exp_date_aa.focus();
              this.fourthTextInput.focus()
              }
              }}
            />
              </View>
              <View style={!this.state.fourthTextInput?styles.pinBox:styles.focusPinBox}>
              <TextInput
              underlineColorAndroid={"transparent"}
              allowFontScaling={false}
              maxLength={1}
              style={styles.pinTextInput}
              keyboardType={'numeric'}
              blurOnSubmit={false}
              onFocus={()=> this.setState({fourthTextInput: true})}
              onBlur={()=> this.setState({fourthTextInput: false})}
              ref={ (input) => {this.fourthTextInput = input }}
              maxLength={1}
              onChangeText={text => {
           //   this.setState({cardExpDateMonth: text})
              //console.log('onChangeText', this.refs.card_exp_date_mm)
              if(text && text.length == 1){
         //       this.refs.card_exp_date_aa.focus();
              this.props.navigation.navigate('WelcomeSignUp')
              }
              }}
            />
              </View>
          </View>
          <View style={styles.checkView}>
          <Text style={styles.checkText}>Didn’t receive SMS?{" "}
           <Text style={styles.resendText}>Resend pin </Text></Text>
           </View>
          <Button 
             action={this.navigate.bind(this)}
              style={{marginTop: 23, marginBottom: 30}}
              navigation={this.props.navigation}
              text={'Verify'}
          />
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
     focusPinBox: {
      width: '17.5%',
      height: 45,
      borderWidth: 1,
      borderRadius: 5,
      borderColor: '#44811F'
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