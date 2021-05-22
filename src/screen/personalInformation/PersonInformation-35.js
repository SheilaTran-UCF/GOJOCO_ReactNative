import React, { Children, Component, useState } from 'react'
import {
    View,
    ImageBackground,
    Dimensions,
    TouchableOpacity,
    Image,
    KeyboardAvoidingView,
    SafeAreaView
} from "react-native"
//---------------------------Import Componet-----------------------------//
import {
    HeaderText,
    LableText,
    InforContainer,
    MediumTouchableOpacity,
    H3Text,
} from "../../componets/index"
//-------------------------Add Library------------------------------------------------//
import { COLORS } from "../../componets/common/constant/themes"
import Ionicons from "react-native-vector-icons/Ionicons"
const { width, height } = Dimensions.get('window')
const componentHeight = height / 3
//----------------------------------------------------------------------------------//
//--------------------------------------PersonalInfromation_35--------------------------------------//
export default class PersonalInfromation_35 extends React.Component {
    render() {
        const { route } = this.props;
        return (
            <ImageBackground
                style={{ width: width, height: height }}
                resizeMode="stretch"
                blurRadius={1}
                source={require('../../assets/images/mapvietnam.png')}>
                {/* ---------------------------------------------------- */}
                <View style={{ flex: 1, flexDirection: 'column' }}>
                    <View style={{ flex: 1.5, backgroundColor: COLORS.brMediumGreen }}>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <View style={{ flex: 0.1 }}>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('PersonalInfromation_1')}
                                >
                                    <Ionicons name="arrow-back" color={COLORS.white} size={30} />
                                </TouchableOpacity>
                            </View>
                            <View style={{ alignItems: 'center', flex: 0.8 }}>
                                <HeaderText
                                    text='Thông tin cá nhân'
                                />
                            </View>
                        </View>
                       
                    </View>
                    {/* ------------------------Ho va ten---------------------------- */}

                    <View style={{
                        flex: 10, flexDirection: 'column',
                        borderRadius: 6, top: 30,alignItems:'center'
                    }}>
                         <InforContainer />
                        {/* ---------------------------------------------------- */}
                        <View style={{ flex: 0.1, flexDirection: 'row' }}>
                            <View style={{ flex: 3,left:10 }}>
                                <LableText text={'Họ và tên  '} />
                            </View>
                            <View style={{ flex: 1 }}>
                                <LableText text={':'} />
                            </View>
                            <View style={{ flex: 6, left: 30, flexDirection: 'row' }}>
                                <H3Text text={route.params.SurName} />
                                <H3Text text={route.params.middleName} />
                                <H3Text text={route.params.Name} />
                            </View>
                        </View>
                        {/* -----------------------Gioi Tinh----------------------------- */}
                        <View style={{ flex: 0.1, flexDirection: 'row' }}>
                            <View style={{ flex: 3 ,left:10}}>
                                <LableText text={'Giới tính '} />
                            </View>
                            <View style={{ flex: 1 }}>
                                <LableText text={':'} />
                            </View>
                            <View style={{ flex: 6, left: 30 }}>
                                <H3Text text={route.params.Gender} />
                            </View>
                        </View>
                        {/* ---------------------so dien thoai------------------------------ */}
                        <View style={{ flex: 0.1, flexDirection: 'row' }}>
                            <View style={{ flex: 3,left:10 }}>
                                <LableText text={'Số điện thoại '} />
                            </View>
                            <View style={{ flex: 1 }}>
                                <LableText text={':'} />
                            </View>
                            <View style={{ flex: 6, left: 30 }}>
                                <H3Text text={route.params.PhoneNumber} />
                            </View>
                        </View>
                        {/* ----------------------Email------------------------------ */}
                        <View style={{ flex: 0.1, flexDirection: 'row' }}>
                            <View style={{ flex: 3 ,left:10}}>
                                <LableText text={'Email  '} />
                            </View>
                            <View style={{ flex: 1 }}>
                                <LableText text={':'} />
                            </View>
                            <View style={{ flex: 7, left: 30 }}>
                                <H3Text text={route.params.Email} />

                            </View>
                        </View>
                        {/* ------------------Dia chi lam viec---------------------------------- */}
                        <View style={{ flex: 0.1, flexDirection: 'row' }}>
                            <View style={{ flex: 3 ,left:10}}>
                                <LableText text={'Ngày sinh   '} />
                            </View>
                            <View style={{ flex: 1 }}>
                                <LableText text={':'} />
                            </View>
                            <View style={{ flex: 6, left: 30 }}>
                                <H3Text text={route.params.DataOfBirth} />
                            </View>
                        </View>
                        {/* ------------------- cccd --------------------------------- */}
                        <View style={{ flex: 0.1, flexDirection: 'row', top: 10 }}>
                            <View style={{ flex: 4 ,left:10}}>
                                <LableText text={'Căn cước công dân '} />
                            </View>
                            
                            <View style={{ flex: 6, left: 30 }}>
                                {/* <H3Text text={route.params.paramsID} /> */}
                            </View>
                        </View>
                        {/* ------------------------show image---------------------------- */}
                        <View style={{ flex: 0.2, flexDirection: 'row' }}>
                            <View style={{ flex: 0.5, alignItems: 'center' }}>
                                <View>
                                    <LableText text={'Mặt trước '} />
                                </View>
                                <View>
                                    <Image
                                        source={route.params.passImage}
                                        // source={{uri:'https://vcdn-vnexpress.vnecdn.net/2019/10/16/ferrari-vao-viet-nam-vnexpress-6167-7944-1571201665.jpg'}}
                                        style={{ width: 160, height: 140, borderRadius: 3 }} />
                                </View>
                            </View>
                            {/* ------------------------show image---------------------------- */}
                            <View style={{ flex: 0.5, alignItems: 'center' }}>
                                <View>
                                    <LableText text={'Mặt sau'} />
                                </View>
                                <View>
                                    <Image
                                        source={route.params.passImage2}
                                        // source={{uri:'https://gojoco.ddns.net:3336/media/images/users/84903095846/profile/cmnd1/20210517/19/20210517190707136.jpg'}}
                                        style={{ width: 160, height: 140, borderRadius: 3 }} />
                                </View>
                            </View>
                        </View>
                    </View>
                    {/* ----------------------Touchable Opacity------------------------------ */}
                    <View style={{ flex: 2, flexDirection: 'row', alignSelf: 'center' }}>
                        <View style={{ flexDirection: 'row', top: 20 }}>
                            <View>
                                <MediumTouchableOpacity
                                    touchableOpacityName={'Gọi'} />
                            </View>
                            <View style={{ left: 5 }}>
                                <MediumTouchableOpacity
                                    touchableOpacityName={'Chat'} />
                            </View>

                        </View>
                    </View>
                </View>
            </ImageBackground>
        )
    }
}
// const PersonalInfromation_35 = ({ navigation, route }) => {
//     return (
//         <ImageBackground
//             style={{ width: width, height: height }}
//             resizeMode="stretch"
//             blurRadius={1}
//             source={require('../../assets/images/mapvietnam.png')}>
//             {/* ---------------------------------------------------- */}
//             <View style={{ flex: 1, flexDirection: 'column' }}>
//                 <View style={{ flex: 1.5, backgroundColor: COLORS.brMediumGreen }}>
//                     <View style={{ flex: 1, flexDirection: 'row' }}>
//                         <View style={{ flex: 0.1 }}>
//                             <TouchableOpacity
//                                 onPress={() => navigation.navigate('PersonalInfromation_1')}
//                             >
//                                 <Ionicons name="arrow-back" color={COLORS.white} size={30} />
//                             </TouchableOpacity>
//                         </View>
//                         <View style={{ alignItems: 'center', flex: 0.8 }}>
//                             <HeaderText
//                                 text='Thông tin cá nhân'
//                             />
//                         </View>
//                     </View>
//                     <View style={{ flex: 1 }}>
//                         <InforContainer />
//                     </View>
//                 </View>
//                 {/* ------------------------Ho va ten---------------------------- */}

//                 <View style={{
//                     flex: 10, flexDirection: 'column',
//                     marginHorizontal: 20, borderRadius: 6, top:30
//                 }}>
//                     {/* ---------------------------------------------------- */}
//                     <View style={{ flex: 0.1, flexDirection: 'row'}}>
//                         <View style={{ flex: 3 }}>
//                             <LableText text={'Họ và tên :   '} />
//                         </View>
//                         <View style={{ flex: 7, left: 30, flexDirection: 'row' }}>
//                             <H3Text text={route.params.SurName} />
//                             <H3Text text={route.params.middleName} />
//                             <H3Text text={route.params.Name} />
//                         </View>
//                     </View>
//                     {/* -----------------------Gioi Tinh----------------------------- */}
//                     <View style={{ flex: 0.1, flexDirection: 'row' }}>
//                         <View style={{ flex: 3 }}>
//                             <LableText text={'Giới tính:   '} />
//                         </View>
//                         <View style={{ flex: 7, left: 30 }}>
//                             <H3Text text={route.params.Gender} />
//                         </View>
//                     </View>
//                     {/* ---------------------so dien thoai------------------------------ */}
//                     <View style={{ flex: 0.1, flexDirection: 'row' }}>
//                         <View style={{ flex: 3 }}>
//                             <LableText text={'Số điện thoại :   '} />
//                         </View>
//                         <View style={{ flex: 7, left: 30 }}>
//                             <H3Text text={route.params.PhoneNumber} />
//                         </View>
//                     </View>
//                     {/* ----------------------Email------------------------------ */}
//                     <View style={{ flex: 0.1, flexDirection: 'row' }}>
//                         <View style={{ flex: 3 }}>
//                             <LableText text={'Email :   '} />
//                         </View>
//                         <View style={{ flex: 7, left: 30 }}>
//                             <H3Text text={route.params.Email} />

//                         </View>
//                     </View>
//                     {/* ------------------Dia chi lam viec---------------------------------- */}
//                     <View style={{ flex: 0.1, flexDirection: 'row' }}>
//                         <View style={{ flex: 4 }}>
//                             <LableText text={'Ngày sinh :   '} />
//                         </View>
//                         <View style={{ flex: 6, left: 30 }}>
//                             <H3Text text={route.params.DataOfBirth} />
//                         </View>
//                     </View>
//                     {/* ------------------- cccd --------------------------------- */}
//                     <View style={{ flex: 0.1, flexDirection: 'row', top: 10 }}>
//                         <View style={{ flex: 4 }}>
//                             <LableText text={'Căn cước công dân : '} />
//                         </View>
//                         <View style={{ flex: 6, left: 30 }}>
//                             {/* <H3Text text={route.params.paramsID} /> */}
//                         </View>
//                     </View>
//                     {/* ------------------------show image---------------------------- */}
//                     <View style={{ flex: 0.2, flexDirection: 'row' }}>
//                         <View style={{ flex: 0.5, alignItems: 'center' }}>
//                             <View>
//                                 <LableText text={'Mặt trước '} />
//                             </View>
//                             <View>
//                                 <Image 
//                                 source={route.params.passImage}
//                                 // source={{uri:'https://vcdn-vnexpress.vnecdn.net/2019/10/16/ferrari-vao-viet-nam-vnexpress-6167-7944-1571201665.jpg'}}
//                                 style={{ width: 150, height: 140, borderRadius: 3 }} />
//                             </View>
//                         </View>
//                         {/* ------------------------show image---------------------------- */}
//                         <View style={{ flex: 0.5, alignItems: 'center' }}>
//                             <View>
//                                 <LableText text={'Mặt sau'} />
//                             </View>
//                             <View>
//                                 <Image 

//                                 source={route.params.passImage2} 
//                                 // source={{uri:'https://gojoco.ddns.net:3336/media/images/users/84903095846/profile/cmnd1/20210517/19/20210517190707136.jpg'}}
//                                 style={{ width: 150, height: 140, borderRadius: 3 }} />
//                             </View>
//                         </View>
//                     </View>
//                 </View>
//                 {/* ----------------------Touchable Opacity------------------------------ */}
//                 <View style={{ flex: 2, flexDirection: 'row', alignSelf: 'center' }}>
//                     <View style={{ flexDirection: 'row', top: 20 }}>
//                         <View>
//                             <MediumTouchableOpacity
//                                 touchableOpacityName={'Gọi'} />
//                         </View>
//                         <View style={{left:5}}>
//                             <MediumTouchableOpacity
//                                 touchableOpacityName={'Chat'} />
//                         </View>

//                     </View>
//                 </View>
//             </View>
//         </ImageBackground>
//     );
// }
// export default PersonalInfromation_35
//--------------------------------------PersonalInfromation_35--------------------------------------//