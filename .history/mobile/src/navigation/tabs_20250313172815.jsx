import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return(
    <Tab>
      <Tab.Screen name='home' component={Home}/>
      
    </Tab>
  )
}