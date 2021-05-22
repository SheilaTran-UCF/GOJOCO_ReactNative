import React, { Component } from 'react'
import { View, StyleSheet, Text, TextInput } from "react-native"
import PropTypes from 'prop-types';
import styleTextInput from "../index"
import { FONT, COLOR } from "../../constant/themes"
import { LabelText } from "../../text/labelText/index"
export default class NumberPhoneInforTextInput extends Component {
    static propTypes = {
        onChangeText: PropTypes.func,
        value: PropTypes.string,
        placeholder: PropTypes.string,
        data: PropTypes.string,
        onBlur : PropTypes.func,
        onfocus: PropTypes.func,
    }
    render() {
        return (
                <TextInput
                onFocus={this.props.onFocus}
                onBlur={this.props.onBlur}
                    keyboardType='phone-pad'
                    keyboardAppearance='default'
                    maxLength={12}
                    style={styleTextInput.styleTextInput.UserTextInput}
                    value={this.props.value}
                    onChangeText={this.props.onChangeText}
                    placeholder={this.props.placeholder}
                    placeholderTextColor={{ ...FONT.textPlaceholder_Gray }}
                    data={this.props.children}>
                    {this.props.children}
                </TextInput>
        )
    }
}
TextInput.prototype = {
    placeholder: PropTypes.string.isRequired,
    onChangeText: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    data: PropTypes.string.isRequired,
    onBlur : PropTypes.func.isRequired,
    onfocus: PropTypes.func.isRequired,
}
