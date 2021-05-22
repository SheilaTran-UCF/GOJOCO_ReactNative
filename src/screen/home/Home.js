
import React, { Component } from 'react';
import {
    ImageBackground, View, StyleSheet, Text, Image,
    TouchableOpacity, TextInput, Dimensions, Alert, Platform
} from 'react-native';
const { width, height } = Dimensions.get('window')
const componentHeight = height / 3
import { CommonHome, MediumTouchableOpacity, Maps } from "../../componets/index"
import Icon from "react-native-vector-icons/FontAwesome"
import NetInfo from "@react-native-community/netinfo";
import AwesomeAlert from 'react-native-awesome-alerts';
import { COLORS } from "../../componets/common/constant/themes"
import { color } from 'react-native-reanimated';
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.state = { showAlert: false };
    }
    showAlert = () => {
        this.setState({
            showAlert: true
        });
    };
    hideAlert = () => {
        this.setState({
            showAlert: false
        });
    };

    CheckConnectivity = () => {
        // For Android devices
        if (Platform.OS === "android") {
            NetInfo.fetch().then(state => {
                if (state.isConnected === false) {
                    // Alert.alert("Không Có Kết Nối Internet. Vui Lòng Thử Lại !");
                    this.showAlert()
                }

                if (state.isConnected === true) {
                    this.props.navigation.navigate('Login')
                }
                console.log("Connection type", state.type);
                console.log("Is connected?", state.isConnected);
            });
        }
        else if (Platform.OS === "ios") {
            // For iOS devices
            NetInfo.isConnected.addEventListener(
                "connectionChange",
                this.handleFirstConnectivityChange
            );
        }
    };
    handleFirstConnectivityChange = isConnected => {
        NetInfo.isConnected.removeEventListener(
            "connectionChange",
            this.handleFirstConnectivityChange
        );

        if (isConnected === false) {
            Alert.alert("You are offline!");
        } else {
            Alert.alert("You are online!");
        }
    };
    render() {
        const { showAlert } = this.state;
        return (

            <View style={{ flex: 1, flexDirection: 'column' }}>
                <Maps />
                <AwesomeAlert
                    show={showAlert}
                    showProgress={false}
                    title=" Không Có Kết Nối Internet "
                    message="Vui lòng thử lại kết nối của bạn !"
                    closeOnTouchOutside={true}
                    closeOnHardwareBackPress={false}
                    showCancelButton={true}
                    titleStyle={{ color: 'red'}}
                    messageStyle={{ color: COLORS.h4Black }}
                    cancelText="Đồng ý "
                    cancelButtonColor={COLORS.lightGreen}
                    cancelButtonStyle={{width:65,height:35}}
                    cancelButtonTextStyle={COLORS.h4White}
                    // confirmText="Yes, delete it"
                    // showConfirmButton={true}
                    onCancelPressed={() => {
                        this.hideAlert();
                    }}
                    onConfirmPressed={() => {
                        this.hideAlert();
                    }}
                />
                {/* <TouchableOpacity style={{ marginLeft: 10, position: "absolute" }} 
                onPress={() => this.props.navigation.openDrawer()}>
                    <Icon name="bars" size={20} color='#218505' />
                </TouchableOpacity> */}

                <View style={{ flex: 1, alignSelf: 'center', justifyContent: 'center' }}>
                    <Image style={{ width: componentHeight, height: componentHeight, resizeMode: 'contain' }}
                        source={require('../../assets/images/logo.png')} />
                </View>
                <CommonHome />
                <View style={{ flex: 1, justifyContent: 'center', alignSelf: 'center' }}>
                    <MediumTouchableOpacity
                        onPress={
                            () => this.CheckConnectivity()
                            // () => this.showAlert()
                        }
                        touchableOpacityName={'Đăng Nhập'} />
                </View>
            </View>
        );
    }
}