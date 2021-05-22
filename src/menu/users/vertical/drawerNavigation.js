import React, { Component } from 'react';
import {
    View, StyleSheet, Text, Image,
    TouchableOpacity, Dimensions
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/FontAwesome'
import { Avatar, Drawer } from 'react-native-paper';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Entypo from "react-native-vector-icons/Entypo"
const { height, width } = Dimensions.get('window')
const componentHeight = height / 3
import {FONT,COLORS} from "../../../componets/common/constant/themes"
// import Home from "../../../srceen/home/Home"
const CustomDrawerContent = (props) => {
    return (

        <View style={{ flex: 1, flexDirection: 'column' }}>
            <DrawerContentScrollView {...props} >
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
                        <Ionicons name="bars" size={20} color='#218505' />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, alignSelf: 'center', marginTop: 2 }}>
                    <Avatar.Image
                        source={require('../../../assets/images/Logo-1.jpg')} size={75} />
                </View>
                <View style={{ flex: 1, alignSelf: 'center', marginTop: 10 }}>
                    <Text
                        style={{ textAlign: 'center',...FONT.textH2_LightGreen}}> Nguyễn Hữu Phát</Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'column' }}>
                    <Drawer.Section style={{ marginTop: 15 }}>
                        <DrawerItem icon={({ color, size }) => (<Ionicons name="home" color={'#48fa07'} size={16} />)}
                            label="Home"
                            labelStyle={{ color: '#48fa07', fontSize: 16 }}
                            onPress={() => { props.navigation.navigate('Home')}}
                        />
                        {/* <DrawerItem icon={({ color, size }) => (<Entypo name="login" color={'#48fa07'} size={16} />)}
                            label="Đăng Nhập"
                            labelStyle={{ color: '#48fa07', fontSize: 16 }}
                            onPress={() => { props.navigation.navigate('Thông tin cá nhân') }}
                        /> */}
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <View style={{ marginBottom: 25, backgroundColor: '#48fa07', alignItems: 'center', justifyContent: 'center', borderTopColor: '#f4f4f4', borderTopWidth: 1 }}>
                <Text style={{ fontSize: 15 }}>Version 1.0</Text>
            </View>
        </View>
    );
}
export default CustomDrawerContent;

