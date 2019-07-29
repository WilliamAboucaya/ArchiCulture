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
                <Text>Open up App.js to start working on your app!</Text>
            </View>
        )
    }
}

export default HomePage