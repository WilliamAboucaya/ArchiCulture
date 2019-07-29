import React, { Component } from 'react'
import { Text, View } from 'react-native'

import Styles from '../Styles/Styles'

class HomePage extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <View style={Styles.container}>
                <Text>Page with details.</Text>
                <Text>Blah blah blah...</Text>
            </View>
        )
    }
}

export default HomePage