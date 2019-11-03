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
class PersonalDocument extends Component<Props> {
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
              <Text style={styles.signUpText}>Personal Document</Text>
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
           <TouchableOpacity onPress={()=> this.props.navigation.navigate('DriverLicense')}>
             <View style={styles.driverLicenseView}>
             <Text style={styles.driverLicenseText}>Add Driver's License</Text>
             <View style={{height: 25, width: 25}}>
             <Image 
                  source={require('../../../assets/images/greenNext.png')}
                  resizeMode={'contain'}
                  style={{flex: 1 }}
              /></View>
             </View>
           </TouchableOpacity>
           <TouchableOpacity>
             <View style={styles.driverPictureView}>
             <Text style={styles.driverPictureText}>Add Photo</Text>
             <View style={{height: 25, width: 25}}>
             <Image 
                  source={require('../../../assets/images/blackNext.png')}
                  resizeMode={'contain'}
                  style={{flex: 1 }}
              /></View>
             </View></TouchableOpacity>
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
export default PersonalDocument;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: '#fff',
        flexGrow: 1
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
     width: '75%',
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
      driverLicenseView: {
          width:Width*(80/100),
          height: 82,
          flexDirection: 'row',
          alignSelf: 'center',
          justifyContent: 'space-between',
          paddingLeft: 20,
          paddingRight: 20,
          backgroundColor: '#C1F2A3',
          borderRadius: 10,
          alignItems: 'center'
      },
      driverLicenseText: {
          fontFamily: 'mont-semi',
          fontSize: 16,
          color: '#000'
      },
      driverPictureView: {
        width: Width*(80/100),
        height: 82,
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 18,
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#EBE7E7',
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20
    },
    driverPictureText: {
        fontFamily: 'mont-semi',
        fontSize: 16,
        color: '#000'
    }
});
