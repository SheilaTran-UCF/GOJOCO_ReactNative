import {StyleSheet,Dimensions} from 'react-native';
import {COLORS,FONT,SIZE} from '../constant/themes'
const {width, height}  = Dimensions.get('window')
const componentHeight = height / 3
const componentWidth = width / 3
const componentHeight2 = height/2
const styleTextInput = StyleSheet.create({
    dataTextInput :{
        height:50,
        width:height/2,
        borderRadius:6,
        borderWidth:1.5,
        borderColor:COLORS.borderColorMediumGreen,
        backgroundColor:COLORS.brWhite,
        fontSize : 16,
        fontWeight :'bold',
        fontFamily :'Lato-Black'
    },
    passwordTextInput :{
        width:width-25,
        borderRadius:4,
        borderWidth:1.5,
        height:45,
        borderColor:COLORS.borderColorLightGreen,
        backgroundColor:COLORS.brWhite,
        fontSize : 16,
        fontWeight :'bold',
      
    },
    numPhoneTextInput :{
        width:width-80,
        borderRadius:4,
        borderWidth:1.5,
        borderColor:COLORS.borderColorMediumGreen,
        backgroundColor:COLORS.brWhite,
        fontSize : 16,
        fontWeight :'bold',

    },
    searchTextInput :{
        width:width-20,
        borderRadius:6,
        borderWidth:2,
        borderColor:COLORS.borderColorLightGreen,
        backgroundColor:COLORS.brWhite,
    },
    UserTextInput:{
        width:width-20,
        height:45,
        borderRadius:4,
        backgroundColor:COLORS.brWhite,
        opacity:0.5,
        fontSize : 16,
        fontWeight :'bold',
        borderWidth:1.5,
        borderColor:COLORS.lightGreen,
    },
    EmailTextInput:{
        width:width-20,
        borderRadius:4,
        backgroundColor:COLORS.brWhite,
        opacity:0.5,
        fontSize : 16,
        fontWeight :'bold',
        borderWidth:1.5,
        borderColor:COLORS.lightGreen,
        height:45,
    },
    smallTextinput:{
        width:width/4,
        borderRadius:4,
        backgroundColor:COLORS.brWhite,
        opacity:0.7,
        fontSize : 16,
        fontWeight :'bold',
        borderWidth:1.5,
        borderColor:COLORS.borderColorLightGreen,
        
    }
});
export default styleTextInput;