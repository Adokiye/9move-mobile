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
  PermissionsAndroid,
  Animated
} from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
export default class DriverLoading extends Component {
  static navigationOptions = {
    header: null,
    drawerLockMode: "locked-closed"
  };
  constructor(props) {
    super(props);
    this.state = {
        minimized: true,
        width: new Animated.Value(0),
        left: new Animated.Value(-40)
    };

  }
  hideErrorModal = value => {
    if (value == "true") {
      this.setState({ error: false });
    }
  };
  componentDidMount() {
    const dimensions = Dimensions.get('window');
    const Width = dimensions.width;
    setTimeout(() => {
      this.setState({minimized: false})
    }, 3000);
    Animated.timing(                  // Animate over time
      this.state.width,            // The animated value to drive
      {
        toValue: Width*(72.53/100),                   // Animate to opacity: 1 (opaque)
        duration: 3000,  
    //    useNativeDriver: true            // Make it take a while
      }
    ).start();                        // Starts the animation
    Animated.timing(                  // Animate over time
      this.state.left,            // The animated value to drive
      {
        toValue: Width*(48/100),                   // Animate to opacity: 1 (opaque)
        duration: 3000,  
    //    useNativeDriver: true            // Make it take a while
      }
    ).start();                        // Starts the animation
  }
  render() {
    let component = '';
    if(this.state.minimized){
        component = (
           <View style={styles.smallerContainer}>
           <View style={styles.parentView}>
             <View style={styles.backView}>
              <Animated.View style={{
                  backgroundColor: '#5EA135',
                  borderRadius: 9,
                  alignSelf: 'center',
                  width: this.state.width,
                  height: 16,
                  
              }}></Animated.View>
               <Animated.View style={{  
                width: 54,
                height: 27.92,
                position: 'absolute',
                left: this.state.left,
                top: -2}}>
                <Image 
                  resizeMode={'contain'}
                  style={{
                    flex: 1
                  }}
                  source={require('../../../assets/images/car.png')}
              />
              </Animated.View>
              </View>
              </View>
              <Text style={styles.searchingText}>We are searching for a Driver</Text>
              <Text style={styles.fewText}>please wait for a few minutes</Text>
           <View style={styles.cancelView}>
             <Text style={styles.cancelText}>CANCEL</Text>
           </View>
           </View>
        );
    }else{
        component = (
            <View style={styles.smallContainer}>
            <Text style={styles.foundText}>Driver found</Text>
            <View style={styles.driverMenu}>
            <Image 
                  resizeMode={'contain'}
                  style={styles.iconImage}
                  source={require('../../../assets/images/call.png')}
              />
            <Image 
                  resizeMode={'contain'}
                  style={styles.driverImage}
                  source={require('../../../assets/images/user.png')}
              />
              <Image 
                  resizeMode={'contain'}
                  style={styles.iconImage}
                  source={require('../../../assets/images/message.png')}
              />
            </View>
            <Text style={styles.driverName}>John Doe</Text>
            <Image 
                  resizeMode={'contain'}
                  style={styles.ratingImage}
                  source={require('../../../assets/images/rating.png')}
              />
              <View style={styles.textRow}>
                <Text style={styles.plateNumber}>KJA55216-</Text>
                <Text style={styles.carName}>Toyota Corolla</Text>
              </View>
              <View style={styles.textRow}>
                <Text style={styles.arrivesIn}>Driver arrives in </Text>
                <Text style={styles.time}>5:35</Text>
              </View>
           </View>
        );
    }
    return (
         <View style={{flex: 1}}>{component}</View>
    );
  }
}
const styles = StyleSheet.create({
smallContainer: {
    height: 293,
    width: '100%',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: '#fff',
    paddingTop: 29,
    flexDirection: 'column',
    alignItems: 'center',
    bottom: 0,
    position: 'absolute'
},
foundText:{
  alignSelf: 'center',
  fontFamily: 'mont-semi',
  color: '#000',
  fontSize: 12
},
driverMenu: {
  flexDirection: 'row',
  alignItems: 'center',
  alignSelf: 'center',
  justifyContent: 'space-between',
  height: 84,
  width: 188,
  marginTop: 17
},
iconImage: {
  width: 31,
  height: 31
},
driverImage: {
   width: 84,
   height: 84
},
driverName: {
  color: '#000',
  fontFamily: 'mont-extraBold',
  fontSize: 16,
  alignSelf: 'center',
  marginTop: 14
},
ratingImage:{
  width: 59,
  height: 11
},
textRow: {
  flexDirection: 'row',
  alignSelf: 'center',
  marginTop: 14
},
plateNumber:{
  fontFamily: 'mont-extraBold',
  fontSize: 14,
  color: '#000'
},
carName:{
  fontFamily: 'mont-medium',
  color: '#8f8f8f',
  fontSize: 14
},
arrivesIn: {
  fontSize: 10,
  color: '#8f8f8f',
  fontFamily: 'mont-medium'
},
time: {
  color: '#f20000',
  fontSize: 10,
  fontFamily: 'mont-bold'
},
smallerContainer: {
  height: 250,
  width: '100%',
  borderTopLeftRadius: 25,
  borderTopRightRadius: 25,
  backgroundColor: '#fff',
  paddingTop: 29,
  flexDirection: 'column',
  alignItems: 'center',
  bottom: 0,
  position: 'absolute'
},
parentView: {
  height: 28,
  width: '72.53%',
},
backView: {
  backgroundColor: '#C3DBB4',
  borderRadius: 9,
  alignSelf: 'center',
  width: '100%',
  height: 16,
  flexDirection: 'row'
},
searchingText: {
  alignSelf: 'center',
  fontSize: 20,
  fontFamily: 'mont-semi',
  color: '#000',
  width: '90%',
  textAlign: 'center'
},
fewText: {
  fontFamily: 'mont-reg',
  fontSize: 13,
  color: '#000',
  alignSelf: 'center',
  width: '80%',
  textAlign: 'center'
},
cancelView: {
  backgroundColor: '#DD1111',
  width: '89.33%',
  height: 40,
  borderRadius: 6,
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 29,
  alignSelf: 'center'
},
cancelText: {
  fontFamily: 'mont-medium',
  color: '#fff',
  fontSize: 17
}
});
