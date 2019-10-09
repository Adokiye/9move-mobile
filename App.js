/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  AsyncStorage,
  Alert,
  TouchableOpacity
} from "react-native";
import Splash from "./components/Splash";
import Welcome from "./components/AuthScreens/Welcome";
import SignIn from "./components/AuthScreens/SignIn"
import SignUp from "./components/AuthScreens/SignUp"
import Verify from "./components/AuthScreens/Verify"
import Map from "./components/Map"
import WelcomeSignIn from "./components/AuthScreens/WelcomeSignIn"
import WelcomeSignUp from "./components/AuthScreens/WelcomeSignUp"
import { createStackNavigator } from "react-navigation";
type Props = {};
const RootStack = createStackNavigator({
  Home: {
    screen: Welcome
  },
  SignIn: {
    screen: SignIn
 },
  SignUp: {
    screen: SignUp
  },
  Verify: {
    screen: Verify
  },
  WelcomeSignIn: {
    screen: WelcomeSignIn
  },
  WelcomeSignUp: {
    screen: WelcomeSignUp
  },
  Map: {
    screen: Map
  }
});

class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      timePassed: false
    };
  }
  componentDidMount() {
    // SplashScreen.hide()
  }
  render() {
    setTimeout(() => {
      this.setState({ timePassed: true });
    }, 500);
    if (this.state.timePassed) {
      return (
        <View style={styles.container}>
          <RootStack />
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Splash />
        </View>
      );
    }
  }
}
/*function connectWithStore(store, WrappedComponent, ...args) {
  var ConnectedWrappedComponent = connect(...args)(WrappedComponent);
  return function(props) {
    return <ConnectedWrappedComponent {...props} store={store} />;
  };
}*/
/*const App = connectWithStore(
  store,
  reduxApp,
  mapStateToProps,
 // mapDispatchToProps
);*/
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  }
});
