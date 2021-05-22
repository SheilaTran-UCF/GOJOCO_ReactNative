import React, { Component, useState } from 'react';
import {
    View, StyleSheet, Text, Dimensions, KeyboardAvoidingView, Alert, TextInput, TouchableOpacity
} from 'react-native';
import { COLORS, FONT } from "../../componets/common/constant/themes"
import Ionicons from "react-native-vector-icons/Ionicons"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Entypo from "react-native-vector-icons/Entypo"
const { width, height } = Dimensions.get('window')
import { Picker } from '@react-native-picker/picker'
import {
MediumTouchableOpacity,
    NumberTextInput,
    PasswordTextInput,
    Maps,
    LableText,
    NumberPhoneInforTextInput,
    LableTextWhite,
} from "../../componets/index"

const Login = ({ navigation }) => {
    const [userName, setUserName] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [passWord, setPassWord] = useState();

    let dataLogin = {
        "username": "84929292423",
        "password": "123456@Abc",
        "statuslogin": true
    }
    //====================Kiem tra dang nhap==================//
    const checkLogin = () => {
        if (phoneNumber === dataLogin.username
            && passWord === dataLogin.password) {
            navigation.navigate('PersonalInfromation')
            Alert.alert('Đăng nhập thành công')
        }
        else {
            Alert.alert('Đăng nhập thất bại !')
        }
    }
    //======================================================//
    return (

        <View style={{ flex: 1, flexDirection: 'column' }}>
            <Maps />
            <View style={{ flex: 1.5, justifyContent: 'center'  }}>
            </View>
            {/* ========================================================= */}
            <View style={{ flex: 1, alignSelf: 'center', justifyContent: 'center' }}></View>
            <View style={{
                flex: 2, flexDirection: 'column',
                marginHorizontal:5,
                borderColor: COLORS.lightGreen,
                borderWidth: 2.5,
                top:-20,
                borderRadius:5,

            }}>
  <KeyboardAvoidingView
            style={{flex:2}}
            behavior={Platform.OS==='android'?'padding':'position'} enabled>
                <View style={{ flex: 0.12, backgroundColor: COLORS.mediumGreen}}>
                    <View style={{top:4,justifyContent: 'center', flexDirection: 'row', alignSelf: 'center' }}>
                        <FontAwesome name="phone" color={COLORS.white} size={25} />
                        <LableTextWhite
                            text={'  SỐ ĐIỆN THOẠI'} />
                    </View>
                </View>
                <View style={{ flex: 1, justifyContent:'center'}}>
                    <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                        <Ionicons name="earth" color={COLORS.lightGreen} size={20} />
                        <LableText
                            text={' Chọn quốc gia     '} />
                        <View style={{ left: 30, flexDirection: 'row',marginHorizontal:5 }}>
                        <FontAwesome name="phone" color={COLORS.lightGreen} size={20} />
                            <LableText
                                text={'  Nhập số điện thoại'} />
                        </View>
                    </View>
                  
                    <View style={{
                        flexDirection: 'row',
                        borderRadius: 4, 
                        width: width - 25,
                        borderWidth: 1.5,
                        borderColor: COLORS.borderColorLightGreen,
                        height:45,
                        backgroundColor:COLORS.brWhite,
                        left:5,
                    }}>
                        <Picker
                            style={{ width: width - 270, fontSize: 15, fontWeight: 'bold', top: -10 }}
                            mode='dropdown'>
                            <Picker.Item label="Mã quốc gia" />
                            <Picker.Item label="+84" value="vn" />
                            <Picker.Item label="+1" value="usa" />
                            <Picker.Item label="+7" value="rs" />
                            <Picker.Item label="+81" value="jp" />
                        </Picker>

                        <TextInput
                            placeholder={'Nhập số điện thoại'}
                            value={phoneNumber}
                            onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
                            style={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}>
                        </TextInput>
                    </View>
                 
                    <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                        <Ionicons style={{}} name="lock-closed" color={COLORS.lightGreen} size={20} />
                        <LableText
                            text={'  Nhập mật khẩu'} />

                    </View>
                    <View style={{ top: 5,height:45,flexDirection:"row" ,left:5}}>
                        <PasswordTextInput
                            placeholder={'Nhập mật khẩu'}
                            value={passWord}
                            onChangeText={(passWord) => setPassWord(passWord)}>
                            </PasswordTextInput>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'flex-end',top:5,right:5}}>
                    <TouchableOpacity>
                      <Text style={{color:COLORS.mediumGreen,fontSize:16,fontWeight:'bold'}}>Quên mật khẩu?</Text>
                    </TouchableOpacity>
                    </View>
                    <View style={{alignSelf:'center',top:10}}>
                   
                    <MediumTouchableOpacity
                     touchableOpacityName="Đăng nhập"
                     onPress={() => checkLogin()}
                    >

                    </MediumTouchableOpacity>
                    </View>
                </View>
                {/* ========================================================= */}
                </KeyboardAvoidingView>
            </View>
        
        </View>
    );
}
export default Login;