import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Animated } from 'react-native'


const Ball = () => {
    const [position, setPosition] = useState({})
    let pos = new Animated.ValueXY(0, 0)
    useEffect( () => {
        Animated.spring(pos, {
            toValue: { x: 200, y: 500 }
        }).start()
    }, [])
    return (
        <Animated.View style={pos.getLayout()}>

            <View style={styles.ball} />
        </Animated.View>
    )
}

export default Ball

const styles = StyleSheet.create({
    ball: {
        height: 60,
        width: 60,
        borderRadius: 30,
        borderWidth: 30,
        borderColor: "blue"
    }
})
