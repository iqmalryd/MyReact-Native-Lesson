import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../pages/Home'
import ButtonLesson from '../pages/ButtonLesson'
import ImageScreen from '../pages/ImageScreenLesson'
import Counter from '../pages/Counter'
import Color from '../pages/ColorScreen'
import ColorMaker from '../pages/ColorMaker'
import Reducer from '../pages/Reducer'
import CounterByReducer from '../pages/CounterByReducer'
import TextScreen from '../pages/TextScreen'

const Stack = createStackNavigator();

const index = () => {
    return (
        <Stack.Navigator initialRouteName={HomeScreen}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Button" component={ButtonLesson} />
            <Stack.Screen name="ImageScreen" component={ImageScreen} />
            <Stack.Screen name="Counter" component={Counter} />
            <Stack.Screen name="Color" component={Color} />
            <Stack.Screen name="ColorMaker" component={ColorMaker} />
            <Stack.Screen name="Reducer" component={Reducer} />
            <Stack.Screen name="Counter By Reducer" component={CounterByReducer} />
            <Stack.Screen name="Text Screen" component={TextScreen} />
        </Stack.Navigator>
    )
}





export default index

const styles = StyleSheet.create({})
