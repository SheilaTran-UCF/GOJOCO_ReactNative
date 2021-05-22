
import React, { Component } from 'react';
import {
    View, StyleSheet, Text, Image,
    TouchableOpacity, Dimensions,
} from 'react-native';
const { width, height } = Dimensions.get('window')
const componentHeight = height / 3

export default class CommonHome extends Component {
    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'row', alignSelf: 'center', justifyContent: 'center' }}>
                    < TouchableOpacity>
                        <Image
                            resizeMode="contain"
                            source={require("../../assets/images/mana.png")}
                            style={{ width: componentHeight / 2, height: componentHeight * 0.75 }}
                        ></Image>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            resizeMode="contain"
                            source={require("../../assets/images/check.png")}
                            style={{ width: componentHeight / 2, height: componentHeight * 0.75 }}
                        ></Image>
                    </TouchableOpacity>
                    < TouchableOpacity style={{ position: 'absolute', top: height / 6 }}>
                        <Image
                            resizeMode="contain"
                            source={require("../../assets/images/intro.png")}
                            style={{ width: componentHeight, height: componentHeight / 2 }}
                        ></Image>
                    </TouchableOpacity>
                </View>           
        );
    }
}
