import * as Permissions from 'expo-permissions'

const askForPermissions = async () => {
    let status = await Permissions.getAsync(Permissions.CAMERA)
    if (status !== 'granted') {
        status = await Permissions.askAsync(Permissions.CAMERA)

        return status === 'granted'
    } else {
        return true
    }
}

export default askForPermissions