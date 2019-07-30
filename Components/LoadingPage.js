import React, { Component } from 'react'
import { ActivityIndicator, Text, View } from 'react-native'
import { NavigationActions } from 'react-navigation'

import Styles from '../Styles/Styles'

class LoadingPage extends Component {
    state = {
        timePassed: false
    }

    componentDidMount() {
        setTimeout(function () { console.log("Processing...") }, 3000)
        this.props.navigation.navigate('DetailsPage', { photoNumber: this.props.navigation.getParam('photoNumber') })
    }

    render() {
        return (
            <View style={Styles.container}>
                <Text>Reconnaissance en cours...</Text>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        )
    }
}

export default LoadingPage