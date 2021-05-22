import React, { Component } from 'react'
import {StyleSheet,Dimensions,Text} from 'react-native';
import {COLORS,FONT,SIZE} from '../../constant/themes'
import PropTypes from 'prop-types';
export default class H2Text extends Component {
    static propTypes = {
        text: PropTypes.string,
      }
    render() {
        return (
           <Text
           style ={{...FONT.textH2_Black}}>
            {this.props.text}
           </Text>
        )
    }
}
Text.prototype ={
    text :PropTypes.string.isRequired,
}
