import { Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window')
const componentHeight = height / 3
export const COLORS = {
    //----Color Code----//
    white: '#ffffff',
    black: '#000',
    lightGreen: "#43fa02",
    mediumGreen: "#58a931",
    darkGreen: '#248504',
    faceBook: '#3b5998',
    email: "#EA4335",
    lightRed: '#ff0812',
    lightBlue: '#2293fc',
    darkBlue: '#0384fc',
    mediumBlue: '#cfe8fe',
    
    //----Color Code----//
    //----Backgroud Color ----//
    brWhite: '#ffffff',
    brLightGreen: '#43fa02',
    brMediumGreen: '#58a931',
    brDarkGreen: '#248504',
    //----Backgroud Color ----//
    //------Text H1 ------//
    h1Black: '#000',
    h1White: '#ffffff',
    h1DarkGreen: '#248504',
    h1LightGreen: '#43fa02',
    h1MediumGreen: '#58a931',
    //------Text H1 ------//
    //------Text H2 ------//
    h2Black: '#000',
    h2White: '#ffffff',
    h2DarkGreen: '#248504',
    h2LightGreen: '#43fa02',
    h2MediumGreen: '#58a931',
    //------Text H2 ------//
    //------Text H3 ------//
    h3Black: '#000',
    h3White: '#ffffff',
    h3DarkGreen: '#248504',
    h3LightGreen: '#43fa02',
    h3MediumGreen: '#58a931',
    h3LightBlue: '#2293fc',
    h3MediumBlue: '#0384fc',
    h3MediumBlue: '#cfe8fe',
    //------Text H3 ------//
    //------Text H4 ------//
    h4Black: '#000',
    h4White: '#ffffff',
    h4DarkGreen: '#248504',
    h4LightGreen: '#43fa02',
    h4MediumGreen: '#58a931',
    h4LightBlue: '#2293fc',
    h4MediumBlue: '#0384fc',
    h4MediumBlue: '#cfe8fe',
    h4Red :'red',
    //------Text H4 -----------//
    //------TextInput-----------//
    textInputBlack: '#000',
    textInputWhite: '#ffffff',
    textInputLightGreen: '#43fa02',
    textInputDarkGreen: '#248504',
    textInputMediumGreen: '#58a931',
    //------TextInput--------------//
    //------PlaceHolder------------//
    placeHoldergray: '#cdcdcd',
    placeHolderLightGreen: '#43fa02',
    placeHolderDarkGreen: '#58a931',
    placeHolderMediumGreen: '#58a931',
    //-------PlaceHolder-------------//
    //-------Text TouchableOpacity-------//
    touchableOpacityBlack: '#000',
    touchableOpacityWhite: '#ffffff',
    touchableOpacityDarkGreen: '#248504',
    touchableOpacityLightGreen: '#43fa02',
    touchableOpacityMediumGreen: '#58a931',
    //--------Text TouchableOpacity-----------//
    //--------Backgroud TouchableOpacity------//
    brTouchableDarkGreen: '#248504',
    brTouchableLightGreen: '#43fa02',
    brTouchableMediumGreen: '#58a931',
    brTouchableLightBlue: '#2293fc',
    brTouchableMediumBlue: '#0384fc',
    brTouchableMediumBlue: '#cfe8fe',
    brTouchableMediumRed: '#ff0812',
    //------Backgroud TouchableOpacity---//
    //------Border Colors --------------//
    borderColorDarkGreen: '#248504',
    borderColorLightGreen: '#43fa02',
    borderColorMediumGreen: '#58a931',
    //------Border Colors --------------//
}
export const SIZE = {
    h1: 24,
    h2: 18,
    h3: 15,
    h4: 12.5,
    h5: 14,
    textInput: 15,
    textToucohableOpacity: 16,
    textSearch: 15,
}
export const FONT = {
    //----------Style Text h1 ------------// 
    textH1_Black: { fontFamily: "font-times-new-roman", fontSize: SIZE.h1, lineHeight: 45, color: COLORS.h1Black, fontWeight: 'bold' },
    textH1_White: { fontFamily: "font-times-new-roman", fontSize: SIZE.h2, lineHeight: 36, color: COLORS.h1White, fontWeight: 'bold' },
    textH1_LightGreen: { fontFamily: "font-times-new-roman", fontSize: SIZE.h1, lineHeight: 36, color: COLORS.h1LightGreen, fontWeight: 'bold' },
    textH1_MediumGreen: { fontFamily: "font-times-new-roman", fontSize: SIZE.h1, lineHeight: 36, color: COLORS.h1MediumGreen, fontWeight: 'bold' },
    textH1_DarkGreen: { fontFamily: "font-times-new-roman", fontSize: SIZE.h1, lineHeight: 36, color: COLORS.h1DarkGreen, fontWeight: 'bold' },
    //----------Style Text h1 ------------// 
    //----------Style Text h2 ------------// 
    textH2_Black: { fontFamily: "font-times-new-roman", fontSize: SIZE.h2, lineHeight: 50, color: COLORS.h2Black, fontWeight: 'bold' },
    textH2_White: { fontFamily: "font-times-new-roman", fontSize: SIZE.h2, lineHeight: 30, color: COLORS.h2White, fontWeight: 'bold' },
    textH2_LightGreen: { fontFamily: "font-times-new-roman", fontSize: SIZE.h2, lineHeight: 30, color: COLORS.h2LightGreen, fontWeight: '800' },
    textH2_MediumGreen: { fontFamily: "font-times-new-roman", fontSize: SIZE.h2, lineHeight: 30, color: COLORS.h2MediumGreen, fontWeight: '800' },
    textH2_DarkGreen: { fontFamily: "font-times-new-roman", fontSize: SIZE.h2, lineHeight: 30, color: COLORS.h2DarkGreen, fontWeight: '800' },
    //----------Style Text h2 ------------// 
    //----------Style Text h3 ------------//
    textH3_Black1: { fontFamily: "font-times-new-roman", fontSize: SIZE.h3, lineHeight: 30, color: COLORS.h3Black, fontWeight: 'bold' },
    textH3_Black2: { fontFamily: "font-times-new-roman", fontSize: SIZE.h3, lineHeight: 22, color: COLORS.h3Black, fontWeight: 'bold' },
    textH3_White: { fontFamily: "font-times-new-roman", fontSize: SIZE.h3, lineHeight: 22, color: COLORS.h3White, fontWeight: 'normal' },
    textH3_LightGreen: { fontFamily: "font-times-new-roman", fontSize: SIZE.h3, lineHeight: 22, color: COLORS.h3LightBlue, fontWeight: 'normal' },
    textH3_Medium: { fontFamily: "font-times-new-roman", fontSize: SIZE.h3, lineHeight: 22, color: COLORS.h3MediumBlue, fontWeight: 'normal' },
    textH3_Dark: { fontFamily: "font-times-new-roman", fontSize: SIZE.h3, lineHeight: 22, color: COLORS.h3DarkGreen, fontWeight: 'normal' },
    
    //----------Style Text h3 ------------//
    //---------Style Text h4-------------//
    textH4_Red: { fontFamily: "font-times-new-roman", fontSize: SIZE.h4, lineHeight: 20, color: COLORS.h4Red },
    textH4_Black: { fontFamily: "font-times-new-roman", fontSize: SIZE.h4, lineHeight: 20, color: COLORS.h4Black },
    textH4_White: { fontFamily: "font-times-new-roman", fontSize: SIZE.h4, lineHeight: 20, color: COLORS.h4White },
    textH4_LightGreen: { fontFamily: "font-times-new-roman", fontSize: SIZE.h4, lineHeight: 20, color: COLORS.h4LightGreen },
    textH4_MediumGreen: { fontFamily: "font-times-new-roman", fontSize: SIZE.h4, lineHeight: 20, color: COLORS.h4MediumBlue },
    textH4_DarkGreen: { fontFamily: "font-times-new-roman", fontSize: SIZE.h4, lineHeight: 20, color: COLORS.h4DarkGreen },
    //---------Style Text h4-------------//
    //-------- Style Text Input --------//
    textInput_Black: { fontFamily: "font-times-new-roman", fontSize: SIZE.textInput, lineHeight: 20, color: COLORS.textInputBlack, fontWeight: 'normal' },
    textInput_White: { fontFamily: "font-times-new-roman", fontSize: SIZE.textInput, lineHeight: 20, color: COLORS.textInputWhite, fontWeight: 'normal' },
    textInput_LightGreen: { fontFamily: "font-times-new-roman", fontSize: SIZE.textInput, lineHeight: 20, color: COLORS.textInputLightGreen, fontWeight: 'normal' },
    textInput_MediumGreen: { fontFamily: "font-times-new-roman", fontSize: SIZE.textInput, lineHeight: 20, color: COLORS.textInputMediumGreen, fontWeight: 'normal' },
    textInput_DarkGreen: { fontFamily: "font-times-new-roman", fontSize: SIZE.textInput, lineHeight: 20, color: COLORS.textInputDarkGreen, fontWeight: 'normal' },
    textInput_LightBlue: { fontFamily: "font-times-new-roman", fontSize: SIZE.textInput, lineHeight: 20, color: COLORS.textInput_LightBlue },
    textInput_MediumBlue: { fontFamily: "font-times-new-roman", fontSize: SIZE.textInput, lineHeight: 20, color: COLORS.textInput_MediumBlue },
    textInput_DarkBlue: { fontFamily: "font-times-new-roman", fontSize: SIZE.textInput, lineHeight: 20, color: COLORS.textInput_DarkBlue },
    //-------- Style Text Input --------//
    //------- Style Text Touchabble Opacity ---//
    textTouchableOpacity_Black: { fontFamily: "font-times-new-roman", fontSize: SIZE.textInput, lineHeight: 40, color: COLORS.touchableOpacityBlack, textAlign: "center" },
    textTouchableOpacity_White: { fontFamily: "font-times-new-roman", fontSize: SIZE.textInput, lineHeight: 40, color: COLORS.touchableOpacityWhite, textAlign: "center" },
    textTouchableOpacity_LightGreen: { fontFamily: "font-times-new-roman", fontSize: SIZE.textInput, lineHeight: 40, color: COLORS.touchableOpacityLightGreen, textAlign: "center" },
    textTouchableOpacity_MediumGreen: { fontFamily: "font-times-new-roman", fontSize: SIZE.textInput, lineHeight: 40, color: COLORS.touchableOpacityMediumGreen, textAlign: "center" },
    textTouchableOpacity_DrackGreen: { fontFamily: "font-times-new-roman", fontSize: SIZE.textInput, lineHeight: 40, color: COLORS.touchableOpacityDarkGreen, textAlign: "center" },
    //------- Style Text Touchabble Opacity ---//
    //------- Style Text Placeholder ---------//
    textPlaceholder_Gray: { fontFamily: "font-times-new-roman", fontSize: SIZE.h3, lineHeight: 22, color: COLORS.placeHoldergray, fontWeight: 'normal' },
    textPlaceholder_Lightgreen: { fontFamily: "font-times-new-roman", fontSize: SIZE.h3, lineHeight: 22, color: COLORS.placeHolderLightGreen, fontWeight: 'normal' },
    textPlaceholder_MediumGreen: { fontFamily: "font-times-new-roman", fontSize: SIZE.h3, lineHeight: 22, color: COLORS.placeHolderMediumGreen, fontWeight: 'normal' },
    textPlaceholder_LightGreen: { fontFamily: "font-times-new-roman", fontSize: SIZE.h3, lineHeight: 22, color: COLORS.placeHolderDarkGreen, fontWeight: 'normal' },
    //------- Style Text Placeholder ---------// 
}



