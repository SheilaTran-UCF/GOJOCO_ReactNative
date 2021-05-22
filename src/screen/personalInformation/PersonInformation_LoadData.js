import React, { Children, Component, useState } from 'react'
import {
    View,
    Text,
    ImageBackground,
    Dimensions,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    TextInput,
    ScrollView,
} from "react-native"
//---------------------------Import Componet-----------------------------//
import {
    HeaderText,
    LableText,
    SmallTouchableOpacity,
    InforContainer,
    SmallTextInput,
    NumberPhoneInforTextInput,
    EmailInforTextInput,
    ErrorText,
} from "../../componets/index"
//------------------------- Add Library ------------------------------------//
import DateTimePicker from "react-native-modal-datetime-picker";
const { width, height } = Dimensions.get('window')
const componentHeight = height / 3
import PropTypes from 'prop-types';
import moment from "moment"
import { Avatar, Drawer } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker'
import { COLORS } from "../../componets/common/constant/themes"
import AntDesign from "react-native-vector-icons/AntDesign"
// import EvilIcons from "react-native-vector-icons/EvilIcons"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Zocial from "react-native-vector-icons/Zocial"
import Ionicons from "react-native-vector-icons/Ionicons"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
//----------------------------------------------------------------------------//
export default class PersonalInfromation extends React.Component {
    static propTypes = {
        dateDisplay: PropTypes.string,
        onChange: PropTypes.func,
        showDate: PropTypes.string
    }
    constructor(props) {
        super(props);
        this.state = {
            //----------Value---------//
            surName: '',
            middleName: '',
            dateOfBirth: '',
            gender: '',
            phoneNumber: '',
            email: '',
            maritalStatus: '',
            namee: '',
            //------------------------//
            UserFirstName : '',
            UserMiddleName : '',
            UserLastName :'',
            UserFullName : '',
            UserBirthDay : '',
            UserSex :'',
            UserPhone :'',
            Email :'',
            MaritalStatus :'',
            //------------------------//
            isDateTimePickerVisible: false,
            dateDisplay: '',
        }
    }
    data = {
        "id": 9,
        "UserFirstName": "Phạm",
        "UserMiddleName": "Sỹ",
        "UserLastName": "Tấn",
        "UserFullName": "Phạm Sỹ Tấn",
        "UserBirthDay": "1982-11-12",
        "UserSex": "Nam",
        "UserPhone": "84973431111",
        "Email": "84973431111@gojoco.online",
        "UserIDCard": "12345678900",
        "IDCardPlaceOfIssue": "Đà nẵng",
        "UserApplyDate": "1999-04-06",
        "UserNationality": "Việt Nam",
        "MaritalStatus": "Độc Thân",
        "AddressIDProfile": 16,
        "UserImage": null,
        "CMND1": "/media/images/users/84973431111/profile/cmnd1/20210509/21/20210509211040105.png",
        "CMND2": "/media/images/users/84973431111/profile/cmnd2/20210509/21/20210509211049880.png",
        "address": {
            "id": 16,
            "AddressLine": "12, 10, Phường Tân Phú, Quận 7, Thành Phố Hồ Chí Minh, Việt Nam",
            "LocationLatAddress": 10.736442956560222,
            "LocationLngAddress": 106.71763532560071
        }
    }
    //=====================================================================//
    //============================ Date time picker ======================//
    showDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: true });
    };
    hideDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: false });
    };
    handleDatePicked = date => {
        this.setState({
            isDateTimePickerVisible: false,
            dateDisplay: moment(date).format('DD / MM / YYYY'),
            // showDate : moment(date).toString(''),

        })
    };
    //============================ Date time picker ======================//
    render() {
        return ( 
            <ImageBackground
                style={{ width: width, height: height }}
                resizeMode="stretch"
                blurRadius={1}
                source={require('../../assets/images/mapvietnam.png')}>
    {/* -----------------------------Header Container----------------------------------- */}
                <SafeAreaView style={{ flex: 1, flexDirection: 'column' }}>
                    <View style={{ flex: 2, backgroundColor: COLORS.brMediumGreen }}>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <View style={{ flex: 0.1 }}>
                                <TouchableOpacity>
                                    <Ionicons name="arrow-back-outline" color={COLORS.white} size={30} />
                                </TouchableOpacity>
                            </View>
                            <View style={{ alignItems: 'center', flex: 0.8 }}>
                                <HeaderText
                                    text='Thông tin cá nhân'
                                />
                            </View>
                        </View>
                    </View>
                {/* --------------------------------------------------------------------------- */}
                {/* --------------------------Information-------------------------------------- */}
                {/* ---------------------------Ho va ten--------------------------------------- */}
                    <KeyboardAvoidingView
                    style={{ flex: 12 }}
                    behavior={Platform.OS==='android'?'padding':'position'} enabled>
                        <View style={{ flex: 12,alignItems:'center',top:30 }}>
                            {/* ---------------inforcontainer---------------- */}
                                         <InforContainer />
                            {/* --------------------------------------------- */}
                            <View style={{ flex: 2, alignItems: 'center' }}>
                                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', top: 2 }}>
                                    <FontAwesome name='pencil' color={COLORS.lightGreen} size={20} />
                                    <LableText
                                        text={' Họ và tên* '} />
                                </View>
                                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                                    <View style={{ flex: 1, left: 15 }}>
                                       
                                        <SmallTextInput
                                            // onBlur={() => this.surNameValidate()}
                                            value={this.props.UserFirstName}
                                            onChangeText={UserFirstName => this.setState({ UserFirstName })}
                                            placeholder={' Họ '}>
                                            {this.data.UserFirstName}
                                        </SmallTextInput>
                                     <ErrorText text={this.state.surNameErr} />
                                        
                                    </View>

                                    <View style={{ flex: 1, left: 15 }}>
                                      
                                        <SmallTextInput
                                            // onBlur={() => this.middleNameValidate()}
                                            value={this.props.UserMiddleName}
                                            onChangeText={(UserMiddleName) => this.setState({ UserMiddleName })}
                                            placeholder={' Tên lót '}>
                                            {this.data.UserMiddleName}
                                        </SmallTextInput>
                                      
                                        <ErrorText text={this.state.middleNameErr} />
                                    </View>
                                    <View style={{ flex: 1, left: 15 }}>
                                      
                                        <SmallTextInput
                                            // onBlur={() => this.nameValidate()}
                                            value={this.props.UserLastName}
                                            onChangeText={(UserLastName) => this.setState({ UserLastName })}
                                            placeholder={' Tên '}
                                        >
                                            {this.data.UserLastName}
                                        </SmallTextInput>
                                       
                                        <ErrorText text={this.state.nameErr} />
                                    </View>
                                </View>
                            </View>
                            {/* -----------------------ngay sinh----------------------------- */}
                            <View style={{ flex: 2, alignItems: 'center', top: 3 }}>
                                <View style={{ flex: 5, flexDirection: 'row', justifyContent: 'center' }}>
                                    <FontAwesome style={{ top: 5 }} name="birthday-cake" color={COLORS.lightGreen} size={20} />
                                    <LableText
                                        text={' Ngày sinh*'} />
                                </View>
                                <View style={{
                                    flex: 5, backgroundColor: 'white', opacity: 0.6, borderRadius: 5, width: width - 20, borderWidth: 1.5,
                                    borderColor: COLORS.borderColorLightGreen
                                }}>
                                    <DateTimePicker
                                        minimumDate={new Date(1960, 1, 0)}
                                        isVisible={this.state.isDateTimePickerVisible}
                                        onConfirm={this.handleDatePicked}
                                        onCancel={this.hideDateTimePicker}
                                        mode='date'>

                                    </DateTimePicker>
                                    <View style={{ flex: 1, flexDirection: 'row' }}>
                                        <View style={{ flex: 0.4, left: 10 }}>
                                            <TouchableOpacity onPress={this.showDateTimePicker}>
                                                <AntDesign style={{ top: 5 }} name="calendar" color={COLORS.lightGreen} size={30} />
                                            </TouchableOpacity>
                                           <View style={{top:10}}>
                                           <ErrorText text={this.state.dateErr} />
                                           </View>
                                        </View>
                                        <View style={{ flex: 0.6 }}>
                                            <TextInput
                                                // onBlur={() => this.dateOfBirthValidate()}
                                                style={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}
                                                value={this.props.dateDisplay}
                                                onChangeText={(dateDisplay) => this.setState({ dateDisplay })}>
                                                {this.state.dateDisplay}
                                            </TextInput>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            {/* ----------------------gioi tinh----------------------------- */}
                            <View style={{ flex: 2, alignItems: 'center' }}>
                                <View style={{ flex: 5, flexDirection: 'row', top: 5 }}>
                                    <FontAwesome style={{ top: 5 }} name="intersex" color={COLORS.lightGreen} size={20} />
                                    <LableText
                                        text={' Giới tính*'} />
                                </View>

                                <View style={{
                                    borderWidth: 1.5,
                                    borderColor: COLORS.borderColorLightGreen, flex: 5, backgroundColor: 'white',
                                    opacity: 0.6, borderRadius: 4, width: width - 20,
                                }}>
                                    <Picker
                                        style={{ width: width - 20, fontSize: 16, fontWeight: 'bold',top:-10 }}
                                        value={this.props.gender}
                                        onValueChange={(gender) => this.setState({ gender })}
                                        mode='dropdown'>
                                        <Picker.Item label="Chọn giới tính" />
                                        <Picker.Item label="Nam" value="Nam" />
                                        <Picker.Item label="Nữ" value="Nữ" />
                                    </Picker>

                                    <ErrorText text={this.state.genderErr} />
                                </View>
                            </View>
                            {/* ---------------------------sdt-------------------------------- */}
                
                            <View style={{ flex: 2, alignItems: 'center' }}>
                                <View style={{ flex: 5, flexDirection: 'row', alignSelf: 'center' }}>
                                    <FontAwesome style={{ top: 5 }} name="phone" color={COLORS.lightGreen} size={20} />
                                    <LableText
                                        text={'  Số điện thoại*'} />
                                </View>
                                <View style={{ flex: 5 }}>
                                    <NumberPhoneInforTextInput
                                        // onBlur={() => this.phoneNumberValidate()}
                                        placeholder={'Nhập số điện thoại'}
                                        value={this.props.UserPhone}
                                        onChangeText={(UserPhone) => this.setState({ UserPhone })}
                                    >
                                        {this.data.UserPhone}
                                    </NumberPhoneInforTextInput>
                                    <ErrorText text={this.state.phoneNumberErr} />
                                </View>
                            </View>
                            {/* --------------------------email-------------------------------- */}

                            <View style={{ flex: 2, alignItems: 'center' }}>
                               
                                <View style={{ flex: 4, alignSelf: 'center', flexDirection: 'row' }}>
                                    <Zocial style={{ top: 5 }} name="email" color={COLORS.lightGreen} size={20} />
                                    <LableText
                                        text={'  Email*'} />
                                </View>
                              
                                <View style={{flex:4}}>
                                <EmailInforTextInput
                                        // onBlur={() => this.emailValidate()}
                                        placeholder={'Nhập Email'}
                                        value={this.props.Email}
                                        onChangeText={(Email) => this.setState({ Email })}>
                                        {this.data.Email}
                                    </EmailInforTextInput>
                                    <ErrorText text={this.state.emailErr} />
                                </View>
                               
                            </View>

                            {/* -------------------------tinh trang hon nhan--------------------------- */}
                            <View style={{ flex: 2, alignItems: 'center' }}>
                                <View style={{ flex: 4, flexDirection: 'row', alignSelf: 'center' }}>
                                    <MaterialCommunityIcons style={{ top: 5 }} name="ring" color={COLORS.lightGreen} size={20} />
                                    <LableText
                                        text={'Tình trạng hôn nhân*'} />
                                </View>
                                <View style={{
                                    borderWidth: 1.5,
                                    borderColor: COLORS.borderColorLightGreen, flex: 5, backgroundColor: 'white',
                                    opacity: 0.7, borderRadius: 4, width: width - 20,
                                }}>

                                    <Picker
                                        style={{ width: width - 20, fontSize: 16, fontWeight: 'bold', top:-5}}
                                        value={this.props.maritalStatus}
                                        mode='dropdown'
                                        onValueChange={(maritalStatus) => this.setState({ maritalStatus })}>
                                        <Picker.Item label="Tình trạng hôn nhân" />
                                        <Picker.Item label="Đã Kết Hôn" value="Đã Kết Hôn" />
                                        <Picker.Item label="Độc Thân" value="Độc Thân" />
                                    </Picker>
                                    <ErrorText text={this.state.maritalStatusErr} />
                                </View>
                            </View>
                        </View>
                        </KeyboardAvoidingView>
                    {/* ---------------------------------------------------- */}
                    <View style={{ flex: 4, alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{top:-20}}>
                            <SmallTouchableOpacity
                                onPress={
                                    () => {
                                        {
                                            this.props.navigation.navigate('PersonalInfromation_1',
                                                {
                                                    paramsSurName: this.data.UserFirstName,
                                                    paramsmiddleName: this.data.UserMiddleName,
                                                    paramsName: this.data.UserLastName,
                                                    paramsGender: this.data.UserSex,
                                                    paramPhoneNumber: this.data.UserPhone,
                                                    paramsEmail: this.data.Email,
                                                    paramMaritalStatus: this.data.MaritalStatus,
                                                    paramsDataOfBirth: this.data.UserBirthDay,
                                                })
                                        }
                                    }
                                }
                                touchableOpacityName="Tiếp tục"
                            />
                        </View>
                    </View>
                </SafeAreaView>
            </ImageBackground>
          
        );
    }
}
