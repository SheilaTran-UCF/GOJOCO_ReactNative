import {StyleSheet,Dimensions} from 'react-native';
const {width, height}  = Dimensions.get('window')
const componentHeight = height / 3
const componentWidth = width / 3
const componentHeight2 = height/2
import {COLORS} from "../constant/themes"
const styleTouchableOpacity = StyleSheet.create({
    largeTouchableOpacity: {
        backgroundColor : COLORS.darkGreen,
        width: componentHeight2,
        height :40,
        borderRadius: 5,
    },
    mediumTouchableOpacity: {
        backgroundColor : COLORS.darkGreen,
        width: componentHeight/1.4,
        height :45,
        borderRadius: 5,
        flexDirection:'row',
       justifyContent:'center'
    },
    smallTouchableOpacity: {
        backgroundColor : COLORS.darkGreen,
        width: componentWidth,
        borderRadius: 5,
    },
    faceBookTouchableOpacity:{
        backgroundColor : COLORS.faceBook,
        width:350,
        height :40,
        borderRadius:5,
    },
    emailTouchableOpacity :{
        backgroundColor : COLORS.email,
        width:350,
        height :40,
        borderRadius:5,
        marginTop:15
    },
    conFirmTouchbleOpacity : {
        backgroundColor : COLORS.darkGreen ,
        width:150,
        height :40,
        borderRadius:5,
    },
    canceltouchableOpacity :{
        backgroundColor :COLORS.white ,
        width:150,
        height :40,
        borderRadius:5,
        borderWidth:1,
        borderColor:COLORS.lightGreen,
    },
})
export default styleTouchableOpacity;