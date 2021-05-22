import React, { Component } from 'react'
import {Image, View,Dimensions} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from "react-native-vector-icons/Ionicons"
import AntDesign from "react-native-vector-icons/AntDesign"
import EvilIcons from "react-native-vector-icons/EvilIcons"
import Home from "../../../screen/home/Home"
import Login from "../../../screen/login/Login"
import PersonalInformation from "../../../screen/personalInformation/PersonalInfromation"
import PersonalInformation1 from "../../../screen/personalInformation/PersonInformation-1"
import PersonalInformation35 from "../../../screen/personalInformation/PersonInformation-35"
import PersonalInformation_Data from "../../../screen/personalInformation/PersonInformation_LoadData"
import {COLORS} from "../../../componets/common/constant/themes"
const Tab = createMaterialBottomTabNavigator();
const { width, height } = Dimensions.get('window')
const stack =  createStackNavigator();

const Stack = ()=>{
  return(
    <Stack.Navigator>
      <Stack.Screen name = 'PersonalInformation1' compoennt = {PersonalInformation1} />
      <Stack.Screen name = 'PersonalInformation35' compoennt = {PersonalInformation35} />
    </Stack.Navigator>
  )
}
const tabs = () => {
  return (
    <Tab.Navigator
      activeColor="#ffff"
      barStyle={{backgroundColor: 'tomato',height:height/16}}
      shifting={true}>
        
        
      {/* <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: COLORS.white,
          tabBarIcon: ({color}) => (
            <Ionicons name="home-outline" color={COLORS.lightGreen} size={25} />
          ),
        }}
      /> */}
        <Tab.Screen
        name="PersonalInformation"
        component={PersonalInformation}
        options={{
          tabBarLabel: 'PersonalInformation',
          tabBarColor: 'white',
          tabBarIcon: ({color}) => (
            <AntDesign name="calendar" color={COLORS.lightGreen} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="PersonalInformation_Data"
        component={PersonalInformation_Data}
        options={{
          tabBarLabel: 'PersonalInformation_Data',
          tabBarColor: 'white',
          tabBarIcon: ({color}) => (
            <AntDesign name="wallet" color={COLORS.lightGreen} size={25} />
          ),
        }}
      />

     
       
      {/* <Tab.Screen
        name="PersonalInformation1"
        component={PersonalInformation1}
        options={{
          tabBarLabel: 'PersonalInformation1',
          tabBarColor: 'white',
          tabBarIcon: ({color}) => (
            <AntDesign name="menuunfold" color={'black'} size={24} />
          ),
        }}
      /> */}
       {/* <Tab.Screen
        name="PersonalInformation35"
        component={PersonalInformation35}
        options={{
          tabBarLabel: 'PersonalInformation35',
          tabBarColor: 'white',
          tabBarIcon: ({color}) => (
            <EvilIcons name="infocirlce" color={'black'} size={24} />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
};

export default tabs;
