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
import Button from '../../Includes/Button'
import TripsOverview from './TripsOverview'
export default class FirstUserDetails extends Component {
  static navigationOptions = {
    header: null,
    drawerLockMode: "locked-closed"
  };
  constructor(props) {
    super(props);
    this.state = {
        minimized: true,
        details: false,
        accepted: false, 
        ignored: false,
        details: false,
        overview: false
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
    if(this.state.minimized && !this.state.accepted && !this.state.ignored && !this.state.details && !this.state.overview){
        component = (
           <View style={styles.smallContainer}>
            <View style={styles.header}>
            <View style={styles.profileView}>
           <Image 
                  resizeMode={'contain'}
                  style={styles.profileImage}
                  source={require('../../../assets/images/user.png')}
              /></View>
                <Text style={styles.name}>John Adebayo</Text>
                <View style={styles.smallHeader}>
                    <Text style={styles.totalAmount}>NGN2000</Text>
                    <Text style={styles.detailsKm}>2.6KM</Text>
                </View>
            </View>
            <View style={styles.addressBox}>
            <Image 
                  resizeMode={'contain'}
                  style={{width: 20, height: 20}}
                  source={require('../../../assets/images/previousGreen.png')}
              />
             <TouchableOpacity onPress={()=> this.setState({accepted: false, ignored:false, 
                minimized: false, details: true, overview: false})}>
              <View style={styles.middleBox}>
              <Image 
                  resizeMode={'contain'}
                  style={{width: 10, height: 101}}
                  source={require('../../../assets/images/locationSide.png')}
              />
              <View style={styles.addressDetails}>
                 <Text style={styles.addressText}>21 Awolowo road, Lagos </Text>
                 <View style={styles.borderView}></View>
                 <Text style={styles.addressText}>40,Ikeja Avenue,Lagos </Text>
              </View>
              </View></TouchableOpacity>
              <Image 
                  resizeMode={'contain'}
                  style={{width: 20, height: 20}}
                  source={require('../../../assets/images/nextGreen.png')}
              />
            </View>
            <View style={styles.bottomButtonContainer}>
            <TouchableOpacity onPress={()=> this.setState({accepted: false, ignored:true, 
                minimized: false, details: false, overview: false})}>
                <View style={styles.ignoreView}>
                    <Text style={styles.ignoreText}>Ignore</Text>
                </View></TouchableOpacity>
                <TouchableOpacity onPress={()=> this.setState({accepted: true, ignored:false, 
                minimized: false, details: false, overview: false})}>
                <View style={styles.acceptView}>
                    <Text style={styles.acceptText}>Accept</Text>
                </View></TouchableOpacity>
            </View>
           </View>
        );
    }else if(this.state.details && !this.state.accepted && !this.state.ignored && !this.state.minimized && !this.state.overview){
       component = (
         <View style={styles.detailsHouse}>
          <View style={{width: 20, height: 20,}}>
         <Image 
             source={require('../../../assets/images/backWhite.png')}
             style={{width: 20, height: 20, }}
             resizeMode={'contain'}
         />
         </View>
         <View style={styles.detailsWhiteBox}>
          <Text style={styles.labelText}>PICK UP</Text>
          <Text style={styles.addressText}>21 Awolowo road, Lagos </Text>
          <View style={styles.borderView}></View>
          <Text style={styles.labelText}>DESTINATION</Text>
          <Text style={styles.addressText}>40,Ikeja Avenue,Lagos </Text>
          <View style={styles.borderView}></View>
          <Text style={styles.labelText}>FARE</Text>
          <Text style={styles.totalAmount}>NGN2000</Text>
          <Text style={styles.detailsKm}>2.6KM</Text>
          <View style={styles.iconUnderneath}>
              <Image 
                  source={require('../../../assets/images/call.png')}
                  style={{width: 29, height: 29}}
                  resizeMode={'contain'}
              />
               <Image 
                  source={require('../../../assets/images/message.png')}
                  style={{width: 29, height: 29}}
                  resizeMode={'contain'}
              />
              <TouchableOpacity onPress={()=> this.setState({accepted: false, ignored: false, 
                minimized: false, details: false, overview: true})}>
               <Image 
                  source={require('../../../assets/images/cancel.png')}
                  style={{width: 29, height: 29}}
                  resizeMode={'contain'}
              /></TouchableOpacity>
          </View>
         </View>          
         <Button 
             action={()=>this.setState({ignored: false, minimized: false, accepted: true, details: false, overview: false})}
              navigation={this.props.navigation}
              text={'Go to Pick Up'}
          />
         </View>
       );
    }else if(this.state.accepted && !this.state.details && !this.state.ignored && !this.state.minimized
        && !this.state.overview){
        component = (
            <View style={styles.otherSmallContainer}>
            <View style={styles.header}>
            <View style={styles.profileView}>
           <Image 
                  resizeMode={'contain'}
                  style={styles.profileImage}
                  source={require('../../../assets/images/user.png')}
              />
              </View>
                <Text style={styles.name}>John Adebayo</Text>
                <View style={styles.smallHeader}>
                    <Text style={styles.totalAmount}>NGN2000</Text>
                    <Text style={styles.detailsKm}>2.6KM</Text>
                </View>
            </View>
            <TouchableOpacity onPress={()=> this.setState({accepted: false, ignored:false, 
                minimized: false, details: true, overview: false})}>
              <View style={styles.middleBox}>
              <Image 
                  resizeMode={'contain'}
                  style={{width: 10, height: 101}}
                  source={require('../../../assets/images/locationSide.png')}
              />
              <View style={styles.addressDetails}>
                 <Text style={styles.addressText}>21 Awolowo road, Lagos </Text>
                 <View style={styles.borderView}></View>
                 <Text style={styles.addressText}>40,Ikeja Avenue,Lagos </Text>
              </View>
              </View></TouchableOpacity>
            <View style={styles.iconUnderneath}>
              <Image 
                  source={require('../../../assets/images/call.png')}
                  style={{width: 29, height: 29}}
                  resizeMode={'contain'}
              />
               <Image 
                  source={require('../../../assets/images/message.png')}
                  style={{width: 29, height: 29}}
                  resizeMode={'contain'}
              />
            <TouchableOpacity onPress={()=> this.setState({accepted: false, ignored: true, 
                minimized: false, details: false, overview: false})}>
               <Image 
                  source={require('../../../assets/images/cancel.png')}
                  style={{width: 29, height: 29}}
                  resizeMode={'contain'}
              /></TouchableOpacity>
          </View>
          <Button 
             action={()=>this.setState({ignored: false, minimized: false, accepted: true, details: false, overview: false})}
              navigation={this.props.navigation}
              text={'Arrive'}
          />
           </View>
        );
    }else if(this.state.ignored && !this.state.details && !this.state.accepted && !this.state.minimized && !this.state.overview){
         component = (
            <View style={styles.cancelContainer}>
                <Text style={styles.cancelHeader}>Cancel Theresa’s Trip</Text>
                <TouchableOpacity onPress={()=> this.setState({accepted: false, ignored:false, minimized: false, 
                details: false, overview: true})}>
                <View style={styles.yesView}>
                    <Text style={styles.yesText}>Yes</Text>
                </View></TouchableOpacity>
                <TouchableOpacity onPress={()=> this.setState({accepted: true, ignored:false, minimized: false, 
                details: false, overview: false})}>
                <View style={styles.noView}>
                    <Text style={styles.noText}>No</Text>
                </View></TouchableOpacity>
            </View>
         );
    }else if(!this.state.ignored && !this.state.details && !this.state.accepted && !this.state.minimized 
        && this.state.overview){
         component = (
            <TripsOverview />
         );
    }
    return (
         <View style={{flex: 1}}>
       {this.state.details ? <View style={styles.overlay}></View> : null}
         {component}
         </View>
    );
  }
}
const dimensions = Dimensions.get("window");
const Width = dimensions.width;
const Height = dimensions.height;
const styles = StyleSheet.create({
smallContainer: {
    height: 246,
    width: '100%',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    bottom: 0,
    position: 'absolute',
    justifyContent: "space-around"
},
otherSmallContainer: {
    height: 272,
    width: '100%',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    bottom: 0,
    position: 'absolute',
    justifyContent: "space-around"
},
cancelContainer: {
    height: 172,
    width: '100%',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    bottom: 0,
    position: 'absolute',
    justifyContent: "space-around"
},
cancelHeader: {
    fontFamily: 'mont-bold',
    color: '#000', 
    fontSize: 25
},
yesView: {
    width: Width*(58/100),
    height: 25,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(242, 0, 0, 0.58)'
},
yesText: {
    color: '#fff',
    fontFamily: 'mont-semi',
    fontSize: 14
},
noView: {
    width: Width*(58/100),
    height: 25,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#000'
},
noText: {
    color: '#000',
    fontFamily: 'mont-semi',
    fontSize: 14
},
header: {
    width: '85%',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center'
},
name: {
    fontFamily: 'mont-semi',
    fontSize: 14,
    color: '#000',
    marginLeft: 19
},
nameWhite: {
    fontFamily: 'mont-semi',
    fontSize: 14,
    color: '#fff',
    marginLeft: 19
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
smallHeader: {
    flexDirection: 'column',
    position: 'absolute',
    right: 0
},
addressBox: {
    width: '95%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
},
middleBox: {
    elevation: 2,
    width: 300,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: 91,
    borderRadius: 8,
    paddingLeft: 10,
    alignSelf: 'center'
},
addressDetails: {
    flexDirection: 'column',
    height: 54,
    justifyContent: 'space-between'
},
addressText: {
    fontFamily: 'mont-semi',
    color: '#000',
    fontSize: 10,
    marginLeft: 10
},
borderView: {
     width: Width*(65.6/100),
     height: 1,
     backgroundColor: '#c4c4c4'
},
bottomButtonContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 32,
    width: 220
},
ignoreView: {
    backgroundColor: '#c4c4c4',
    width: 106,
    height: 31,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center'
},
ignoreText:{
    color: '#000',
    fontFamily: 'mont-semi',
    fontSize: 12
},
acceptView: {
    backgroundColor: '#1bc47d',
    width: 106,
    height: 31,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center'
},
acceptText: {
    color: '#fff',
    fontFamily: 'mont-semi',
    fontSize: 12
},
profileImage:{
    height: 46,
    width: 46
  },
  profileView: {
    width: 46,
    height: 46,
    borderRadius: 23,
    borderWidth: 2,
    borderColor: '#1bc47d',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#556080',
  },
  overlay: {
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    position: "absolute",
    top: 0
    //   bottom: 0
  },
  detailsHouse: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-around',
      height: '90%'
  },
  detailsWhiteBox: {
      flexDirection: 'column',
      backgroundColor: 'white',
      borderRadius: 4,
      alignSelf: 'center',
      width: '82%',
      paddingLeft: 20,
      height: 393,
      justifyContent:'space-around'
  },      
  labelText: {
      color: '#848688',
      fontFamily: 'mont-bold',
      fontSize: 11,
      marginTop: 10
  },
  iconUnderneath: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: 152,
      height: 42,
      alignItems: 'center',
      alignSelf: 'center'
  },
  iconText: {
      fontFamily: 'mont-bold',
      fontSize: 5,
      color: '#848688'
  },
  detailsKm: {
      color: '#B1ADAD',
      fontSize: 10,
      fontFamily: 'mont-semi'
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