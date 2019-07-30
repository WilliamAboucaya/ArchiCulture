import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

import Styles from '../Styles/Styles'
import PermissionsHelper from '../Helpers/PermissionsHelper'

class HomePage extends Component {
    state ={
        photoNumber: 1,
    }
    
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

                <Button onPress={this.goToCameraPage}
                    title="Take Picture"
                    color="#1194f6" />
                <Button onPress={this.goToDetailsPage}
                    title="Details"
                    color="#841584" />
            </View>
        )
    }

    goToCameraPage = () => {
        this.props.navigation.navigate("CameraPage")
    }

    goToDetailsPage = () => {
        this.setState({photoNumber: this.state.photoNumber+1});
        console.log(this.state.photoNumber)
        this.props.navigation.navigate("DetailsPage", {photoNumber:this.state.photoNumber});
    }
    
}

export default HomePage