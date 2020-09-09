import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, FlatList } from 'react-native'

const index = () => {
    const [colors, setColors] = useState([]);
    return (
        <View>
            <Button
                title="Generate Color"
                onPress={() => {
                    setColors([...colors, randomColor()]);

                }}
            />
            <FlatList
                keyExtractor={item => { item }}
                data={colors}
                renderItem={({ item }) => {
                    return <View style={{ width: 100, height: 100, backgroundColor: item, marginVertical: 10 }} />
                }}

            />

        </View>
    )


}



const randomColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red},${green},${blue})`;
}

export default index

const styles = StyleSheet.create({})
