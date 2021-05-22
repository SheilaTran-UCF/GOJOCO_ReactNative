import React, { Component } from 'react'
import { View, Text } from "react-native"
import styleContainer from "./style"
import { Avatar, Drawer } from 'react-native-paper';
import { H2Text } from "../../componets/index"

export default class InforContainer extends Component {
    data ={
        "UserFullName": " Nguyễn Hữu Phát ",
    }
    render() {
        return (

<View style={styleContainer.hederContainer}>
                <View style={{ justifyContent: 'center', flexDirection: 'row'}}>
                    <View>
                    <Avatar.Image
                        style={{ right: 20 }}
                        source={require('../../assets/images/Logo-1.jpg')} size={50} />
                    </View>
                    <View>
                    <H2Text
                       text={this.data.UserFullName}
                    />
                    </View>
                   
                </View>
            </View>

        )
    }
}
