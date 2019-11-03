import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  StatusBar,
  View
} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
//import LoaderModal from './Modals/LoaderModal';
//var SharedPreferences = require("react-native-shared-preferences");
type Props = {};
//import { connect } from "react-redux";
/*const mapStateToProps = state => ({
  ...state
});*/
class Splash extends Component<Props> {
  static navigationOptions = {
    header: null,
    drawerLockMode: "locked-closed"
  };
  constructor(props) {
    super(props);
    this.state = {
     regLoader: true
    };
  }
  componentDidMount(){
  }
  render() {
    return (
        <View style={styles.container}>
          <Image
            source={require("../assets/images/whiteLogo.png")}
            resizeMode="contain"
            style={styles.logo}
          />
          <View style={styles.bottomCity}>
           <Image
            source={require("../assets/images/bottomCity.png")}
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
export default Splash;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#1bc47d'
      },
     logo: {
         width: 277,
         height: 335,
         alignSelf: 'center'
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
    }  
});
