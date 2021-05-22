/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { Component, useState } from 'react';
import {
  StyleSheet,
  Dimensions,
  Alert
} from 'react-native';
//import Libary
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
//---------------------import Screen-----------------------------------//
import Home from "./src/screen/home/Home"
import Login from "./src/screen/login/Login"
import PersonalInfromation from "./src/screen/personalInformation/PersonalInfromation"
import PersonalInfromation_1 from "./src/screen/personalInformation/PersonInformation-1"
import PersonalInfromation_35 from "./src/screen/personalInformation/PersonInformation-35"
//--------------------------------------------------------------------//
import CustomDrawerContent from "./src/menu/users/vertical/drawerNavigation"
import tabBar from "./src/menu/users/horizontal/tabBar"
import InternetConnectionAlert from "react-native-internet-connection-alert";
import NetInfo from "@react-native-community/netinfo";
import AwesomeAlert from 'react-native-awesome-alerts';
const Stack = createStackNavigator();
const Drawering = createDrawerNavigator();
const { width, height } = Dimensions.get('window')
const componentHeight = height / 3

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <NavigationContainer>
        {/* <tabBar />
        <Stack.Navigator
      screenOptions={{headerShown:false,
      animationTypeForReplace:'pop'}}>
        
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />

      </Stack.Navigator> */}
        <InternetConnectionAlert>
          <Drawering.Navigator
            drawerStyle={{ width: width / 2, height: height, backgroundColor: "#ffffff" }}
            drawerContent={props => <CustomDrawerContent {...props} />}>
            <Drawering.Screen name='Home' component={Home} />
            <Drawering.Screen name='Login' component={Login} />
            <Drawering.Screen name='PersonalInfromation' component={tabBar} />
            <Drawering.Screen name='PersonalInfromation_1' component={PersonalInfromation_1} />
            <Drawering.Screen name='PersonalInfromation_35' component={PersonalInfromation_35} />
          </Drawering.Navigator>
        </InternetConnectionAlert>
      </NavigationContainer>
    );
  }
}
// const App = () => {

//   const [alertShow, setShowAlert] = useState(false)

//   const CheckConnectivity = () => {
//     // For Android devices
//     if (Platform.OS === "android") {
//       NetInfo.fetch().then(state => {
//         if (state.isConnected === false) {
//           Alert.alert("Không Có Kết Nối Internet. Vui Lòng Thử Lại !");
//         }

//         if (state.isConnected === true) {
//           this.props.navigation.navigate('Login')
//         }
//         console.log("Connection type", state.type);
//         console.log("Is connected?", state.isConnected);
//       });
//     }
//     else if (Platform.OS === "ios") {
//       // For iOS devices
//       NetInfo.isConnected.addEventListener(
//         "connectionChange",
//         this.handleFirstConnectivityChange
//       );
//     }
//   };
//   handleFirstConnectivityChange = isConnected => {
//     NetInfo.isConnected.removeEventListener(
//       "connectionChange",
//       this.handleFirstConnectivityChange
//     );

//     if (isConnected === false) {
//       Alert.alert("You are offline!");
//     } else {
//       Alert.alert("You are online!");
//     }
//   };
//   return (
//     <NavigationContainer>
//       <InternetConnectionAlert

//         onChange={() => {
//           Alert.alert("Không Có Kết Nối Internet. Vui Lòng Thử Lại !");
//         }}
//       >

//         <Drawering.Navigator
//           drawerStyle={{ width: width / 2, height: height, backgroundColor: "#ffffff" }}
//           drawerContent={props => <CustomDrawerContent {...props} />}>
//           <Drawering.Screen name='Home' component={Home} />
//           <Drawering.Screen name='Login' component={tabBar} />
//           <Drawering.Screen name='PersonalInfromation' component={PersonalInfromation} />
//           <Drawering.Screen name='PersonalInfromation_35' component={PersonalInfromation_35} />
//           <Drawering.Screen name='PersonalInfromation_1' component={PersonalInfromation_1} />
//         </Drawering.Navigator>
//       </InternetConnectionAlert>
//     </NavigationContainer>
//   );
// }
// export default App;
// {/* <Stack.Navigator
//       screenOptions={{headerShown:false,
//       animationTypeForReplace:'pop'}}>

//         <Stack.Screen name="Home" component={Home} />
//         <Stack.Screen name="Login" component={TapBars} />

//       </Stack.Navigator> */}