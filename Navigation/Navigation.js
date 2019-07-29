import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomePage from '../Components/HomePage'
import DetailsPage from '../Components/DetailsPage'

const AppStackNavigator = createStackNavigator({
    HomePage: {
        screen: HomePage,
        navigationOptions: {
            title: 'HomePage'
        }
    },
    DetailsPage: {
        screen: DetailsPage
    }
}, {
        headerMode: 'none',
    })

export default createAppContainer(AppStackNavigator)