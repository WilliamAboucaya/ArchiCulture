import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomePage from '../Components/HomePage'
import DetailsPage from '../Components/DetailsPage'
import CameraPage from '../Components/CameraPage'

const AppStackNavigator = createStackNavigator({
    HomePage: {
        screen: HomePage,
        navigationOptions: {
            title: 'HomePage'
        }
    },
    DetailsPage: {
        screen: DetailsPage
    },
    CameraPage: {
        screen: CameraPage
    }
}, {
        headerMode: 'none',
    })

export default createAppContainer(AppStackNavigator)