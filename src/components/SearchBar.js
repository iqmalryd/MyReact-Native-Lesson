import React from 'react'
import { StyleSheet, View, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
const SearchBar = ({ term, onTermChange, onTermEnd }) => {
    return (
        <View style={styles.searchBox}>
            <Icon
                color="#121212"
                name="search"
                size={24}
            />
            <TextInput
                autoCapitalize='none'
                autoCorrect={false}
                style={styles.inputText}
                placeholder="Mau nonton apa??"
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermEnd}
            />
        </View>
    )

}

export default SearchBar

const styles = StyleSheet.create({
    searchBox: {
        flexDirection: 'row',
        alignItems: 'center',
        // borderColor: '#333333',
        // borderWidth: 1,
        marginHorizontal: 20,
        marginTop: 10,
        paddingHorizontal: 12,
        borderRadius: 50,
        backgroundColor: '#666666',
        marginBottom: 10
    },
    inputText: {
        marginLeft: 10,
        flex: 1,
        color: '#fff'
    }
})
