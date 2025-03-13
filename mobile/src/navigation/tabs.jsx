import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Adjust from '../screens/Adjust';
import Profile from '../screens/Profile';
import { Ionicons } from 'react-native-vector-icons';

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator 
      screenOptions={{
        tabBarActiveTintColor: '#0de9d7', // Cor do ícone quando a aba está ativa
        tabBarInactiveTintColor: 'gray', // Cor do ícone quando a aba está inativa
      }}
    >
      <Tab.Screen 
        name="home" 
        component={Home} 
        options={{
          tabBarLabel: () => null, 
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} /> 
          ),
          headerShown: false
        }}
      />
      <Tab.Screen 
        name="adjust" 
        component={Adjust} 
        options={{
          tabBarLabel: () => null, 
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="flower" size={size} color={color} /> // Usando o ícone "home-outline"
          ),
          headerShown: false
        }}
      />
      <Tab.Screen 
        name="profile" 
        component={Profile}
        options={{
          tabBarLabel: () => null, 
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} /> // Usando o ícone "home-outline"
          ),
          headerShown: false
        }} 
        />
    </Tab.Navigator>
  );
};

export default Tabs;
