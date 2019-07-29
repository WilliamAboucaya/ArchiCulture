import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomePage from '../Components/HomePage'

const AppStackNavigator = createStackNavigator({
    Home: {
        screen: HomePage,
        navigationOptions: {
            title: 'HomePage'
        }
    }
}, {
    headerMode: 'none',
})

export default createAppContainer(AppStackNavigator)