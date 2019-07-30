import React, {Component} from 'react';
import { StyleSheet, Dimensions, Text, View, Image, Platform, CameraRoll, Alert } from 'react-native';
import { Camera } from 'expo-camera'
import * as Permissions from 'expo-permissions'
import * as ImagePicker from 'expo-image-picker'

class CameraPage extends Component {
    state = {
        hasCameraPermission: null,
        type: Camera.Constants.Type.back,
        imageUri: null,
        name: "",
        loading: false,
    }

    async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
        this.takePicture();
    }

    render() {
        const { hasCameraPermission } = this.state;
        if (hasCameraPermission === null) {
            return <View />
        } else if (hasCameraPermission === false) {
            return <Text>No access to camera</Text>
        } else {
            return (
                <View style={{ flex: 1 }}>
                    
                </View>
            )
        }
    }

    takePicture = async () => { // check the autorization and open the phone camera app
        const { status: existingStatus } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        const result = (await ImagePicker.launchCameraAsync({}));

        if (!result.cancelled) {
            this.setState({ imageUri: result.uri });
            this.setState({ name: "" });
            this.setDimensions(result.width, result.height)
            CameraRoll.saveToCameraRoll(result.uri);
        }
        else if (result.cancelled) {
            this.props.navigation.navigate('Home')
        }
    }

    snap = async () => {
        if (this.camera) {
            let photo = await this.camera.takePictureAsync();

            const captureImages = JSON.stringify(photo);
            Alert.alert(
                captureImages,
                [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
                { cancelable: false }
            )
        }
    }
}

export default CameraPage