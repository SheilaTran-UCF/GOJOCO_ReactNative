import React, { Component } from 'react'
import {StyleSheet,Dimensions,Text} from 'react-native';
import {COLORS,FONT,SIZE} from '../../constant/themes'
import PropTypes from 'prop-types';
export default class InputText extends Component {
    static propTypes = {
        text: PropTypes.string,
      }
    render() {
        return (
           <Text
           style ={{...FONT.textPlaceholder_Gray}}>
            {this.props.text}
           </Text>
        )
    }
}
Text.prototype ={
    text :PropTypes.string.isRequired,
}