import React, { Component } from 'react'
import { View, StyleSheet, Text,TextInput} from "react-native"
import PropTypes from 'prop-types';
import styleTextInput from "../index"
import {FONT,COLOR} from "../../constant/themes"
export default class DayOfBirthInforTextInput extends Component {
    static propTypes = {
        onChangeText: PropTypes.func,
        value: PropTypes.string,
        placeholder: PropTypes.string,
        data : PropTypes.string,
      }
    render() {
        return (
            <TextInput
           style={styleTextInput.styleTextInput.UserTextInput}
           value ={this.props.value}
           onChangeText={this.props.onChangeText}
           placeholder={this.props.placeholder}
           keyboardType='number-pad'
           placeholderTextColor={{...FONT.textPlaceholder_Gray}}
           maxLength={10}
           data={this.props.children}>
               {this.props.children}
            </TextInput>
        )
    }
}
TextInput.prototype ={
    placeholder: PropTypes.string.isRequired,
    onChangeText: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    data : PropTypes.string.isRequired,
}
