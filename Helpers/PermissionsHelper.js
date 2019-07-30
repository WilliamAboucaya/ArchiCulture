import * as Permissions from 'expo-permissions'

const askForPermissions = async () => {
    let status = await Permissions.getAsync(Permissions.CAMERA, Permissions.CAMERA_ROLL)
    if (status !== 'granted') {
        status = await Permissions.askAsync(Permissions.CAMERA, Permissions.CAMERA_ROLL)

        return status === 'granted'
    } else {
        return true
    }
}

export default askForPermissions