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
                <Text>Bienvenue sur ArchiCulture</Text>

                <Button onPress={this.goToCameraPage}
                    title="Prendre une photo"
                    color="#1194f6" />
            </View>
        )
    }

    goToCameraPage = () => {
        this.setState({photoNumber: this.state.photoNumber+1})
        this.props.navigation.navigate("CameraPage", {photoNumber:this.state.photoNumber})
    }
}

export default HomePage