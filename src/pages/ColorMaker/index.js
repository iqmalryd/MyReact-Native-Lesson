import React, { useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import ColorAdjust from '../../components/ColorAdjust'

const index = () => {

    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

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
    console.log(red)
    return (
        <View style={{ flex: 1 }}>
            <View style={{ backgroundColor: `rgb(${red}, ${green}, ${blue})`, justifyContent: 'center', flex: 1, marginHorizontal: 40, marginTop: 40 }} />
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'flex-end', marginVertical: 30 }}>

                <ColorAdjust
                    color="Red"
                    value={red}
                    onIncrease={() => { COLOR_ADJUST('red', COLOR_INCREMENT) }}
                    onDecrease={() => { COLOR_ADJUST('red', -1 * COLOR_INCREMENT) }}
                />
                <ColorAdjust
                    color="green"
                    value={green}
                    onIncrease={() => { COLOR_ADJUST('green', COLOR_INCREMENT) }}
                    onDecrease={() => { COLOR_ADJUST('green', -1 * COLOR_INCREMENT) }}
                />
                <ColorAdjust
                    color="blue"
                    value={blue}
                    onIncrease={() => { COLOR_ADJUST('blue', COLOR_INCREMENT) }}
                    onDecrease={() => { COLOR_ADJUST('blue', -1 * COLOR_INCREMENT) }}

                />

            </View>
        </View>
    )
}

const colors = ({ warna, nilai }) => {
    const color = {

    }
    return
}

export default index

const styles = StyleSheet.create({})
