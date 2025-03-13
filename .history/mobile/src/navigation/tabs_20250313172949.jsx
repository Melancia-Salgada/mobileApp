import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home';
import Adjust from '../screens/Adjust';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

export default const Tabs = () => {
  return(
    <Tab>
      <Tab.Screen name='home' component={Home}/>
      <Tab.Screen name='adjust' component={Adjust}/>
      <Tab.Screen name='profile' component={Profile}/>
    </Tab>
  )
}