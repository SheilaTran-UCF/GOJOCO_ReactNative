import React, { Component } from 'react'
import { View, StyleSheet, Text, TextInput } from "react-native"
import PropTypes from 'prop-types';
import styleTextInput from "../../textInput/index"
import { FONT, COLORS } from "../../constant/themes"
import AntDesign from "react-native-vector-icons/AntDesign"
export default class PasswordTextInput extends Component {
    static propTypes = {
        onChangeText: PropTypes.func,
        value: PropTypes.string,
        placeholder: PropTypes.string,
    }
    render() {
        return (
            <TextInput
                style={styleTextInput.styleTextInput.passwordTextInput}
                value={this.props.value}
                onChangeText={this.props.onChangeText}
                placeholder={this.props.placeholder}
                placeholderTextColor={{ ...FONT.textPlaceholder_Gray }}
                data={this.props.children}
                secureTextEntry={true}>
                {this.props.children}
            </TextInput>

        )
    }
}
TextInput.prototype = {
    placeholder: PropTypes.string.isRequired,
    onChangeText: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,

}