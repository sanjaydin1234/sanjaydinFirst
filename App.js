
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './compoents/Home/Home';
import About from './compoents/About/About';
import Login from './compoents/Register/Login';
import Signup from './compoents/Register/SignUp';
import Profile from './compoents/Register/Profile';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='home'>
        <Stack.Screen name='home' component={Home}></Stack.Screen>
        <Stack.Screen name='about' component={About}></Stack.Screen>
        <Stack.Screen name='login' component={Login}></Stack.Screen>
        <Stack.Screen name='signup' component={Signup}></Stack.Screen>
        <Stack.Screen name='profile' component={Profile}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}



