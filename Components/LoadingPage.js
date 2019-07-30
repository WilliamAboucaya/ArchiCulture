import React, { Component } from 'react'
import { ActivityIndicator, Text, View } from 'react-native'
import { NavigationActions } from 'react-navigation'

import Styles from '../Styles/Styles'

class LoadingPage extends Component {
    state = {
        timePassed: false
    }

    componentDidMount() {
        let that = this
        setTimeout(function () { that.props.navigation.navigate('DetailsPage', { photoNumber: that.props.navigation.getParam('photoNumber') }) }, 5000)
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