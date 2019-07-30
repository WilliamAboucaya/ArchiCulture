import React, {Component} from 'react'
import { Dimensions, Text, View } from 'react-native'
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
        const { status: existingStatus } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
        const result = (await ImagePicker.launchCameraAsync({}))

        if (!result.cancelled) {
            this.setState({ imageUri: result.uri })
            this.setState({ name: "" })
            this.setDimensions(result.width, result.height)
            
            this.props.navigation.navigate('LoadingPage', {photoNumber:this.props.navigation.getParam('photoNumber')})
        }
        else if (result.cancelled) {
            this.props.navigation.navigate('HomePage')
        }
    }

    setDimensions(width, height) { // resize image to the phone screen size
        let rate = width / Dimensions.get('window').width
        let tmp_height = height / rate
        this.setState({ height: tmp_height })
        this.setState({ width: Dimensions.get('window').width })
    }
}

export default CameraPage