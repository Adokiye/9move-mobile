import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  StatusBar,
  View,
  TouchableOpacity
} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
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
      let signIn, signUp = '';
      if(this.state.signIn){
          signIn = 
          <TouchableOpacity 
          onPressIn={()=> this.setState({signIn: true, signUp: false})}
          onPress={this.signIn.bind(this)}>
          <LinearGradient colors={['#8DDC5E', '#316A0E']} style={styles.buttonSelected}>
          <Text style={styles.buttonSelectedText}>Sign In</Text>
          </LinearGradient></TouchableOpacity>
          signUp = 
          <TouchableOpacity 
          onPressIn={()=> this.setState({signIn: false, signUp: true})}
          onPress={this.signUp.bind(this)}>
          <View style={styles.buttonUnselected}>
            <Text style={styles.buttonUnselectedText}>Sign Up</Text>
          </View></TouchableOpacity>
      }else if(this.state.signUp){
        signUp = 
        <TouchableOpacity 
        onPressIn={()=> this.setState({signIn: false, signUp: true})}
        onPress={this.signUp.bind(this)}>
        <LinearGradient colors={['#8DDC5E', '#316A0E']} style={styles.buttonSelected}>
        <Text style={styles.buttonSelectedText}>Sign Up</Text>
        </LinearGradient></TouchableOpacity>
        signIn = 
        <TouchableOpacity 
        onPressIn={()=> this.setState({signIn: true, signUp: false})}
        onPress={this.signIn.bind(this)}>
        <View style={styles.buttonUnselected}>
          <Text style={styles.buttonUnselectedText}>Sign In</Text>
        </View></TouchableOpacity>
      }else{
        signIn = 
        <TouchableOpacity 
        onPressIn={()=> this.setState({signIn: true, signUp: false})}
        onPress={this.signIn.bind(this)}>
        <View style={styles.buttonUnselected}>
          <Text style={styles.buttonUnselectedText}>Sign In</Text>
        </View></TouchableOpacity>
        signUp = 
        <TouchableOpacity 
        onPressIn={()=> this.setState({signIn: false, signUp: true})}
        onPress={this.signUp.bind(this)}>
        <View style={styles.buttonUnselected}>
        <Text style={styles.buttonUnselectedText}>Sign Up</Text>
      </View></TouchableOpacity>
      }
    return (
        <View style={styles.container}>
          <Image
            source={require("../../assets/images/greenLogo.png")}
            resizeMode="contain"
            style={styles.logo}
          />
          {signUp}
          {signIn}
          <View style={styles.bottomCity}>
           <Image
            source={require("../../assets/images/welcomeBottom.png")}
            resizeMode="cover"
            style={styles.bottomCityImage}
          /></View>
        </View>
    );
  }
}
/*const Splash = connect(
  mapStateToProps,
)(reduxSplash);*/
export default Welcome;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: '#fff'
      },
     logo: {
         width: 261,
         height: 237,
         alignSelf: 'center',
         marginBottom: 24,
         marginTop:'14.40%'
     },
     bottomCity: {
         bottom: 0,
         position: 'absolute',
         width: '100%',
         height: 82
     },
     bottomCityImage: {
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
         marginTop: 10
     },
     buttonUnselected: {
        borderRadius: 20,
        height: 37,
        width: 180,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        marginTop: 10
     } ,
     buttonSelectedText: {
         color: 'white',
         fontFamily: 'mont-bold',
         fontSize: 13
     },
     buttonUnselectedText: {
         color: '#000',
         fontFamily: 'mont-bold',
         fontSize: 13
     } 
});
