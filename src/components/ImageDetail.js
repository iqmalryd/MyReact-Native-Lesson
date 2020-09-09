import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const ImageDetail = props => {
    return (
        <View>
            <Image source={props.imageSource}
            />
            <Text> You are in {props.title}</Text>
        </View>
    )
}

export default ImageDetail

const styles = StyleSheet.create({})
