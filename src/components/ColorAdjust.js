import React, { useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const ColorAdjust = ({ color, onIncrease, onDecrease, value }) => {


    return (

        <View style={{ flex: 1, marginHorizontal: 3, height: 90, justifyContent: 'space-around' }}>
            <Text>{value}</Text>
            <Button
                title={`More ${color}`}
                onPress={() => {
                    onIncrease()
                }}

            />
            <Button
                title={`less ${color}`}
                onPress={() => {
                    Math.abs(onDecrease())
                }}
            />
        </View>
    )
}

export default ColorAdjust

const styles = StyleSheet.create({})
