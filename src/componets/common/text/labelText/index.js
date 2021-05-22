import React, { Component } from 'react'
import {StyleSheet,Text} from 'react-native';
import {FONT} from '../../constant/themes'
import PropTypes from 'prop-types';
export default class LableText extends Component {
    static propTypes = {
        text: PropTypes.string,
      }
    render() {
        return (
           <Text
           style ={{...FONT.textH3_Black2}}>
            {this.props.text}   {this.props.children}
           </Text>
        )
    }
}
Text.prototype ={
    text :PropTypes.string.isRequired,
}