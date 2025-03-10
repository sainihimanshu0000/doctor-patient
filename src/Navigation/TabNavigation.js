import React from 'react';
import {useSelector} from 'react-redux';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, ImageBackground, StyleSheet, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {isIos} from '../Backend/Utility';
import {Colors} from '../Constants/Colors';
import {ImageConstant} from '../Constants/ImageConstant';
import {heightPercentageToDP, widthPercentageToDP} from 'react-native-responsive-screen';
import {
  AccountStack,
  AppointmentStack,
  HomeStack,
  SearchStack,
} from './RootStack';
import Typography from '../Component/UI/Typography';
import {Font} from '../Constants/Font';
import ProfileStep1 from '../Screens/Partner/Profile/ProfileStep1';
import Settings from '../Screens/Partner/Settings';
import ComingSoon from '../Component/UI/ComingSoon';
import { createStackNavigator } from '@react-navigation/stack';
import DrProfile from '../Screens/Partner/Profile/DrProfile';
import PhysioServices from '../Screens/Partner/Profile/PhysiotherapistServices';
import PaymentStatusScreen from '../Screens/Partner/Profile/PaymentStatusScreen';
import MyWallet from '../Screens/Partner/Profile/MyWallet';
import MyScheduleScreen from '../Screens/Partner/Profile/MyScheduleScreen';
import SetAvailabilityScreen from '../Screens/Partner/Profile/SetAvailabilityScreen';

const Stack=createStackNavigator()
const Tab = createBottomTabNavigator();

const SettingsStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Profile" component={DrProfile} />
      <Stack.Screen name="PhysioServices" component={PhysioServices} />
      <Stack.Screen name="PaymentStatusScreen" component={PaymentStatusScreen} />
      <Stack.Screen name="MyWallet" component={MyWallet} />
      <Stack.Screen name="MyScheduleScreen" component={MyScheduleScreen} />
      <Stack.Screen name="SetAvailabilityScreen" component={SetAvailabilityScreen} />

    </Stack.Navigator>
  );
};

const PaymentStack = ()=>{
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='PaymentStatusScreen'>
      <Stack.Screen name="PaymentStatusScreen" component={PaymentStatusScreen} />
      <Stack.Screen name="MyWallet" component={MyWallet} />
      <Stack.Screen name="MyScheduleScreen" component={MyScheduleScreen} />
    </Stack.Navigator>
  );
}

export const bottomTabHeight = isIos ? 90 : 70;
export const TabNavigation = () => {
  const commonOptions = {
    headerShown: false,
  };
  const navigation = useNavigation();
  const lang_code = useSelector(store => store.langCode);

  const LinearImage = ({
    image = ImageConstant?.homeTab_icon,
    isFocused = false,
  }) => {
    return (
      
        <Image
          source={image}
          style={{width: 17.5, height: 17.5, top: 5,marginBottom:7.5, }}
          resizeMode={'contain'}
          tintColor={isFocused ? Colors.white: '#ffffff60'}
        />
      
    );
  };
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarHideOnKeyboard: true,
      headerShown: false,
      tabBarActiveTintColor: Colors.blue,
      tabBarInactiveTintColor: Colors.black,
      tabBarStyle: {
        height: bottomTabHeight,
        elevation: 5, 
        backgroundColor: Colors.blue,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        bottom: 0, 
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
      },
      tabBarButton: (props) => (
        <TouchableOpacity activeOpacity={0.7} {...props}>
          {props.children}
        </TouchableOpacity>
      ),
    }}
    initialRouteName="Home"
  >
  
      <Tab.Screen
        name="Home"
        component={SettingsStack}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => (
            <View style={[styles.tab, {}]}>
              <LinearImage
                isFocused={focused}
                image={
                  ImageConstant?.setting
                   
                }
              />
              <Typography
              lineHeight={16.5}
                size={11}
                color={focused ? Colors.white : '#FFFFFF66'}
                type={focused ? Font.Poppins_SemiBold : Font.Poppins_Regular}
                style={styles.text}
                numberOfLines={1}
                textAlign={'center'}>
                {'Settings'}
              </Typography>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="MySchedule"
        component={MyScheduleScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => (
            <View style={[styles.tab, {}]}>
              <LinearImage
                isFocused={focused}
                image={
                   ImageConstant?.appointment_tab
                  
                }
              />
              <Typography
                size={focused ? 12 : 10}
                color={focused ? Colors.white : '#FFFFFF66'}
                type={focused ? Font.Poppins_SemiBold : Font.Poppins_Regular}
                style={styles.text}
                numberOfLines={1}
                textAlign={'center'}>
                {'My Schedule'}
              </Typography>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={PaymentStack}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => (
            <View style={[styles.tab]}>
              <LinearImage
                isFocused={focused}
                image={
                  ImageConstant?.Payment
                   
                }
              />
              <Typography
                size={focused ? 12 : 10}
                color={focused ? Colors.white : '#FFFFFF66'}
                type={focused ? Font.Poppins_SemiBold : Font.Poppins_Regular}
                style={styles.text}
                numberOfLines={1}
                textAlign={'center'}>
                {'Payment'}
              </Typography>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={ComingSoon}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => (
            <View style={[styles.tab]}>
              <LinearImage
                isFocused={focused}
                image={
                
                     ImageConstant?.profileTab_icon
                }
              />
              <Typography
                size={focused ? 12 : 10}
                color={focused ? Colors.white : '#FFFFFF66'}
                type={focused ? Font.Poppins_SemiBold : Font.Poppins_Regular}
                style={styles.text}
                numberOfLines={1}
                textAlign={'center'}>
                {'Profile'}
              </Typography>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tab: {
    marginTop:10,
    paddingHorizontal: 25,
    borderColor: Colors?.blue_icon,
    borderTopColor: Colors.primary_blue,
    alignItems: 'center',
    justifyContent: 'center',
    width: widthPercentageToDP(20),
    height: 55,
    justifyContent: 'flex-end',
    
  },
  text: {
    width: widthPercentageToDP(20),
  },
});



