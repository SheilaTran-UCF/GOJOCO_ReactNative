// import React, { Component, useState } from 'react';
// import { View, Text, TouchableOpacity, Dimensions, Button, TextInput, Platform } from "react-native";
// import { LableText, DateTimeTextInput } from "../../../componets/index"
// import { COLORS } from "../constant/themes"
// const { width, height } = Dimensions.get('window')
// import AntDesign from 'react-native-vector-icons/AntDesign'
// // import DateTimePicker from "react-native-modal-datetime-picker";
// import PropTypes from 'prop-types';
// import DateTimePicker from '@react-native-community/datetimepicker';

// const DateTime = () => {
//   const [date, setDate] = useState(new Date());
//   const [mode, setMode] = useState('date');
//   const [show, setShow] = useState(false);
//   const [dateDisplay, setDateDisplay] = useState('')

//   const onChange = (event, selectedDate) => {
//     const currentDate = selectedDate || date;
//     setShow(Platform.OS === 'ios');
//     setDate(currentDate);
//   };

//   const showMode = (currentMode) => {
//     setShow(true);
//     setMode(currentMode);
//   };

//   const showDatepicker = () => {
//     showMode('date');
//   };

//   return (
//     <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
//       <View>
//         <TouchableOpacity onPress={showDatepicker}>
//           <AntDesign style={{ top: 5 }} name="calendar" color={COLORS.lightGreen} size={30} />
//         </TouchableOpacity>
//       </View>
//       {show && (
//         <DateTimePicker
//           // testID="dateTimePicker"
//           value={date}
//           mode={date}
//           is24Hour={true}
//           display="default"
//           onChange={onChange}
//         />
//       )}
//       <View>
//         {/* <LableText text ={formatDate(date)} /> */}
//         <TextInput
//           value={dateDisplay}
//           onChangeText={text => setDateDisplay(text)}
//         >
//           {formatDate(date)}
//         </TextInput>
//       </View>
//     </View>
//   );
// }

// const formatDate = (date) => {
//   return `${date.getDate()}/${date.getMonth() +
//     1}/${date.getFullYear()} `;
// };
// TextInput.prototype = {
//   value: PropTypes.string.isRequired,
//   onChangeText: PropTypes.string.isRequired,
// }
// export default DateTime;


// // export default class DateTime extends Component {
//     // static propTypes = {
//     //     dateDisplay: PropTypes.string,
//     //     onChange: PropTypes.func,
//     //     showDate: PropTypes.string
//     // }
// //     // constructor(props) {
// //     //     super(props);
// //     //     this.state = {
// //     //         isDateTimePickerVisible: false,
// //     //         dateDisplay: '',
// //     //         showDate: '',
// //     //     };
// //     // }
// //     // showDateTimePicker = () => {
// //     //     this.setState({ isDateTimePickerVisible: true });
// //     // };
// //     // hideDateTimePicker = () => {
// //     //     this.setState({ isDateTimePickerVisible: false });
// //     // };
// //     // handleDatePicked = date => {
// //     //     this.setState({
// //     //         isDateTimePickerVisible: false,
// //     //         dateDisplay: moment(date).format('DD / MM / YY'),
// //     //         // showDate : moment(date).toString(''),

// //     //     })
// //     // };
// //     // render() {
// //     //     return (
//             // <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
//             //     <DateTimePicker
//             //         isVisible={this.state.isDateTimePickerVisible}
//             //         onConfirm={this.handleDatePicked}
//             //         onCancel={this.hideDateTimePicker}
//             //         mode='date'>
//             //     </DateTimePicker>

//             //     <TouchableOpacity onPress={this.showDateTimePicker}>
//             //         <AntDesign style={{ top: 5 }} name="calendar" color={COLORS.lightGreen} size={30} />
//             //     </TouchableOpacity>

// //     //             <NumberTextInput>
// //     //             {this.state.dateDisplay}
// //     //             </NumberTextInput>


// //     //             {/* <Text style={{ fontSize: 16, textAlign: 'center', color: 'black' }}>
// //     //                 {this.state.dateDisplay}
// //     //             </Text> */}

// //     //         </View>
// //     //     );
// //     // }
// // }

// // DateTimePicker.prototype = {
// //     onChange:PropTypes.func.isRequired,
// //     // dateDisplay: PropTypes.string.isRequired,  
// // }

