import React, { Component } from 'react'
import { View, StyleSheet, Text, TextInput } from "react-native"
import PropTypes from 'prop-types';
import styleTextInput from "../../textInput/index"
import { FONT, COLOR } from "../../constant/themes"

export default class SmallTextInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            surNameErr: '',
            value: '',
            onBlur: '',
            onFocus :'',
            style :'',
        }
    }
    static propTypes = {
        onChangeText: PropTypes.func,
        value: PropTypes.string,
        placeholder: PropTypes.string,
        data: PropTypes.string,
        onBlur: PropTypes.func,
        onFocus: PropTypes.func,
        style : PropTypes.func,
    }
    render() {
        return (
            <View>
                <TextInput
                    style={this.props.style}
                    onFocus={this.props.onFocus}
                    onBlur={this.props.onBlur}
                    style={styleTextInput.styleTextInput.smallTextinput}
                    value={this.props.value}
                    onChangeText={this.props.onChangeText}
                    placeholder={this.props.placeholder}
                    placeholderTextColor={{ ...FONT.textPlaceholder_Gray }}
                    keyboardAppearance='light'
                    maxLength={15}
                    data={this.props.children}>
                    {this.props.children}
                </TextInput>
            </View>
        )
    }
}
TextInput.prototype = {
    placeholder: PropTypes.string.isRequired,
    onChangeText: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    data: PropTypes.string.isRequired,
    onBlur: PropTypes.func.isRequired,
    onFocus: PropTypes.func.isRequired,
    style : PropTypes.func.isRequired,
}
