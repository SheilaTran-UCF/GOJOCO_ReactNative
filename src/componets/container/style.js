import {View,StyleSheet,Dimensions} from "react-native"
import {COLORS} from "../common/constant/themes"
const { width, height } = Dimensions.get('window')
const styleContainer = StyleSheet.create({
    hederContainer :
    {
        borderRadius:5,
        backgroundColor :'white',
        padding:10,
       marginHorizontal:5,
        borderWidth:1.5,
        borderColor:COLORS.borderColorLightGreen,
        position: 'absolute',
        width : width-20,
        elevation: 3,
        top: -75,
    }
});
export default styleContainer;