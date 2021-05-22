import React, { Children, Component, useState } from 'react'
import {
    View,
    ImageBackground,
    Dimensions,
    TouchableOpacity,
    Image,
    Platform,
    PermissionsAndroid,
    Text,
    SafeAreaView,
    Alert,
} from "react-native"
//---------------------------Import Componet-----------------------------//
import {
    HeaderText,
    LableText,
    SmallTouchableOpacity,
    InforContainer,
    NumberTextInput,
    NumberPhoneInforTextInput,
    ErrorText,
} from "../../componets/index"
//------------------------- Add Library ------------------------------------//
const { width, height } = Dimensions.get('window')
const componentHeight = height / 3
import { Picker } from '@react-native-picker/picker'
import { COLORS } from "../../componets/common/constant/themes"
import Ionicons from "react-native-vector-icons/Ionicons"
import EvilIcons from "react-native-vector-icons/EvilIcons"
import ImagePicker from "react-native-image-crop-picker";
import { launchCamera, launchImageLibrary, ImagePickerResponse } from 'react-native-image-picker';
//     const [filePath, setFilePath] = useState({});
//     const [filePath2, setFilePath2] = useState({});
//     const [choseimageErr, setPassImage] = useState('');
//     const [id,setId] = useState('');

export default class PersonalInfromation_1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image1: null,
            image2: null,
            imageErr : '',
        }
    }
    //     //==========================================================================//
    requestCameraPermission = async () => {
        if (Platform.OS === 'android') {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.CAMERA,
                    {
                        title: 'Camera Permission',
                        message: 'App needs camera permission',
                    },
                );
                // If CAMERA Permission is granted
                return granted === PermissionsAndroid.RESULTS.GRANTED;
            } catch (err) {
                console.warn(err);
                return false;
            }
        } else return true;
    };
    //     //==========================================================================//
    requestExternalWritePermission = async () => {
        if (Platform.OS === 'android') {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                    {
                        title: 'External Storage Write Permission',
                        message: 'App needs write permission',
                    },
                );
                // If WRITE_EXTERNAL_STORAGE Permission is granted
                return granted === PermissionsAndroid.RESULTS.GRANTED;
            } catch (err) {
                console.warn(err);
                alert('Write permission error', err);
            }
            return false;
        } else return true;
    };
    //     //============================  chon CAMARA1 ==============================//
    captureImage = async (type) => {
        let options = {
            mediaType: type,
            maxWidth: 300,
            maxHeight: 550,
            quality: 1,
            videoQuality: 'low',
            durationLimit: 30, //Video max duration in seconds
            saveToPhotos: true,
        };
        let isCameraPermitted = await requestCameraPermission();
        let isStoragePermitted = await requestExternalWritePermission();
        if (isCameraPermitted && isStoragePermitted) {
            launchCamera(options, (response) => {
                console.log('Response = ', response);

                if (response.didCancel) {
                    alert('User cancelled camera picker');
                    return;
                } else if (response.errorCode == 'camera_unavailable') {
                    alert('Camera not available on device');
                    return;
                } else if (response.errorCode == 'permission') {
                    alert('Permission not satisfied');
                    return;
                } else if (response.errorCode == 'others') {
                    alert(response.errorMessage);
                    return;
                }

                this.setState(response)
            });
        }
    };
    //     //====================================================================//
    //     //============================chon CAMARA2 ==============================//
    captureImage2 = async (type) => {
        let options = {
            mediaType: type,
            maxWidth: 300,
            maxHeight: 550,
            quality: 1,
            videoQuality: 'low',
            durationLimit: 30, //Video max duration in seconds
            saveToPhotos: true,
        };
        let isCameraPermitted = await requestCameraPermission();
        let isStoragePermitted = await requestExternalWritePermission();
        if (isCameraPermitted && isStoragePermitted) {
            launchCamera(options, (response) => {
                console.log('Response = ', response);

                if (response.didCancel) {
                    alert('User cancelled camera picker');
                    return;
                } else if (response.errorCode == 'camera_unavailable') {
                    alert('Camera not available on device');
                    return;
                } else if (response.errorCode == 'permission') {
                    alert('Permission not satisfied');
                    return;
                } else if (response.errorCode == 'others') {
                    alert(response.errorMessage);
                    return;
                }
            });
        }
    };
       //================================Chon anh 1====================================//
    openPicker1 = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            // cropping: true
        }).then(image1 => {
            if (image1) {
                this.setState({ image1: image1.path })
                console.log(this.state.image1)
            }
        });
    }
    //===============================================================================//
    //================================Chon anh 2====================================//
    openPicker2 = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            // cropping: true
        }).then(image2 => {
            if (image2) {
                this.setState({ image2: image2.path })
                console.log(this.state.image2)
            }
        });
    }
    //==============================Kiem tra chon anh============================================//
    checkValidChoseImage = () =>{
        let valid = true
        if(this.state.image1 == null){
            alert('Vui lòng chọn ảnh')
            valid = false
        }
        else if(this.state.image2 == null)
        {
            alert('Vui lòng chọn ảnh')
            valid = false
        }
        return valid
    }
     //===============================================================================//
    render() {
        const { route } = this.props;
        return (
            <ImageBackground
                style={{ width: width, height: height }}
                resizeMode="stretch"
                blurRadius={1}
                source={require('../../assets/images/mapvietnam.png')}>
                {/* ---------------------------------------------------- */}
                <SafeAreaView style={{ flex: 1, flexDirection: 'column' }}>
                    {/* ---------------------------------------------------- */}
                    <View style={{ flex: 1.2, backgroundColor: COLORS.brMediumGreen }}>

                        <View style={{ flex:1 , flexDirection: 'row' }}>
                            <View style={{ flex: 0.1 }}>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('PersonalInfromation')}>
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

                    {/* ------------------------------------------------------------ */}
                    <View style={{ flex: 10, flexDirection: 'column', top: 50,alignItems:'center'}}>
                    <InforContainer />
                        <View style={{ flex: 2, alignItems: 'center' }}>
                            <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}>Chọn hình ảnh CCCD*</Text>
                        </View>
                        <View style={{ flex: 10, alignSelf: 'center' }}>
                            <View style={{ flexDirection: 'row'}}>
                                <View style={{ flexDirection: 'column', right: 10 }}>
                                <View style={{alignItems:'center'}}>
                                    <LableText text={'Mặt trước  '} />
                                    </View>
                                   
                                    <Image source={{ uri: this.state.image1 }}
                                        style={{ width: 160, height: 150, borderRadius: 3 }}></Image>
                                    <TouchableOpacity
                                        style={{alignItems:'center'}}
                                        onPress={() => this.openPicker1()}>
                                        <LableText text={'Chọn '} />
                                    </TouchableOpacity>
                                    {/* <ErrorText text={this.state.imageErr} /> */}
                                </View>

                                <View style={{ flexDirection: 'column', left: 10 }}>
                                    <View style={{alignItems:'center'}}>
                                    <LableText text={'Mặt sau '} />
                                    </View>
                               
                                    <Image source={{ uri: this.state.image2 }}
                                        style={{ width: 160, height: 150, borderRadius: 3 }}></Image>
                                    <TouchableOpacity
                                        style={{alignItems:'center'}}
                                        onPress={() => this.openPicker2()}>
                                        <LableText text={'Chọn '} />
                                    </TouchableOpacity>
                                    {/* <ErrorText text={this.state.imageErr} /> */}
                                </View>
                            </View>
                        </View>
                    </View>
                    {/* ------------------------------------------------------------ */}
                    <View style={{ flex: 4, flexDirection: 'row', alignSelf: 'center' }}>
                        <View>
                            <SmallTouchableOpacity
                                onPress={() => this.props.navigation.navigate('PersonalInfromation')}
                                touchableOpacityName={'Trước đó'} />
                        </View>
                        <View style={{ left: 5 }}>
                            <SmallTouchableOpacity
                            onPress={
                                () => {
                                    if (this.checkValidChoseImage() == true ) 
                                    {
                                        this.props.navigation.navigate('PersonalInfromation_35',
                                            {
                                    //=======================================//
                                        passImage: { uri: this.state.image1 },
                                        passImage2: { uri: this.state.image2 },
                                        SurName: (route.params.paramsSurName),
                                        middleName: (route.params.paramsmiddleName),
                                        Name: (route.params.paramsName),
                                        Gender: (route.params.paramsGender),
                                        PhoneNumber: (route.params.paramPhoneNumber),
                                        Email: (route.params.paramsEmail),
                                        MaritalStatus: (route.params.paramMaritalStatus),
                                        DataOfBirth: (route.params.paramsDataOfBirth),
                                //         //=======================================//
                                            })
                                    }
                                }
                            }
                                touchableOpacityName={'Tiếp theo'} />
                        </View>
                    </View>
                    

                </SafeAreaView>
            </ImageBackground>

        )
    }
}
//-------------------------------------------------------------------------//
// const PersonalInfromation_1 = ({ navigation ,route}) => {

//     //================================================//
//     const [filePath, setFilePath] = useState({});
//     const [filePath2, setFilePath2] = useState({});
//     const [choseimageErr, setPassImage] = useState('');
//     const [id,setId] = useState('');

//     //==========================================================================//
//     const requestCameraPermission = async () => {
//         if (Platform.OS === 'android') {
//             try {
//                 const granted = await PermissionsAndroid.request(
//                     PermissionsAndroid.PERMISSIONS.CAMERA,
//                     {
//                         title: 'Camera Permission',
//                         message: 'App needs camera permission',
//                     },
//                 );
//                 // If CAMERA Permission is granted
//                 return granted === PermissionsAndroid.RESULTS.GRANTED;
//             } catch (err) {
//                 console.warn(err);
//                 return false;
//             }
//         } else return true;
//     };
//     //==========================================================================//
//     const requestExternalWritePermission = async () => {
//         if (Platform.OS === 'android') {
//             try {
//                 const granted = await PermissionsAndroid.request(
//                     PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
//                     {
//                         title: 'External Storage Write Permission',
//                         message: 'App needs write permission',
//                     },
//                 );
//                 // If WRITE_EXTERNAL_STORAGE Permission is granted
//                 return granted === PermissionsAndroid.RESULTS.GRANTED;
//             } catch (err) {
//                 console.warn(err);
//                 alert('Write permission error', err);
//             }
//             return false;
//         } else return true;
//     };
//     //============================  chon CAMARA1 ==============================//
//     const captureImage = async (type) => {
//         let options = {
//             mediaType: type,
//             maxWidth: 300,
//             maxHeight: 550,
//             quality: 1,
//             videoQuality: 'low',
//             durationLimit: 30, //Video max duration in seconds
//             saveToPhotos: true,
//         };
//         let isCameraPermitted = await requestCameraPermission();
//         let isStoragePermitted = await requestExternalWritePermission();
//         if (isCameraPermitted && isStoragePermitted) {
//             launchCamera(options, (response) => {
//                 console.log('Response = ', response);

//                 if (response.didCancel) {
//                     alert('User cancelled camera picker');
//                     return;
//                 } else if (response.errorCode == 'camera_unavailable') {
//                     alert('Camera not available on device');
//                     return;
//                 } else if (response.errorCode == 'permission') {
//                     alert('Permission not satisfied');
//                     return;
//                 } else if (response.errorCode == 'others') {
//                     alert(response.errorMessage);
//                     return;
//                 }
//                 console.log('base64 -> ', response.base64);
//                 console.log('uri -> ', response.uri);
//                 console.log('width -> ', response.width);
//                 console.log('height -> ', response.height);
//                 console.log('fileSize -> ', response.fileSize);
//                 console.log('type -> ', response.type);
//                 console.log('fileName -> ', response.fileName);
//                 setFilePath(response);
//             });
//         }
//     };
//     //====================================================================//
//     //============================chon CAMARA2 ==============================//
//     const captureImage2 = async (type) => {
//         let options = {
//             mediaType: type,
//             maxWidth: 300,
//             maxHeight: 550,
//             quality: 1,
//             videoQuality: 'low',
//             durationLimit: 30, //Video max duration in seconds
//             saveToPhotos: true,
//         };
//         let isCameraPermitted = await requestCameraPermission();
//         let isStoragePermitted = await requestExternalWritePermission();
//         if (isCameraPermitted && isStoragePermitted) {
//             launchCamera(options, (response) => {
//                 console.log('Response = ', response);

//                 if (response.didCancel) {
//                     alert('User cancelled camera picker');
//                     return;
//                 } else if (response.errorCode == 'camera_unavailable') {
//                     alert('Camera not available on device');
//                     return;
//                 } else if (response.errorCode == 'permission') {
//                     alert('Permission not satisfied');
//                     return;
//                 } else if (response.errorCode == 'others') {
//                     alert(response.errorMessage);
//                     return;
//                 }
//                 console.log('base64 -> ', response.base64);
//                 console.log('uri -> ', response.uri);
//                 console.log('width -> ', response.width);
//                 console.log('height -> ', response.height);
//                 console.log('fileSize -> ', response.fileSize);
//                 console.log('type -> ', response.type);
//                 console.log('fileName -> ', response.fileName);
//                 setFilePath2(response);
//             });
//         }
//     };
//     //=========================== CHOSE IMAGE1 =================================//
//     const chooseFile = (type) => {
//         let options = {
//             mediaType: type,
//             maxWidth: 300,
//             maxHeight: 550,
//             quality: 1,
//         };
//         launchImageLibrary(options, (response) => {
//             console.log('Response = ', response);

//             if (response.didCancel) {
//                 alert("Not select Image");
//                 return;
//             } else if (response.errorCode == 'camera_unavailable') {
//                 alert('Camera not available on device');
//                 return;
//             } else if (response.errorCode == 'permission') {
//                 // alert('Permission not satisfied');
//                 return;
//             } else if (response.errorCode == 'others') {
//                 // alert(response.errorMessage);
//                 return;
//             }
//             setFilePath(response);

//         });
//     };
//     //===============================================================================//
//    //================================Chon Camara 2====================================//
//     const chooseFile2 = (type) => {
//         let options = {
//             mediaType: type,
//             maxWidth: 300,
//             maxHeight: 550,
//             quality: 1,
//         };
//         launchImageLibrary(options, (response) => {
//             console.log('Response = ', response);

//             if (response.didCancel) {
//                 alert('Not select Image');
//                 return;
//             } else if (response.errorCode == 'camera_unavailable') {
//                 alert('Camera not available on device');
//                 return;
//             } else if (response.errorCode == 'permission') {
//                 // alert('Permission not satisfied');
//                 return;
//             } else if (response.errorCode == 'others') {
//                 // alert(response.errorMessage);
//                 return;
//             }
//             setFilePath2(response);
//         });
//     };
//     //===============================================================================//

//     //==============================================================================//

//     return (
//         <ImageBackground
//             style={{ width: width, height: height }}
//             resizeMode="stretch"
//             blurRadius={1}
//             source={require('../../assets/images/mapvietnam.png')}>
//             {/* ---------------------------------------------------- */}
//             <View style={{ flex: 1, flexDirection: 'column' }}>
//                 {/* ---------------------------------------------------- */}
//                 <View style={{ flex: 1.5, backgroundColor: COLORS.brMediumGreen }}>
//                     <View style={{ flex: 1, flexDirection: 'row' }}>
//                         <View style={{ flex: 0.1 }}>
//                             <TouchableOpacity
//                             onPress={()=>navigation.navigate('PersonalInfromation')}
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
//                 {/* ---------------------------------------------------- */}
//                 <View style={{ flex: 6, flexDirection: 'column', top: 35 }}>
//                     <View style={{ flex: 4, alignItems: 'center', top:10 }}>
//                         <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'center', top: 2 }}>
//                             <EvilIcons name="pencil" color={COLORS.lightGreen} size={30} />
//                             <LableText
//                                 text={' Số CCCD* '} />
//                         </View>
//                         <View style={{ flex: 8 }}>
//                             <NumberPhoneInforTextInput 
//                              placeholder={'Nhập số CCCD'}
//                              value={id}
//                              onChangeText={(id) => setId(id)}
//                             />
//                         </View>
//                     </View>
//                     <View style={{ flex: 8, flexDirection: 'row' }} >
//                         <View style={{ flex: 2 }}>
//                             <View>
//                                 <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
//                                     <View>
//                                         <TouchableOpacity
//                                             style={{ alignSelf: 'center' }}
//                                             onPress={() => chooseFile('photo')}>
//                                             <LableText text={'Chọn '} />
//                                         </TouchableOpacity>
//                                     </View>
//                                     <View>
//                                         <TouchableOpacity
//                                             style={{ alignSelf: 'center' }}
//                                             onPress={() => captureImage('photo')}>
//                                             <LableText text={'Chụp '} />
//                                         </TouchableOpacity>
//                                     </View>
//                                 </View>
//                                 <View style={{ alignSelf: 'center' }}>
//                                     <Image source={{ uri: filePath.uri }} style={{ width: 150, height: 150, borderRadius: 3 }} />
//                                 </View>
//                                 <View style={{ alignSelf: 'center' }}>
//                                     <LableText text={'Mặt trước CCCD'} />
//                                 </View>
//                                 <Text style={{fontSize:13,color:'red'}}>{choseimageErr}</Text>
//                             </View>
//                         </View>
//                     {/* ================================================================ */}
//                         <View style={{ flex: 2 }}>
//                             <View>
//                                 <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
//                                     <View>
//                                     <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
//                                     <View>
//                                         <TouchableOpacity
//                                             style={{ alignSelf: 'center' }}
//                                             onPress={() => chooseFile2('photo')}>
//                                             <LableText text={'Chọn '} />
//                                         </TouchableOpacity>
//                                     </View>
//                                     <View>
//                                         <TouchableOpacity
//                                             style={{ alignSelf: 'center' }}
//                                             onPress={() => captureImage2('photo')}>
//                                             <LableText text={'Chụp '} />
//                                         </TouchableOpacity>
//                                     </View>
//                                 </View>
//                                     </View>
//                                 </View>
//                             </View>
//                             <View style={{ alignSelf: 'center' }}>

//                                 <Image source={{ uri: filePath2.uri }} 
//                                 style={{ width: 150, height: 150, borderRadius: 3 }}></Image>
//                             </View>
//                             <View style={{ alignSelf: 'center' }}>
//                                 <LableText text={'Mặt sau CCCD'} />
//                             </View>
//                         </View>
//                     </View>
//                 </View>
//                 <View style={{ flex: 2, flexDirection: 'row', alignSelf: 'center' }}>
//                     <View>
//                         <SmallTouchableOpacity 
//                         onPress = {()=> navigation.navigate('PersonalInfromation')}
//                         touchableOpacityName={'Trước đó'} />
//                     </View>
//                     <View style={{ left: 5 }}>
//                         <SmallTouchableOpacity
//                             onPress={() => navigation.navigate('PersonalInfromation_35',
//                                 {
//                                     //=======================================//
//                                     passImage : { uri: filePath.uri },
//                                     passImage2 : { uri: filePath2.uri },
//                                     SurName: (route.params.paramsSurName),
//                                     middleName: (route.params.paramsmiddleName),
//                                     Name: (route.params.paramsName),
//                                     Gender: (route.params.paramsGender),
//                                     PhoneNumber: (route.params.paramPhoneNumber),
//                                     Email: (route.params.paramsEmail),
//                                     MaritalStatus: (route.params.paramMaritalStatus),
//                                     DataOfBirth: (route.params.paramsDataOfBirth),
//                                     paramsID : id,
//                                     //=======================================//
//                                 },
//                             )}
//                             touchableOpacityName={'Tiếp theo'} />
//                     </View>
//                 </View>


//             </View>
//         </ImageBackground>
//     );
// }
// export default PersonalInfromation_1;
