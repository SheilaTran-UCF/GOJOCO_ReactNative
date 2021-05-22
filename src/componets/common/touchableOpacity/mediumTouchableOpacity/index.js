import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {
     View, StyleSheet, Text, Image,
    TouchableOpacity, Dimensions,
} from 'react-native';
const { width, height } = Dimensions.get('window')
const componentHeight = height / 3
import {FONT,COLOR} from "../../constant/themes"
import styleTouchableOpacity from "../../touchableOpacity/index"
import { Icon } from 'react-native-vector-icons/Icon';
export default class MediumTouchableOpacity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            touchableOpacityName: '',
            onPress :'',
        };
    }
    render() {
        return (
         
                <TouchableOpacity
                onPress={(this.props.onPress)}
                style={styleTouchableOpacity.styleTouchableOpacity.mediumTouchableOpacity}>
                <Text style={{...FONT.textTouchableOpacity_White}}>{this.props.touchableOpacityName}</Text>
               
                </TouchableOpacity>

        );
    }
}

TouchableOpacity.prototype ={
    touchableOpacityName: PropTypes.string.isRequired,
    onPress : PropTypes.func.isRequired,
}