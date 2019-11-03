/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  Image,
  Dimensions,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  StatusBar,
  TouchableWithoutFeedback,
  PermissionsAndroid
} from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import DriverLoading from "./DriverLoading"
export default class AddDestination extends Component {
  static navigationOptions = {
    header: null,
    drawerLockMode: "locked-closed"
  };
  constructor(props) {
    super(props);
    this.state = {
        minimized: true
    };
  }
  hideErrorModal = value => {
    if (value == "true") {
      this.setState({ error: false });
    }
  };
  componentDidMount() {
    
  }
  render() {
    let component = '';
    if(this.state.minimized){
        component = (
           <View style={styles.smallContainer}>
            <Text style={styles.title}>Add a destination</Text>
            <Text style={styles.subtext}>Add a destination to search for a driver moving towards your destination</Text>
            <View style={styles.textFieldView}>
                             <TextInput
              underlineColorAndroid={"transparent"}
              returnKeyType={'search'}
              allowFontScaling={false}
              placeholder="Enter Destination"
              onFocus={()=> this.setState({minimized: false})}
              placeholderTextColor="#B1ADAD"
              style={styles.textField}
            />
            </View>
           </View>
        );
    }else{
       component = (
          <DriverLoading />
       );
    }
    return (
         <View style={{flex: 1}}>{component}</View>
    );
  }
}
const styles = StyleSheet.create({
smallContainer: {
    height: 190,
    width: '100%',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: '#fff',
    paddingTop: 36,
    flexDirection: 'column',
    alignItems: 'center',
    bottom: 0,
    position: 'absolute'
},
title:{
    fontFamily: 'mont-bold',
    color: '#000',
    fontSize: 22,
    width: '91%'
},
subtext:{
    fontFamily: 'mont-semi',
    color: '#000',
    fontSize: 7,
    width: '91%',
    marginTop: 11   
},
textFieldView:{
    width: '91%',
    marginTop: 22,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#A19D9D',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50
},
textField: {
    width: '100%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#000',
    fontSize: 12,
     fontFamily: "mont-reg",
     paddingLeft: 14.25
},
bigContainer: {
    backgroundColor: '#fff',
    paddingTop: 49,
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center'
},
cancelBigView: {
    width: '91%',
    flexDirection: 'row'
},
cancelImage: {
    width: 15,
    height: 15
},
whereTo: {
    width: '91%',
    flexDirection: 'row',
    height: 135,
    paddingTop: 17,
    paddingBottom: 17,
    elevation: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 8,
    marginTop: 18
},
locationMeter: {
    width: 10,
    height: 101
},
twoFields: {
    height: 101,
    width: '80.42%',
    flexDirection: 'column'
},
fromView: {
    height: 55,
    borderBottomWidth: 1,
    borderBottomColor: '#C4C4C4',
    alignItems: 'flex-start',
    paddingLeft: 11,
    flexDirection: 'column',
},
fromText: {
    color: '#000',
    fontSize: 14,
    fontFamily: "mont-semi",
},
destinationView: {
    height: 50,
    alignItems: 'flex-end',
    flexDirection: 'column'
},
destinationField: {
    width: '100%',
    height: 45,
    color: '#000',
    fontSize: 14,
    fontFamily: "mont-semi",
    paddingLeft: 11,
},
});
/*
 component = (
            <View style={styles.bigContainer}>
             <View style={styles.cancelBigView}>
             <TouchableOpacity onPress={()=> this.setState({minimized: true})}>
              <Image 
                  resizeMode={'contain'}
                  style={styles.cancelImage}
                  source={require('../../assets/images/close.png')}
              /></TouchableOpacity>
             </View>
             <View style={styles.whereTo}>
             <Image 
                  resizeMode={'contain'}
                  style={styles.locationMeter}
                  source={require('../../assets/images/locationSide.png')}
              />
              <View style={styles.twoFields}>
                 <View style={styles.fromView}>
                   <Text style={styles.fromText}>{this.props.from}</Text>
                 </View>
                 <View style={styles.destinationView}>
                 </View>
              </View>
             </View>
            </View>
        );


*/