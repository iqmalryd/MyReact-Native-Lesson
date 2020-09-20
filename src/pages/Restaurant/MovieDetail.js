import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const MovieDetail = ({ route }) => {
    const { id } = route.params;
    return (
        <View>
            <Text>This is detail screen {JSON.stringify(id)} </Text>
        </View>
    )
}

export default MovieDetail

const styles = StyleSheet.create({})
