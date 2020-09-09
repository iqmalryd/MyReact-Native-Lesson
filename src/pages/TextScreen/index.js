import React, { useReducer } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'


const reducer = (state, action) => {
    switch (action.type) {
        case 'change_text':
            return { ...state, text: action.params }
    }
}

const index = () => {

    const [state, dispatch] = useReducer(reducer, { text: '' })

    return (
        <View style={styles.body}>
            <TextInput style={styles.textInput}
                onChangeText={text => dispatch({ type: 'change_text', params: text })}
                autoCapitalize='none'
                placeholder="Name"

            />
            {state.text.length < 5 ? <Text style={{ color: 'red' }}> Password atleast have 5 character!</Text> : null}

        </View>
    )
}

export default index

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center'
    },
    textInput: {
        borderColor: 'black',
        borderWidth: 1,
        flex: .04,
        width: 300,
        flexDirection: "row",
        marginBottom: 20,
    }

})
