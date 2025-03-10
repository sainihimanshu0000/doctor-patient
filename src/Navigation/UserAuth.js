import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import {
  TouchableOpacity,
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
// Import your screens
import Home from '../Screens/User/Home';
import Booking from '../Screens/User/Booking/Booking';
import Partner from '../Screens/User/Partner/Partner';
import Helpline from '../Screens/User/Helpline/Helpline';
import CustomTabBar from './CustomTabBar';
import ComingSoon from '../Screens/Partner/comingSoon';
import {ImageConstant} from '../Constants/ImageConstant';
import Typography from '../Component/UI/Typography';
import {Font} from '../Constants/Font';
import { useDispatch } from 'react-redux';
import { isAuth } from '../Redux/action';
import PartnerList from '../Screens/User/Partner/PartnerList';
import ProfileScreen from '../Screens/User/Partner/ProfileScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const commonOptions = {
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  headerShown: false,
};
const drawerItems = [
  {label: 'My Dashboard', icon: ImageConstant?.dashboard, screen: 'Home'},
  {
    label: 'My Appointments',
    icon: ImageConstant?.MyAppointments,
    screen: 'MyAppointments',
  },
  {
    label: 'Payment details',
    icon: ImageConstant?.Payments,
    screen: 'PaymentDetails',
  },
  {
    label: 'Search Partner',
    icon: ImageConstant?.searchNew,
    screen: 'SearchPartner',
  },
  {label: 'Offers', icon: ImageConstant?.offer, screen: 'Offers'},
  {
    label: 'My health record',
    icon: ImageConstant?.Myhealthrecord,
    screen: 'HealthRecord',
  },
  {label: 'Invite others', icon: ImageConstant?.invite, screen: 'InviteOthers'},
  {label: "FAQ's", icon: ImageConstant?.faqNew, screen: 'FAQs'},
  {label: 'Contact us', icon: ImageConstant?.contact, screen: 'ContactUs'},
  {
    label: 'Search services',
    icon: ImageConstant?.Searchservices,
    screen: 'SearchServices',
  },
];

// Bottom Tabs Navigator
const BottomTabs = () => (
  <Tab.Navigator
    screenOptions={{tabBarHideOnKeyboard: true, headerShown: false}}
    tabBar={props => <CustomTabBar {...props} />}>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Booking" component={ComingSoon} />
    <Tab.Screen name="Partner" component={Partner} />
    <Tab.Screen name="Helpline" component={ComingSoon} />
  </Tab.Navigator>
);

// Custom Drawer Content
const CustomDrawerContent = props => {

  const dispatch = useDispatch();


  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Logout cancelled'),
          style: 'cancel'
        },
        {
          text: 'OK',
          onPress: () => dispatch(isAuth(false))
        }
      ],
      { cancelable: false }
    );
  };

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.drawerContainer}>
      <View style={[styles.profileSection, {flexDirection: 'row'}]}>
        <Image source={ImageConstant?.docProfile} style={styles.profileImage} />
        <View style={{flexDirection: 'column', marginLeft: 20}}>
          <Typography
            size={20}
            type={Font?.Poppins_Medium}
            color="rgba(2, 153, 145, 1)">
            Hello
          </Typography>
          <Typography
            size={14}
            type={Font?.Poppins_Regular}
            color="rgba(0, 0, 0, 1)"
            lineHeight={21}>
            Mukesh Sharma
          </Typography>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.menuSection}>
        {drawerItems.map((item, index) => (
          <DrawerItem
            key={index}
            label={item.label}
            icon={() => (
              <Image
                source={item?.icon}
                style={{width: 20, height: 20, resizeMode: 'contain'}}
              />
            )}
            onPress={() => props.navigation.navigate(item.screen)}
          />
        ))}
      </ScrollView>

      {/* <ScrollView showsVerticalScrollIndicator={false} style={styles.menuSection}>
        <DrawerItem label="My Dashboard" onPress={() => props.navigation.navigate('Home')} />
        <DrawerItem label="My Appointments" onPress={() => {}} />
        <DrawerItem label="Payment details" onPress={() => {}} />
        <DrawerItem label="Search Partner" onPress={() => {}} />
        <DrawerItem label="Offers" onPress={() => {}} />
        <DrawerItem label="My health record" onPress={() => {}} />
        <DrawerItem label="Invite others" onPress={() => {}} />
        <DrawerItem label="FAQ's" onPress={() => {}} />
        <DrawerItem label="Contact us" onPress={() => {}} />
        <DrawerItem label="Search services" onPress={() => {}} />
      </ScrollView> */}

      <View style={styles.bottomSection}>
        <DrawerItem
          label="Settings"
          icon={() => (
            <Image
              source={ImageConstant?.MangeSetting}
              style={{width: 20, height: 20, resizeMode: 'contain'}}
            />
          )}
          onPress={() => {}}
        />
        <DrawerItem
          label="Logout"
          icon={() => (
            <Image
              source={ImageConstant?.LogoutNew}
              style={{width: 20, height: 20, resizeMode: 'contain'}}
            />
          )}
          onPress={handleLogout}
        />
      </View>
    </DrawerContentScrollView>
  );
};

// Drawer Navigator with Custom Drawer
const DrawerNavigator = () => (
  <Drawer.Navigator
    screenOptions={{headerShown: false}}
    drawerContent={props => <CustomDrawerContent {...props} />}>
    <Drawer.Screen name="Home" component={BottomTabs} />
    <Drawer.Screen name="PartnerList" component={PartnerList} />
  </Drawer.Navigator>
);

// Final Stack Navigator wrapping everything
const UserAuth = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen
      name="Main"
      component={DrawerNavigator}
      options={{...commonOptions}}
    />
     <Stack.Screen
      name="ProfileScreen"
      component={ProfileScreen}
      options={{...commonOptions}}
    />
    
  </Stack.Navigator>
);

export default UserAuth;

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    paddingVertical: 20,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  userGreeting: {
    fontSize: 14,
  },
  menuSection: {
    flex: 1,
    paddingHorizontal: 10,
  },
  bottomSection: {
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
});
