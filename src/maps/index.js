import React, { Component } from 'react';
import {
    View, StyleSheet, Text,
     Dimensions, Alert, Platform} from 'react-native';
import MapView ,{ PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
const { height, width } = Dimensions.get('window')
const componentHeight = height / 3
import { request, PERMISSIONS } from "react-native-permissions"
export default class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: 0,
            longitude: 0,
            latitudeDelta: 0,
            longitudeDelta: 0,
        };
    }
    componentDidMount() {
        this.requestLocationPermission();
    }
    requestLocationPermission = async () => {
        if (Platform.OS === "IOS") {
            var response = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
            console.log("IOS: " + response);
   
            if (response === "granted") {
                this.locateCurrentPosition();
            }
        } else {
            var response = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
            console.log("Android: " + response);
            if (response === "granted") {
                this.locateCurrentPosition();
            }
        }
    };
    locateCurrentPosition = () => {
        Geolocation.getCurrentPosition(
            (position) => {
                console.log(JSON.stringify(position));

                let initialPosition = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005,
                };
                this.setState({
                    initialPosition
                });
            },
            (error) => Alert.alert(error.message),
            { enableHighAccuracy: true, timeout: 1000, maximumAge: 1000 }
        );
    };
    render() {
        return (
            <View style={styles.container}>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={styles.map} 
                    showsUserLocation={true}
                    zoomEnabled={false}
                    zoomTapEnabled={false}
                    zoomControlEnabled={false}
                    scrollEnabled={false}
                    rotateEnabled={true}
                    region={this.state.initialPosition}>              
                    </MapView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFill,
        width: width,
        height: height,
        position: 'absolute',
        flex: 1,
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
  
});
