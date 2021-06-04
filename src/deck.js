import React, { Component } from 'react'
import { Text, View, Animated, PanResponder, Dimensions } from 'react-native'

const SCREEN_WIDTH = Dimensions.get('window').width
const SWIPE_THRESHOLD = 0.25 * SCREEN_WIDTH
const SWIPE_DURATION = 250
export class Deck extends Component {
    constructor(props) {
        super(props)
        const position = new Animated.ValueXY()
        const panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: (event, gesture) => {
                position.setValue({ x: gesture.dx, y: gesture.dy })
            },
            onPanResponderRelease: (event, gesture) => {
                if(gesture.dx > SWIPE_THRESHOLD){
                   this.forceSwipe("right")
                }else if(gesture.dx < -SWIPE_THRESHOLD){
                    this.forceSwipe("left")
                }else{
                    this.resetPosition()
                }
            }
        })
        this.state = {
            panResponder,
            position
        }
    }

    forceSwipe(direction){
        const x = direction === 'right'? SCREEN_WIDTH : -SCREEN_WIDTH
        Animated.timing(this.state.position, {
            toValue: {x, y: 0},
            duration: SWIPE_DURATION,
            useNativeDriver: !true
        }).start(()=> this.onSwipeComplete(direction))
    }

    onSwipeComplete(direction) {
        const {onSwipeRight, onSwipeLeft} = this.props

        direction === 'right' ? onSwipeRight() : onSwipeLeft()
    }

    resetPosition() {
        Animated.spring(this.state.position, {
            toValue:{x: 0, y: 0},
            useNativeDriver: !true
        }).start()
    }
    getCardStyle() {
        const {position} = this.state
        const rotate = position.x.interpolate({
            inputRange: [-SCREEN_WIDTH * 2.0, 0, SCREEN_WIDTH * 2.0],
            outputRange: ['-120deg', '0deg', '120deg']
        })
        return {
            ...position.getLayout(),
            transform: [{rotate}]
        }
    }

    renderCards() {
        return (
            this.props.data.map((card, index) => {
                if (index === 0) {
                    return (
                        <Animated.View 
                            key={index}
                            style={this.getCardStyle()}
                            {...this.state.panResponder.panHandlers}>
                            {this.props.renderCard(card)}
                        </Animated.View>
                    )
                }
                return this.props.renderCard(card)
            })
        )
    }
    render() {
        return (
            <>
                <View>
                    {this.renderCards()}
                </View>
            </>
        )
    }
}

export default Deck
