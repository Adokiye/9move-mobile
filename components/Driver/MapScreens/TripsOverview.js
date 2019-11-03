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
export default class TripsOverview extends Component {
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
        component = (
           <View style={styles.smallContainer}>
            <View style={styles.header}>
                <Text style={styles.name}>Peter Johnson</Text>
                <View style={styles.smallView}>
                    <Text style={styles.amount}>NGN 20,000</Text>
                    <Text style={styles.earnedText}>EARNED</Text>
                </View>
            </View>
            <View style={styles.tripBox}>
                <View style={styles.smallTripBox}>
                    <Image 
                        style={{width: 35, height: 35}}
                        resizeMode={'contain'}
                        source={require('../../../assets/images/speedIcon.png')}
                    />
                    <Text style={styles.totalText}>20KM</Text>
                    <Text style={styles.totalText}>TOTAL DISTANCE </Text>
                </View>
                <View style={styles.smallTripBox}>
                    <Image 
                        style={{width: 35, height: 35}}
                        resizeMode={'contain'}
                        source={require('../../../assets/images/whiteCar.png')}
                    />
                    <Text style={styles.totalText}>43</Text>
                    <Text style={styles.totalText}>TOTAL TRIPS </Text>
                </View>
            </View>
           </View>
        );
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
header: {
    justifyContent: 'space-between',
    width: '85%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center'
},
name: {
    fontFamily: 'mont-bold',
    fontSize: 14,
    color: '#000'
},
amount: {
    fontSize: 14,
    fontFamily: 'mont-semi',
    color: '#000'
},
smallView: {
    flexDirection: 'column',
},
tripBox: {
    backgroundColor: '#1bc47d',
    height: 95,
    width: '86.67%',
    borderRadius: 6,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 11,
    flexDirection: 'row'
},
totalAmount:{
    fontSize: 14,
    fontFamily: 'mont-semi',
    color: '#000'
},
earnedText: {
    color: '#B1ADAD',
    fontSize: 7,
    fontFamily: 'mont-semi'
},
value: {
    fontFamily: 'mont-bold',
    fontSize: 16,
    color: '#fff'
},
totalText: {
    color: '#fff',
    fontFamily: 'mont-medium',
    fontSize: 10
},
smallTripBox: {
    height: 70,
    justifyContent: 'space-between',
    alignItems: 'center'
}
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