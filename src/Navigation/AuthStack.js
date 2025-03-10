import {
  createStackNavigator,
} from '@react-navigation/stack';
import React from 'react';
import IntroScreen from '../Screens/IntroScreen';
import {useSelector} from 'react-redux';
import Login from '../Screens/Auth/Login';
import ChooseUser from '../Screens/Auth/ChooseUser';
import SignUp from '../Screens/Auth/SignUp';
import Otp from '../Screens/Auth/Otp';
import NewLogin from '../Screens/Auth/NewLogin';
import ForgotPassword from '../Screens/Auth/ForgotPassword';


const AuthStack = () => {
  const Stack = createStackNavigator();
  const skip_data = useSelector(store => store?.skipData);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
       {skip_data && <Stack.Screen
          options={{headerShown: false}}
          name="IntroScreen"
          component={IntroScreen}
        />
       }
        <Stack.Screen
        options={{headerShown: false}}
        name="ChooseUser"
        component={ChooseUser}
      />
        <Stack.Screen
        options={{headerShown: false}}
        name="Login"
        component={Login}
      />
        <Stack.Screen
        options={{headerShown: false}}
        name="SignUp"
        component={SignUp}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Otp"
        component={Otp}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="NewLogin"
        component={NewLogin}
      />
      <Stack.Screen
       options={{headerShown: false}}
       name="ForgotPassword"
       component={ForgotPassword}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
