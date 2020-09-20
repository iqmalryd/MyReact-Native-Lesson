import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import Cards from './Cards'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native'

const ResultList = ({ title, results }) => {

    const navigation = useNavigation();
    return (
        <View>
            <View style={styles.text}>
                <Text style={{ color: '#fff', fontWeight: 'bold' }}>{title}</Text>
                <Icon name="chevron-right" color="#fff" />
            </View>
            <View style={{ marginLeft: 5 }}>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={results}
                    keyExtractor={(results) => results.imdbID}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity
                                onPress={() => navigation.navigate('MovieDetail', { id: item.imdbID })}
                            >
                                <Cards
                                    results={item}
                                />
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
        </View>
    )
}

export default ResultList

const styles = StyleSheet.create({
    list: {
        fontSize: 14,
        color: '#fff',
        fontWeight: 'bold',
        marginLeft: 10,
    },
    text: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
        marginHorizontal: 10,

    }
})
