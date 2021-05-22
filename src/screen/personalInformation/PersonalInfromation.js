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
//-----------------------------IMPORT COMPONENTS-------------------------------//
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
//---------------------------------ADD LIBRARY----------------------------------//
import DateTimePicker from "react-native-modal-datetime-picker";
const { width, height } = Dimensions.get('window')
const componentHeight = height / 3
import PropTypes from 'prop-types';
import moment from "moment"
import { Picker } from '@react-native-picker/picker'
import { COLORS } from "../../componets/common/constant/themes"
import AntDesign from "react-native-vector-icons/AntDesign"
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
            //----------- error ------//
            surNameErr: '',
            middleNameErr: '',
            nameErr: '',
            phoneNumberErr: '',
            emailErr: '',
            genderErr: '',
            dateErr: '',
            maritalStatusErr: "",
            //----------------------//
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
    //=============================KT CHI CHO PHEP NHAP CHƯ=======================================//
    checkValidAlphabet() {
        let validtion = true
        let rjx = /^[a-zA-Z]+$/
        let isValid_surName = rjx.test(this.state.surName)
        let isValid_middleName = rjx.test(this.state.middleName)
        let isValid_namee = rjx.test(this.state.namee)
        if (isValid_surName == false) {
            this.setState({ surNameErr: 'Trống hoặc sai định dạng!' })
            validtion = false
        }
        else {
            this.setState({ surNameErr: "" })
        }
        if (isValid_middleName == false) {
            this.setState({ middleNameErr: 'Trống hoặc sai định dạng!' })
            validtion = false
        }
        else {
            this.setState({ middleNameErr: "" })
        }
        if (isValid_namee == false) {
            this.setState({ nameErr: 'Trống hoặc sai định dạng!' })
            validtion = false
        }
        else {
            this.setState({ nameErr: "" })
        }
        return validtion
    }
    //=============================VALID FORMAT EMAIL=================================//
    checkValidEmail = () => {
        let validtion = true
        let rjx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/
        let isValid_Email = rjx.test(this.state.email)
        if (isValid_Email == false) {
            this.setState({ emailErr: 'Trống hoặc sai định dạng!' })
            validtion = false
        }
        else {
            this.setState({ emailErr: "" })
        }
        return validtion
    }
    //============================================================================//

    //========================VALID PHONE NUMBER==================================//
    checkValidPhoneNumber() {
        let validtion = true
        let rjx = /^0-9/
        let isValid_PhoneNumber = rjx.test(this.state.phoneNumber)
        if (isValid_PhoneNumber == false) {
            this.setState({ phoneNumberErr: 'Trống hoặc sai định dạng!' })
            validtion = false
        }
        else {
            this.setState({ phoneNumberErr: "" })
        }
        return validtion
    }
  
    //============================================================================//
    //========================VALID DATE TIME====================================//
    checkValidDateTime() {
        let validation = true
        let rjx = /^([0-9])*[/]*([1-9])*[/]*([1-9])+$/
        let isValid_Date = rjx.test(this.state.dateDisplay)
        if (isValid_Date == false) {
            this.setState({ dateErr: 'Trống hoặc sai định dạng!' })
            validation = false
        }
        else {
            this.setState({ dateErr: '' })

        }
        return validation
    }
    //==========================VALID TEXT INPUT =================================//
    //--------------surName-----------//
    surNameValidate() {
        if (this.state.surName == "") {
            this.setState({ surNameErr: 'Trống' })
        }
        else {
            this.setState({ surNameErr: "" })
        }
    }

    //--------------------------------//
    //--------------middleName--------//
    middleNameValidate() {
        if (this.state.middleName == "") {
            this.setState({ middleNameErr: 'Trống' })
        }
        else {
            this.setState({ middleNameErr: "" })
        }
    }
    //----------------------------//
    //--------------Name---------//
    nameValidate() {
        if (this.state.namee == "") {
            this.setState({ nameErr: 'Trống' })
        }
        else {
            this.setState({ nameErr: "" })
        }
    }
    //----------------------------//
    //--------------Phone number--------//
    phoneNumberValidate() {
        if (this.state.phoneNumber == "") {
            this.setState({ phoneNumberErr: 'Trống' })
          
        }
        else {
            this.setState({ phoneNumberErr: "" })
        }
        
    }
    //----------------------------//
    //--------------email--------//
    emailValidate() {
        if (this.state.email == "") {
            this.setState({ emailErr: 'Trống' })
        }
        else {
            this.setState({ emailErr: "" })
        }
    }
    //-------------------------------------//
    //--------------giới tính--------------//
    genderValidate() {
        if (this.state.gender === "Nam" || this.state.gender === "Nữ") {
            this.setState({ genderErr: '' })
         
        }
        else if(this.state.gender != "Nam" && this.state.gender != "Nữ") {
            this.setState({ genderErr: "Chưa chọn" })
        }
    }
    //-----------------------------------------------//
    //--------------tinh trang hon nhan--------------//
    maritalValidate() {
        if (this.state.maritalStatus === "Độc Thân" || this.state.maritalStatus === "Đã Kết Hôn") {
            this.setState({ maritalStatusErr: '' })
        }
        else if (this.state.gender != "Độc Thân" && this.state.gender != "Đã Kết Hôn"){
            this.setState({ maritalStatusErr: "Chưa chọn" })
        }
    }
    //----------------------------// 
    //--------------ngày sinh--------------//
    dateOfBirthValidate() {
        if (this.state.dateDisplay == "") {
            this.setState({ dateErr: 'Chưa chọn' })
        }
        else {
            this.setState({ dateErr: '' })
        }
    }
    //----------------------------//
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
                                <TouchableOpacity
                                    onPress={()=>this.props.navigation.navigate('Login')}
                                >
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
                    <KeyboardAvoidingView
                    style={{ flex: 12 }}
                    behavior={Platform.OS==='android'?'padding':'position'} enabled>
                        <View style={{ flex: 12,alignItems:'center',top:30}}>
                            {/* ---------------inforcontainer---------------- */}
                                         <InforContainer />
                            {/* --------------------------------------------- */}

                            {/* =======================HO VA TEN============================ */}
                            <View style={{ flex: 2, alignItems: 'center' }}>
                                <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'center', top: 2 }}>
                                    <FontAwesome name='pencil' color={COLORS.lightGreen} size={20} />
                                    <LableText
                                        text={' Họ và tên* '} />
                                </View>
                                <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'center' }}>
                                    <View style={{ flex: 0.5, left: 15 }}>
                                       
                                        <SmallTextInput
                                            onBlur={() => this.surNameValidate()}
                                            value={this.props.surName}
                                            onChangeText={surName => this.setState({ surName })}
                                            placeholder={' Họ '}>
                                            {/* {this.data.UserFirstName} */}
                                        </SmallTextInput>
                                     <ErrorText text={this.state.surNameErr} />
                                        
                                    </View>

                                    <View style={{ flex: 0.5, left: 15 }}>
                                      
                                        <SmallTextInput
                                            onBlur={() => this.middleNameValidate()}
                                            value={this.props.middleName}
                                            onChangeText={(middleName) => this.setState({ middleName })}
                                            placeholder={' Tên lót '}>
                                            {/* {this.data.UserMiddleName} */}
                                        </SmallTextInput>
                                      
                                        <ErrorText text={this.state.middleNameErr} />
                                    </View>
                                    <View style={{ flex: 0.5, left: 15 }}>
                                      
                                        <SmallTextInput
                                            onBlur={() => this.nameValidate()}
                                            value={this.props.namee}
                                            onChangeText={(namee) => this.setState({ namee })}
                                            placeholder={' Tên '}
                                        >
                                            {/* {this.data.UserLastName} */}
                                        </SmallTextInput>
                                       
                                        <ErrorText text={this.state.nameErr} />
                                    </View>
                                </View>
                            </View>
                            {/* ================================================================= */}
                           {/* ===========================NGAY SINH=============================== */}
                            <View style={{ flex: 2, alignItems: 'center', top: 3 }}>
                                <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'center' }}>
                                    <FontAwesome style={{ top: 5 }} name="birthday-cake" color={COLORS.lightGreen} size={20} />
                                    <LableText
                                        text={' Ngày sinh*'} />
                                </View>
                                <View style={{
                                    flex: 2.5, backgroundColor: 'white', opacity: 0.6, borderRadius: 5, width: width - 20, borderWidth: 1.5,
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
                                                onBlur={() => this.dateOfBirthValidate()}
                                                style={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}
                                                value={this.props.dateDisplay}
                                                onChangeText={(dateDisplay) => this.setState({ dateDisplay })}>
                                                {this.state.dateDisplay}
                                            </TextInput>
                                          
                                        </View>
                                      
                                    </View>
                                </View>
                            </View>
                              {/* ================================================================= */}
                            {/* ============================GIOI TINH============================== */}
                            <View style={{ flex: 2, alignItems: 'center' }}>
                                <View style={{ flex: 2, flexDirection: 'row', top: 5 }}>
                                    <FontAwesome style={{ top: 5 }} name="intersex" color={COLORS.lightGreen} size={20} />
                                    <LableText
                                        text={' Giới tính*'} />
                                </View>

                                <View style={{
                                    borderWidth: 1.5,
                                    borderColor: COLORS.borderColorLightGreen, flex: 2, backgroundColor: 'white',
                                    opacity: 0.6, borderRadius: 4, width: width - 20,
                                }}>
                                    <Picker
                                        style={{ width: width - 20, fontSize: 16, fontWeight: 'bold',top:-10}}
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
                              {/* ================================================================= */}
                             {/* ===========================SO DIEN THOAI=========================== */}
                
                            <View style={{ flex: 2, alignItems: 'center' }}>
                                <View style={{ flex: 2, flexDirection: 'row', alignSelf: 'center' }}>
                                    <FontAwesome style={{ top: 5 }} name="phone" color={COLORS.lightGreen} size={20} />
                                    <LableText
                                        text={'  Số điện thoại*'} />
                                </View>
                                <View style={{ flex: 3 }}>
                                    <NumberPhoneInforTextInput
                                        onBlur={() => this.phoneNumberValidate()}
                                        placeholder={'Nhập số điện thoại'}
                                        value={this.props.phoneNumber}
                                        onChangeText={(phoneNumber) => this.setState({ phoneNumber })}
                                    >
                                  
                                    </NumberPhoneInforTextInput>
                                    <ErrorText text={this.state.phoneNumberErr} />
                                </View>
                            </View>
                              {/* ================================================================= */}
                             {/* ============================EMAIL================================= */}

                            <View style={{ flex: 2, alignItems: 'center' }}>
                               
                                <View style={{ flex: 2, alignSelf: 'center', flexDirection: 'row' }}>
                                    <Zocial style={{ top: 5 }} name="email" color={COLORS.lightGreen} size={20} />
                                    <LableText
                                        text={'  Email*'} />
                                </View>
                              
                                <View style={{flex:3.5}}>
                                <EmailInforTextInput
                                        onBlur={() => this.emailValidate()}
                                        placeholder={'Nhập Email'}
                                        value={this.props.email}
                                        onChangeText={(email) => this.setState({ email })}>
                                      
                                    </EmailInforTextInput>
                                    <ErrorText text={this.state.emailErr} />
                                </View>
                               
                            </View>
                            {/* ========================================================================== */}
                             {/* =============================HON NHAN==================================== */}
                            <View style={{ flex: 2, alignItems: 'center' }}>
                                <View style={{ flex: 2, flexDirection: 'row', alignSelf: 'center' }}>
                                    <MaterialCommunityIcons style={{ top: 5 }} name="ring" color={COLORS.lightGreen} size={20} />
                                    <LableText
                                        text={'Tình trạng hôn nhân*'} />
                                </View>
                                <View style={{
                                    borderWidth: 1.5,
                                    borderColor: COLORS.borderColorLightGreen, flex: 2, backgroundColor: 'white',
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
                      {/* ======================================================================== */}
                       
                    {/* ==========================TOUCHABLE OPACITY============================================= */}
                    <View style={{ flex: 4, alignItems: 'center', justifyContent: 'center'}}>
                        <View style={{top:-20}}>
                            <SmallTouchableOpacity
                                onPress={
                                    () => {
                                        if (this.checkValidAlphabet() == true
                                            || this.checkValidEmail() == true
                                            || this.checkValidPhoneNumber() == true
                                            || this.checkValidDateTime() == true
                                            || this.genderValidate()
                                            || this.maritalValidate()
                                        ) 
                                        {
                                            this.props.navigation.navigate('PersonalInfromation_1',
                                                {
                                                    paramsSurName: this.state.surName,
                                                    paramsmiddleName: this.state.middleName,
                                                    paramsName: this.state.namee,
                                                    paramsGender: this.state.gender,
                                                    paramPhoneNumber: this.state.phoneNumber,
                                                    paramsEmail: this.state.email,
                                                    paramMaritalStatus: this.state.maritalStatus,
                                                    paramsDataOfBirth: this.state.dateDisplay,
                                                })
                                        }
                                    }
                                }
                                touchableOpacityName="Tiếp tục"
                            />
                        </View>
                       {/* ======================================================================== */}
                    </View>
                </SafeAreaView>
            </ImageBackground>
          
        );
    }
}
