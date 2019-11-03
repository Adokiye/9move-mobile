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
  TextInput,
  StatusBar,
  TouchableWithoutFeedback,
  Platform,
  PermissionsAndroid,
  Alert,
  TouchableOpacity,
  BackHandler,
  DeviceEventEmitter
} from "react-native";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MapView, { Marker, Callout, AnimatedRegion, Animated } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Geocoder from 'react-native-geocoding';
import Polyline from '@mapbox/polyline';
import Geolocation from '@react-native-community/geolocation';
import AddDestination from './AddDestination'
import LocationServicesDialogBox from "react-native-android-location-services-dialog-box";
const google_api_key = 'AIzaSyBRWIXQCbRpusFNiQitxMJy_89gguGk66w';
import LinearGradient from 'react-native-linear-gradient';
Geocoder.init(google_api_key); 
const LATITUDE_DELTA = 0.0005;
const LONGITUDE_DELTA = 0.005;
const default_region = {
    latitude:6.45407,
    longitude:3.39467,
    latitudeDelta: 1,
    longitudeDelta: 1
};
class Map extends Component {
    getMapRegion = () => ({
        latitude: this.state.changedLatitude,
        longitude: this.state.changedLongitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      });
  static navigationOptions = {
    header: null,
    drawerLockMode: "locked-closed"
  };
  getEndLocation = (lat, long) => {
    this.setState({
        end_location: {
        latitude: lat,
        longitude: long,
      }}
      ); 
}
  constructor(props) {
    super(props);
    this.from_region = null;
  //  this.watchId = null; 
    this.state = {
      destinationRegion: '',
      latitude: null,
      longitude: null,
      concat: null,
      concatCord: null,
      coords:[],
      x: 'false',
      cordLatitude: null,
      cordLongitude: null,
      y: '',
      z: '',
      from: 'Loading Address',
      to: '',
      region: default_region,
      start_location: null, 
      end_location: null,
      currentCoordinate: new AnimatedRegion({
        latitude: 6.45407,
        longitude: 3.39467,
        latitudeDelta: 0,
        longitudeDelta: 0
       }),
       distanceTravelled: '',
       prevLatLng: [],
       debugText: '',
       changedLatitude: null,
       changedLongitude: null,
       marginBottom: 1,
       start_location: null,
       end_location: null,
       email: null,
       startTrek: false,
       addressLoader: false
    };
    this.mergeLot = this.mergeLot.bind(this);
    this.getDirectionsTo = this.getDirectionsTo.bind(this);
    this.getLocation = this.getLocation.bind(this);
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
    Geolocation.clearWatch(this.watchID);
    LocationServicesDialogBox.stopListener();
  }
   regionFrom(lat, lon, accuracy) {
    const oneDegreeOfLongitudeInMeters = 111.32 * 1000;
    const circumference = (40075 / 360) * 1000;

    const latDelta = accuracy * (1 / (Math.cos(lat) * circumference));
    const lonDelta = (accuracy / oneDegreeOfLongitudeInMeters);

    return {
      latitude: lat,
      longitude: lon,
      latitudeDelta: Math.max(0, latDelta),
      longitudeDelta: Math.max(0, lonDelta)
    };
  }
  getLocation(){
    this.watchID = Geolocation.watchPosition(
        (position) => {
         /*   var region = this.regionFrom(
                position.coords.latitude, 
                position.coords.longitude, 
                position.coords.accuracy
              ); */
              const newCoordinate = {
                latitude:  position.coords.latitude,
                longitude:  position.coords.longitude,
                latitudeDelta: LATITUDE_DELTA,
             longitudeDelta: LONGITUDE_DELTA
              }
        /*      this.setState({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
               currentCoordinate: {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    latitudeDelta: LATITUDE_DELTA,
                    longitudeDelta: LONGITUDE_DELTA
                } 
              }) */
              if (Platform.OS === "android") {
                if (this.marker) {
                    console.log("marker exists")
                  this.marker._component.animateMarkerToCoordinate(
                    newCoordinate,
                    500
                  );
                 }
               } else {
                currentCoordinate.timing(newCoordinate).start();
               } 
         /*     Geocoder.from({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
              })
              .then((response) => {
                // the response object is the same as what's returned in the HTTP API: https://developers.google.com/maps/documentation/geocoding/intro
      
                this.from_region = region; // for storing the region in case the user presses the "reset" button
      
                // update the state to indicate the user's origin on the map (using a marker)
                this.setState({
                  start_location: {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                  },
                  region: region, // the region displayed on the map
                  from: response.results[0].formatted_address // the descriptive name of the place
                }); 
      
              });*/
      
  /*        this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            currentCoordinate: {"latitude": position.coords.latitude, "longitude": position.coords.longitude},
            error: null,
            y: {"latitude": position.coords.latitude, "longitude": position.coords.longitude}
          });*/
          this.mergeLot();
        },
        (error) => console.log(error.message),
        { enableHighAccuracy: true, timeout: 20000, 
  //        maximumAge: 0,
           distanceFilter: 1 },
      );
  }
  hideErrorModal = value => {
    if (value == "true") {
      this.setState({ error: false });
    }
  };
requestGeolocationPermission() {
    try{
      this.setState({addressLoader: true})
        LocationServicesDialogBox.checkLocationServicesIsEnabled({
          message: "<h2>Allow 9move use your location?</h2>",
          ok: "YES",
          cancel: "NO",
          enableHighAccuracy: true, // true => GPS AND NETWORK PROVIDER, false => GPS OR NETWORK PROVIDER
          showDialog: true, // false => Opens the Location access page directly
          openLocationServices: true, // false => Directly catch method is called if location services are turned off
          preventOutSideTouch: true, //true => To prevent the location services popup from closing when it is clicked outside
          preventBackClick: true, //true => To prevent the location services popup from closing when it is clicked back button
          providerListener: true // true ==> Trigger "locationProviderStatusChange" listener when the location state changes
      }).then(function(success) {
        Geolocation.getCurrentPosition(
          (position) => {
            console.log(JSON.stringify(position.coords))
           /*   var region = this.regionFrom(
                  position.coords.latitude, 
                  position.coords.longitude, 
                  position.coords.accuracy
                ); */
                this.setState({
                  latitude: position.coords.latitude,
                  longitude: position.coords.longitude,
                  start_location: {
                      latitude: position.coords.latitude,
                      longitude: position.coords.longitude,
                    },
                 currentCoordinate: {
                      latitude: position.coords.latitude,
                      longitude: position.coords.longitude,
                      latitudeDelta: LATITUDE_DELTA,
                      longitudeDelta: LONGITUDE_DELTA
                  } 
                } )
                console.log("here")
                Geocoder.from({
                  latitude: position.coords.latitude,
                  longitude: position.coords.longitude
                })
                .then((response) => {
                  // the response object is the same as what's returned in the HTTP API: https://developers.google.com/maps/documentation/geocoding/intro
                  console.log(response)
               //   this.from_region = region; // for storing the region in case the user presses the "reset" button
        
                  // update the state to indicate the user's origin on the map (using a marker)
                  this.setState({
                    start_location: {
                      latitude: position.coords.latitude,
                      longitude: position.coords.longitude
                    },
               //     region: region, // the region displayed on the map
                    from: response.results[0].formatted_address, // the descriptive name of the place
                    addressLoader: false
                  }); 
        
                })
                const newCoordinate = {
                  latitude:  position.coords.latitude,
                  longitude:  position.coords.longitude,
                  latitudeDelta: LATITUDE_DELTA,
                  longitudeDelta: LONGITUDE_DELTA
                  }
                this.setState({
                  latitude: position.coords.latitude,
                  longitude: position.coords.longitude,
                  start_location: {
                      latitude: position.coords.latitude,
                      longitude: position.coords.longitude,
                    },
                 currentCoordinate: {
                      latitude: position.coords.latitude,
                      longitude: position.coords.longitude,
                      latitudeDelta: LATITUDE_DELTA,
                      longitudeDelta: LONGITUDE_DELTA
                  } 
                } 
                  )
                  
            this.mergeLot();
          },
          (error) => console.log(error.message),
          { enableHighAccuracy: true, 
            //  maximumAge: 1000
           }, 
        );
          }.bind(this)).catch((error) => {
          console.log(error.message);
      });

    }catch(err){
      console.warn(err)
    }
  }
  
  async componentDidMount() {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        'title': '9move Geolocation Permission',
        'message': '9move needs access to your current location'
      }
    );
    if(granted === PermissionsAndroid.RESULTS.GRANTED){
    }else{
     console.log("Geolocation permission denied")
    }
    this.requestGeolocationPermission();
    DeviceEventEmitter.addListener('locationProviderStatusChange', function(status) { // only trigger when "providerListener" is enabled
    console.log(status); //  status => {enabled: false, status: "disabled"} or {enabled: true, status: "enabled"}
     if(!status.enabled){
    this.requestGeolocationPermission;
  }
  });   
   }
   navigator(){
     if(!this.state.end_location){
      this.requestGeolocationPermission();
     }else{
      this.requestGeolocationPermissionSecond();
     }
   }
   startTrek(){
    this.getLocation();
    this.setState({startTrek: true});
   }
   tweakDestination = () => {
     console.log("tweak")
    Geocoder.from({
      latitude: evt.nativeEvent.coordinate.latitude,
      longitude: evt.nativeEvent.coordinate.longitude
    })
    .then((response) => {
      this.setState({
        to: response.results[0].formatted_address
      });
    }); 
    this.setState({
      end_location: evt.nativeEvent.coordinate
    });
  }
   _onMapReady = () => this.setState({marginBottom: 0})
   mergeLot(){
    if (this.state.latitude != null && this.state.longitude!=null)
     {
       let concatLot = this.state.latitude +","+this.state.longitude
       this.setState({
         concat: concatLot
       });
     }
   }
   getDirectionsTo(){
    if (this.state.cordLatitude != null && this.state.cordLongitude!=null)
    {
      let concatLot = this.state.cordLatitude +","+this.state.cordLongitude
      this.setState({
        concatCord: concatLot
      }, () => {
        this.getDirections(this.state.concat, concatLot);
      });
    }
   }
   async getDirections(startLoc, destinationLoc) {
    try {
        let resp = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${ startLoc }&destination=${ destinationLoc }`)
        let respJson = await resp.json();
        let points = Polyline.decode(respJson.routes[0].overview_polyline.points);
        let coords = points.map((point, index) => {
            return  {
                latitude : point[0],
                longitude : point[1]
            }
        })
        this.setState({coords: coords})
        this.setState({x: "true"})
        return coords
    } catch(error) {
      console.log(JSON.stringify(error))
        this.setState({x: "error"})
        return error
    }
}
  render() {
    return (
        <View style={styles.container}>
        <MapView style={{position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        marginBottom: 190
        }} 
        followsUserLocation={true}
        showsUserLocation={true}
        showsMyLocationButton={true}
          region={{
            latitude: this.state.latitude?this.state.latitude:default_region.latitude,
        longitude: this.state.longitude?this.state.longitude:default_region.longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
          }}
          zoomEnabled={true}
          zoomControlEnabled={true}
            //      customMapStyle={mapStyle}
              //     followUserLocation
          //       loadingEnabled
           >
      {/*     {!!this.state.latitude && !!this.state.longitude && <MapView.Marker
              coordinate={{"latitude":this.state.latitude,"longitude":this.state.longitude}}
              title={"Start"}
              pinColor="#39ffb3"
            />*/}
     
            {/*
            this.state.start_location &&
            <Marker coordinate={this.state.start_location}
     //        image={require('../assets/images/person-walking.png')}
             draggable
            onDragEnd={(e) =>  this.setState({start_location: e.nativeEvent.coordinate})}
             >
             <View style={styles.addressBox}>
             <View style={styles.stick} />
                 <View style={styles.yourLocationBox}>
                     <View style={styles.userBox}>
                         <Image 
                             source={require('../assets/images/avatar.png')}
                             resizeMode={'contain'}
                             style={styles.userImage}
                         />
                     </View>
                     <View style={styles.textView}>
                     <Text style={styles.yourLocation}>YOUR LOCATION</Text>
                     <Text
                     numberOfLines={2}
                      style={styles.addressText}>{this.state.addressLoader?"Loading..." :this.state.from}</Text>
                     </View>
                 </View>
                 <View style={styles.startCircleBig}>
               <View style={styles.startCircleSmall} />
               </View>
             </View>
               
             </Marker>
          */}
            { this.state.end_location &&
            <Marker
              coordinate={this.state.end_location}
              draggable
      //        onDragEnd={this.tweakDestination}
              onDragEnd={(e) =>  this.setState({end_location: e.nativeEvent.coordinate})}
            > 
            <View style={styles.endCircleBig}>
               <View style={styles.endCircleSmall} />
               </View>
            </Marker>
            }
        {/* this.state.end_location && this.state.startTrek  && <Marker.Animated
            ref={marker => {
            this.marker = marker;
            }}
            image={require('../assets/images/person-walking.png')}
            coordinate={this.state.currentCoordinate}
            />  */}
            {
            this.state.start_location && this.state.end_location &&
            <MapViewDirections
              origin={{
                'latitude': this.state.start_location.latitude,
                'longitude': this.state.start_location.longitude
              }}
              destination={{
                'latitude': this.state.end_location.latitude,
                'longitude': this.state.end_location.longitude
              }}
              strokeWidth={5}
              strokeColor={"#39ffb3"}
             // mode={"WALKING"}
              apikey={'AIzaSyBRWIXQCbRpusFNiQitxMJy_89gguGk66w'}
            />
          }

           </MapView> 

           <View style={styles.profileView}>
           <Image 
                  resizeMode={'contain'}
                  style={styles.profileImage}
                  source={require('../../../assets/images/user.png')}
              /></View>
                        <AddDestination 
                from={this.state.from}
              />
           </View>
    );
  }
}
export default Map;
const styles = StyleSheet.create({
    map: {
         
      },
      profileImage:{
        height: 60,
        width: 60
      },
      profileView: {
        width: 60,
        height: 60,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: '#1bc47d',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#556080',
        position: 'absolute',
        left: 22,
        top: 22
      },
      container: {
          flex: 1
      },
      startCircleBig: {
        backgroundColor: 'rgba(75, 137, 36, 0.3)',
        width: 51.33,
        height: 45.26,
        borderRadius: 45.26/2,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0
      },
      addressBox:{
       height: 108,
       width: 147,
       flexDirection: 'column',
       alignItems: 'center'
      },
      yourLocationBox: {
        flexDirection: 'row',
        width: 147,
        height: 38.98,
        borderRadius: 3,
        backgroundColor: '#fff',
        position: 'absolute',
        top: 0,
      },
      userBox: {
         backgroundColor: '#73BB47',
         borderRadius: 3,
         height: 38.98,
         alignItems: 'center',
         justifyContent: 'center',
         width: 42.73,
      },
      userImage: {
        width: 35,
        height: 30.17
      },
      textView: {
          height: 31.54,
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          marginLeft: 7.6,
          width: 90
      },
      startCircleSmall: {
        backgroundColor: '#73BB47',
        width: 37.33,
        height: 32.33,
        borderRadius: 16.165
      },
      yourLocation: {
        fontSize: 7,
        fontFamily: 'mont-reg',
        color: '#6A6060'
      },
      addressText: {
        color: '#000',
        fontFamily: 'mont-semi',
        fontSize: 10
      },
      stick: {
        position: 'absolute',
        top: 0,
        alignSelf: 'center',
        height: 74,
        width: 5,
        backgroundColor: '#000'
      },
      endCircleBig: {
        backgroundColor: 'rgba(255, 0, 0, 0.56)',
        width: 24,
        height: 24,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center'
      },
      endCircleSmall : {
        backgroundColor: 'rgba(255, 0, 0, 1)',
        width: 16,
        height: 16,
        borderRadius: 8
      },
      startTrekButton: {
        position: 'absolute',
        top: 15,
        left: 8,
        width: 35,
        height: 35,
        borderRadius: 9,
   //     backgroundColor: 'rgba(89, 172, 123, 1)',
        alignItems: 'center',
        justifyContent: 'center'
      },
      myLocationButton: {
        position: 'absolute',
        top: 15,
        right: 8,
        width: 35,
        height: 35,
        borderRadius: 9,
   //     backgroundColor: 'rgba(89, 172, 123, 1)',
        alignItems: 'center',
        justifyContent: 'center'
      }
});
