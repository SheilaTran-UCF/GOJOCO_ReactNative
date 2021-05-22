import React, { Component } from 'react'
import { View, StyleSheet, Text,TextInput} from "react-native"
import PropTypes from 'prop-types';
import styleTextInput from "../../textInput/index"
import {FONT,COLOR} from "../../constant/themes"
export default class NumberTextInput extends Component {
    static propTypes = {
        onChangeText: PropTypes.func,
        value: PropTypes.string,
        placeholder:PropTypes.string,
        data : PropTypes.string,
      }
    render() {
        return (
            <TextInput
           style={styleTextInput.styleTextInput.numPhoneTextInput}
           value ={this.props.value}
           onChangeText={this.props.onChangeText}
           placeholder={this.props.placeholder}
           placeholderTextColor={{...FONT.textPlaceholder_Gray}}
           keyboardType='number-pad'
           maxLength ={12}>
               {this.props.children}
            </TextInput>
        )
    }
}
TextInput.prototype ={
    onChangeText: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    data : PropTypes.string.isRequired,
}
