import React from 'react'
import { StyleSheet, View, Image } from 'react-native'

const Cards = ({ results }) => {
    return (
        <View style={styles.body}>
            <Image
                style={styles.image}
                source={{ uri: results.Poster }}
            />
        </View>
    )
}

export default Cards

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 150,
        borderRadius: 8,
    },
    body: {
        flex: 1,
        width: 100,
        height: 150,
        margin: 5,
        // backgroundColor: 'white',
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 1 },
        // shadowOpacity: 1,
        // shadowRadius: 2,
        // elevation: 3,


    },
    text: {
        fontWeight: 'bold',
        fontSize: 12,
        marginTop: 10
    }

})
