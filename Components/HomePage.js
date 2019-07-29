import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

import Styles from '../Styles/Styles'
import PermissionsHelper from '../Helpers/PermissionsHelper'

class HomePage extends Component {
    constructor() {
        super()

        let permissionsChecker = false

        while (!permissionsChecker) {
            permissionsChecker = PermissionsHelper()
        }
    }

    render() {
        return (
            <View style={Styles.container}>
                <Text>Open up App.js to start working on your app!</Text>

                <Button onPress={this.goToDetailsPage}
                    title="Details"
                    color="#841584" />
            </View>
        )
    }

    goToDetailsPage = () => {
        this.props.navigation.navigate("DetailsPage")
    }
    
}

export default HomePage