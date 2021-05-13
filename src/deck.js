import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class Deck extends Component {
    renderCards() {
        return (
            this.props.data.map(card => {
                return this.props.renderCard(card)
            })
        )
    }
    render() {
        return (
            <>
                <View>
                    {this.renderCards()}
                    <Text> textInComponent </Text>
                </View>
            </>
        )
    }
}

export default Deck
