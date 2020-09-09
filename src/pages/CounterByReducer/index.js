import React, { useReducer } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'


const reducer = (state, action) => {
    //state = counter : x ; dimana nilai x selalu berubah ubah
    // action == {type: tambah||kurang, payload:1||-1}
    switch (action.type) {
        case 'tambah':
            return { ...state, counter: state.counter + action.payload };
        case 'kurang':
            return { ...state, counter: state.counter - action.payload };
        default:
            return state;
    }

}

const index = () => {

    const [state, dispatch] = useReducer(reducer, { counter: 0 });
    return (
        <View>
            <Button
                title="Tambah"
                onPress={() => {
                    dispatch({ type: 'tambah', payload: 1 })
                }}
            />

            <Text>Nilai : {state.counter} </Text>

            <Button
                title="Kurang"
                onPress={() => {
                    dispatch({ type: 'kurang', payload: 1 })
                }}
            />
        </View>
    )
}

export default index

const styles = StyleSheet.create({})
