import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import React from 'react';
import Welcome from '../Screens/Partner/Welcome/Welcome';
import ProfileStep1 from '../Screens/Partner/Profile/ProfileStep1';
import ProfileStep2 from '../Screens/Partner/Profile/ProfileStep2';
import ProfileStep3 from '../Screens/Partner/Profile/ProfileStep3';
import Congratulations from '../Screens/Partner/Profile/Congratulations';
import TrainingVideosScreen from '../Screens/Partner/Profile/TrainingVideosScreen';
import Dashboard from '../Screens/Partner/Profile/Dashboard';
import { TabNavigation } from './TabNavigation';

const commonOptions = {
  CardStyleInterpolators: CardStyleInterpolators.forHorizontalIOS,
  headerShown: false,
};
const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{...commonOptions}}
      />
      <Stack.Screen
        name="ProfileStep1"
        component={ProfileStep1}
        options={{...commonOptions}}
      />
      <Stack.Screen
        name="ProfileStep2"
        component={ProfileStep2}
        options={{...commonOptions}}
      />

      <Stack.Screen
        name="ProfileStep3"
        component={ProfileStep3}
        options={{...commonOptions}}
      />
      <Stack.Screen
        name="Congratulations"
        component={Congratulations}
        options={{...commonOptions}}
      />
       <Stack.Screen
        name="TrainingVideosScreen"
        component={TrainingVideosScreen}
        options={{...commonOptions}}
      />
       <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{...commonOptions}}
      />
       <Stack.Screen
        name="TabNavigation"
        component={TabNavigation}
        options={{...commonOptions}}
      />
      
    </Stack.Navigator>
  );
};

export default RootStack;
