import React, { useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const index = () => {

    const [counter, aturCounter,] = useState(0);
    console.log(useState()[1]);
    return (
        <View>
            <Button
                title="Tambah"
                onPress={() => {
                    aturCounter(counter + 1)
                }}
            />

            <Text>Nilai : {counter} </Text>

            <Button
                title="Kurang"
                onPress={() => {
                    aturCounter(counter - 1)
                }}
            />
        </View>
    )
}

export default index

const styles = StyleSheet.create({})
