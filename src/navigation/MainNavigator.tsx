import {createStackNavigator} from '@react-navigation/stack';
import React, {useMemo} from 'react';
import useAuth from '../hooks/useAuth';
import useFirebaseLink from '../hooks/useFirebaseLink';
import Home from '../screens/Home';
import Login from '../screens/Login';
import LoginEmailSent from '../screens/LoginEmailSent';
import LoginFailed from '../screens/LoginFailed';

const Stack = createStackNavigator();

export type RootStackParamList = {
  Login: undefined;
};

const MainNavigator: React.FC = () => {
  const {isSignedIn} = useAuth();
  const [isLoading, isError] = useFirebaseLink();

  const CurrentScreen = useMemo(() => {
    if (isSignedIn) {
      return <Stack.Screen name="Home" component={Home} />;
    }
    if (isError) {
      return <Stack.Screen name="LoginFailed" component={LoginFailed} />;
    }
    if (isLoading) {
      return <Stack.Screen name="LoginEmailSent" component={LoginEmailSent} />;
    }
    return <Stack.Screen name="Login" component={Login} />;
  }, [isError, isLoading, isSignedIn]);

  return (
    <Stack.Navigator
      screenOptions={{header: () => null, animationEnabled: false}}>
      {CurrentScreen}
    </Stack.Navigator>
  );
};

export default MainNavigator;
