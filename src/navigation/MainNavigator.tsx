import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Home from '../screens/Home';
import Login from '../screens/Login';
import LoginEmailSent from '../screens/LoginEmailSent';
import LoginFailed from '../screens/LoginFailed';
import auth from '@react-native-firebase/auth';

const Stack = createStackNavigator();

export type RootStackParamList = {
  Login: undefined;
};

const MainNavigator: React.FC = () => {
  console.warn('AUTH', auth());
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{header: () => null, animationEnabled: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="LoginEmailSent" component={LoginEmailSent} />
      <Stack.Screen name="LoginFailed" component={LoginFailed} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
