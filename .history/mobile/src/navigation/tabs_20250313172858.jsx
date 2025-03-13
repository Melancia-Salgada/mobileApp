import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home';
import Home from '../screens/Home';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return(
    <Tab>
      <Tab.Screen name='home' component={Home}/>
      <Tab.Screen name='adjust' component={Adjust}/>
      <Tab.Screen name='home' component={Home}/>
    </Tab>
  )
}