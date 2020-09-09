import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ImageDetail from '../../components/ImageDetail'

const index = () => {
    return (
        <View>
            <ImageDetail
                title="Forest"
                imageSource={require(`../../assets/forest.jpg`)} />
            <ImageDetail
                title="Beach"
                imageSource={require(`../../assets/beach.jpg`)}
            />
            <ImageDetail
                title="Montain"
                imageSource={require(`../../assets/mountain.jpg`)}

            />
        </View>
    )
}

export default index

const styles = StyleSheet.create({})
