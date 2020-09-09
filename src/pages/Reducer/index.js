import React, { useReducer } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import ColorAdjust from '../../components/ColorAdjust'

const COLOR_INCREMENT = 15;
const COLOR_ADJUST = (color, value) => {
    if (color === 'red') {
        if (red + value > 255 || red + value < 0) {
            return;
        } else {
            return setRed(red + value)
        }
    } else if (color == 'blue') {
        if (blue + value > 257 || blue + value < 0) {
            return;
        } else {
            return setBlue(blue + value)
        }
    } else {
        if (green + value > 257 || green + value < 0) {
            return;
        } else {
            return setGreen(green + value)
        }
    }

}
const reducer = (state, action) => {
    //state = {red:x, green:x, blue:x} dimana x bernilai berubah ubah
    // action = {colorTochange: 'red' || 'green' ||'blue' , amount : 15||-15}
    console.log(action);
    switch (action.type) {
        case 'change_red':
            return state.red + action.payload > 255 || state.red + action.payload < 0 ? state : { ...state, red: state.red + action.payload };
        case 'change_green':
            return state.green + action.payload > 255 || state.green + action.payload < 0 ? state : { ...state, green: state.green + action.payload };
        case 'change_blue':
            return state.blue + action.payload > 255 || state.blue + action.payload < 0 ? state : { ...state, blue: state.blue + action.payload };
        default:
            return state;
    }
}

const index = () => {
    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
    const { red, green, blue } = state;
    return (
        <View style={{ flex: 1 }}>
            <View style={{ backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`, justifyContent: 'center', flex: 1, marginHorizontal: 40, marginTop: 40 }} />
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'flex-end', marginVertical: 30 }}>

                <ColorAdjust
                    color="red"
                    value={red}
                    onIncrease={() => dispatch({ type: 'change_red', payload: COLOR_INCREMENT })}
                    onDecrease={() => dispatch({ type: 'change_red', payload: -1 * COLOR_INCREMENT })}
                />
                <ColorAdjust
                    color="green"
                    value={green}
                    onIncrease={() => { dispatch({ type: 'change_green', payload: COLOR_INCREMENT }) }}
                    onDecrease={() => { dispatch({ type: 'change_green', payload: -1 * COLOR_INCREMENT }) }}
                />
                <ColorAdjust
                    color="blue"
                    value={blue}
                    onIncrease={() => { dispatch({ type: 'change_blue', payload: COLOR_INCREMENT }) }}
                    onDecrease={() => { dispatch({ type: 'change_blue', payload: -1 * COLOR_INCREMENT }) }}

                />

            </View>
        </View>
    )
}


export default index

const styles = StyleSheet.create({})
