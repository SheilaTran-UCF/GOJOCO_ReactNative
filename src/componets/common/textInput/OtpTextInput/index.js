import React, { Component } from 'react'
import { View, StyleSheet, Text,TextInput} from "react-native"
import PropTypes from 'prop-types';
import styleTextInput from "../../textInput/index"
import {FONT,COLOR} from "../../constant/themes"
export default class OTPTextInput extends Component {
    static propTypes = {
        onChangeText: '',
        value: '',
        placeholder: '',
      }
    render() {
        return (
            <TextInput
           style={styleTextInput.styleTextInput.OTPTextInput}
           value ={this.props.value}
           onChangeText={this.props.onChangeText}
           keyboardType='numeric'
           maxLength={1}>
            </TextInput>
        )
    }
}
TextInput.prototype ={
    onChangeText: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
}
