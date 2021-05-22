import React, { Component } from 'react'
import {StyleSheet,Dimensions,Text} from 'react-native';
import {COLORS,FONT,SIZE} from '../../constant/themes'
import PropTypes from 'prop-types';
export default class HeaderText extends Component {
    static propTypes = {
        text: PropTypes.string,
      }
    render() {
        return (
           <Text
           style ={{...FONT.textH1_White,textAlign:'center'}}>
            {this.props.text}
           </Text>
        )
    }
}
Text.prototype ={
    text :PropTypes.string.isRequired,
}
