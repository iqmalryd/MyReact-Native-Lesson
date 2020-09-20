import React from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'

const index = ({ navigation }) => {
    return (
        <View style={styles.center}>
            <Button
                onPress={() => navigation.navigate("Button")}
                title='Go to Button Screens'
            />

            <Button
                onPress={() => navigation.navigate('ImageScreen')}
                title="Go to Image Screen"
            />
            <Button
                onPress={() => navigation.navigate('Counter')}
                title="Go to Counter"
            />
            <Button
                onPress={() => navigation.navigate('Color')}
                title="Generate Color"
            />
            <Button
                onPress={() => navigation.navigate('ColorMaker')}
                title="Generate Color"
            />
            <Button
                onPress={() => navigation.navigate('Reducer')}
                title="Reducer"
            />
            <Button
                onPress={() => navigation.navigate('Counter By Reducer')}
                title="Counter By Reducer"
            />
            <Button
                onPress={() => navigation.navigate('Text Screen')}
                title="Text Input"
            />
            <Button
                onPress={() => navigation.navigate('Restaurant')}
                title="Restaurant"
            />

        </View>
    )
}

export default index

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: "center",
    }
})
