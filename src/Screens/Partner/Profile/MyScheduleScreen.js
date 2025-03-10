import React, { useState } from 'react';
import { View, FlatList, Image, TouchableOpacity, Alert, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../../../Component/Header';
import { Font } from '../../../Constants/Font';
import { ImageConstant } from '../../../Constants/ImageConstant';
import Typography from '../../../Component/UI/Typography';
import MyComponent from '../../../Component/UI/Blur';
import { ScrollContainer } from '../../../Component/UI/ScrollContainer';

const initialSchedules = [
 
        {
          id: '1',
          name: 'Mukesh Sharma',
          role: 'Care Recipient',
          age: 45,
          gender: 'Male',
          date: '8 Jul 2023',
          time: '5:00 PM',
          status: 'Active',
          image: 'https://randomuser.me/api/portraits/men/1.jpg',
        },
        {
          id: '2',
          name: 'Mukesh Sharma',
          role: 'Care Recipient',
          age: 45,
          gender: 'Male',
          date: '8 Jul 2023',
          time: '5:00 PM',
          status: 'Pending',
          image: 'https://randomuser.me/api/portraits/men/1.jpg',
        },
        {
          id: '3',
          name: 'Suresh Verma',
          role: 'Caregiver',
          age: 38,
          gender: 'Male',
          date: '10 Jul 2023',
          time: '3:30 PM',
          status: 'Completed',
          image: 'https://randomuser.me/api/portraits/men/2.jpg',
        },
        {
          id: '4',
          name: 'Anita Singh',
          role: 'Care Recipient',
          age: 50,
          gender: 'Female',
          date: '12 Jul 2023',
          time: '11:00 AM',
          status: 'Active',
          image: 'https://randomuser.me/api/portraits/women/1.jpg',
        },
        {
          id: '5',
          name: 'Rajesh Kumar',
          role: 'Caregiver',
          age: 42,
          gender: 'Male',
          date: '15 Jul 2023',
          time: '2:00 PM',
          status: 'Pending',
          image: 'https://randomuser.me/api/portraits/men/3.jpg',
        },
        {
          id: '6',
          name: 'Neha Gupta',
          role: 'Care Recipient',
          age: 37,
          gender: 'Female',
          date: '18 Jul 2023',
          time: '4:30 PM',
          status: 'Completed',
          image: 'https://randomuser.me/api/portraits/women/2.jpg',
        },
        {
          id: '7',
          name: 'Amit Sharma',
          role: 'Caregiver',
          age: 40,
          gender: 'Male',
          date: '20 Jul 2023',
          time: '6:00 PM',
          status: 'Active',
          image: 'https://randomuser.me/api/portraits/men/4.jpg',
        },
      
      
];

const MyScheduleScreen = () => {
  const [selectedTab, setSelectedTab] = useState('Today');
  const [schedules, setSchedules] = useState(initialSchedules);
  const navigation = useNavigation();
  const tabs = ['Today', 'Upcoming', 'Completed', 'Cancelled'];

  const updateStatus = (id, newStatus) => {
    setSchedules((prevSchedules) =>
      prevSchedules.map((item) =>
        item.id === id ? { ...item, status: newStatus } : item
      )
    );
    Alert.alert('Status Updated', `Schedule marked as ${newStatus}`);
  };

  const handleChatPress = (item) => {
    navigation.navigate('ChatScreen', { user: item });
  };

  const ScheduleCard = ({ item }) => (
    <View style={styles.cardContainer}>
      <View style={styles.cardHeader}>
        <Image source={{ uri: item.image }} style={styles.profileImage} />
        <View>
          <Typography type={Font.Poppins_Bold} size={15.5} lineHeight={23}>{item.name}</Typography>
          <Typography type={Font.Poppins_light} size={14.24} lineHeight={21}>{item.role}</Typography>
          <Typography lineHeight={16.5} size={11} type={Font.Poppins_Bold}>
            Age: <Typography type={Font.Poppins_light} size={11} lineHeight={16.5}>{item.age}</Typography> Gender: <Typography type={Font.Poppins_light} size={11} lineHeight={16.5}>{item.gender}</Typography>
          </Typography>
        </View>
      </View>

      <View style={styles.cardFooter}>
        <View style={{flexDirection:'row'}}>

        <Image source={ImageConstant.calendar} style={{width:17,height:17,resizeMode:"contain"}}/>
        <Typography size={11} lineHeight={16.6}> {item.date}</Typography>
        </View>
        <View style={{flexDirection:'row'}}>

        <Image source={ImageConstant.clock} style={{width:17,height:17,resizeMode:"contain"}}/>
        <Typography size={11} lineHeight={16.6}> {item.time}</Typography>
        </View>
        <View style={{flexDirection:'row'}}>

        <Image source={ImageConstant.status} style={{width:7,height:7,resizeMode:"contain",justifyContent:"center",alignSelf:"center"}}/>
        <Typography size={11} lineHeight={16.6}> {item.status}</Typography>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => updateStatus(item.id, 'Active')} style={[styles.statusButton, item.status === 'Active' && styles.activeButton]}>
          <Typography style={{ color: item.status === 'Active' ? '#fff' : 'rgba(147, 147, 147, 1)' }} type={Font.Poppins_Bold} size={11} lineHeight={17.3}>Active</Typography>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => updateStatus(item.id, 'Pending')} style={[styles.statusButton, item.status === 'Pending' && styles.pendingButton]}>
          <Typography style={{ color: item.status === 'Pending' ? '#fff' : 'rgba(147, 147, 147, 1)' }} type={Font.Poppins_Bold} size={11} lineHeight={17.3}>Pending</Typography>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}} style={styles.chatButton}>
          <Typography style={{ color: 'rgba(147, 147, 147, 1)' }} type={Font.Poppins_Bold} size={11} lineHeight={17.3}>Chat</Typography>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <MyComponent/>
      <Header title="My Schedule" containerStyle={styles.headerContainer} style_title={styles.headerTitle} source_arrow={ImageConstant.arrow_left} />

      <ScrollView horizontal contentContainerStyle={styles.tabsContainer}>
        {tabs.map((tab) => (
          <TouchableOpacity key={tab} onPress={() => setSelectedTab(tab)} style={[styles.tab, selectedTab === tab && styles.activeTab,{marginLeft:10}]}>
            <Typography style={{ color: selectedTab === tab ? '#fff' : '#333' }} size={11} lineHeight={17.7} type={Font.Poppins_Bold}>{tab}</Typography>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <FlatList data={schedules} keyExtractor={(item) => item.id} renderItem={({ item }) => <ScheduleCard item={item} />} />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
      padding: 15,
      marginBottom:50

    },
    headerContainer: {
      top: -15,
      marginLeft: 20,
    },
    headerTitle: {
      fontSize: 23,
      fontWeight: '600',
      fontFamily: Font?.Poppins_Medium,
    },
    tabsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20,
      height:35
    },
    tab: {
      paddingVertical: 8,
      paddingHorizontal: 20,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#ccc',
    },
    activeTab: {
      borderColor: '#009688',
      backgroundColor: '#009688',
    },
    cardContainer: {
      backgroundColor: '#fff',
      paddingHorizontal: 25,
      borderRadius: 10,
      marginVertical: 10,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 5,
      paddingVertical: 15,
      borderColor: '#05050775',
      borderWidth: 1,
    //   marginBottom:70
    },
    cardHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom:20
    },
    profileImage: {
      width: 70,
      height: 70,
      borderRadius: 5,
      marginRight: 10,
    },
    cardFooter: {
      marginTop: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 10,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 10,
    },
    statusButton: {
      paddingVertical: 6,
      borderRadius: 5,
      paddingHorizontal: 25,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth:1,
      borderColor:"rgba(2, 153, 145, 1)",
    },
    activeButton: {
      backgroundColor: '#009688',
      borderWidth: 0,
      borderWidth:1,
      borderColor:"rgba(2, 153, 145, 1)",
    },
    pendingButton: {
      backgroundColor: '#rgba(2, 153, 145, 1)',
      borderWidth:1,
      borderColor:"rgba(2, 153, 145, 1)",
    },
    chatButton: {
      // backgroundColor: '#3498db',
      paddingVertical: 6,
      borderRadius: 5,
      paddingHorizontal: 25,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth:1,
      borderColor:"rgba(2, 153, 145, 1)",
    },
  });
  
export default MyScheduleScreen;
