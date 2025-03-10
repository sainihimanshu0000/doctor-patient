import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
  FlatList,
} from 'react-native';
import React from 'react';
import HeaderForUser from '../../../Component/HeaderForUser';
import {ImageConstant} from '../../../Constants/ImageConstant';
import MyComponent from '../../../Component/UI/Blur';
import Input from '../../../Component/Input';
import {windowWidth} from '../../../Constants/Dimensions';
import Button from '../../../Component/Button';
import Typography from '../../../Component/UI/Typography';
import {Colors} from '../../../Constants/Colors';
import {Font} from '../../../Constants/Font';
import DoctorCard from '../../../Component/UI/DoctorCard';
import {ScrollContainer} from '../../../Component/UI/ScrollContainer';
const {width, height} = Dimensions.get('window');

const Partner = ({navigation}) => {
  const data = [
    {
      name: 'Doctor',
      img: ImageConstant?.doctor_icon,
    },
    {
      name: 'Nurse',
      img: ImageConstant?.dentist_icon,
    },
    {
      name: 'Attendant',
      img: ImageConstant?.attendant_icon,
    },
    {
      name: 'Dentist',
      img: ImageConstant?.nurse_icon,
    },
  ];
  const doctors = [
    {
      id: '1',
      name: 'Dr. Danaesh Karthik',
      qualification: 'MBBS, MS, MCH',
      reviews: 37,
      fees: 1500,
      image: ImageConstant?.doctor_icon, // Replace with actual image URL
      isFavorite: true,
    },
    {
      id: '2',
      name: 'Dr. Sarah Johnson',
      qualification: 'MD, Cardiologist',
      reviews: 45,
      fees: 2000,
      image: ImageConstant?.doctor_icon,
      isFavorite: false,
    },
    {
      id: '1',
      name: 'Dr. Danaesh Karthik',
      qualification: 'MBBS, MS, MCH',
      reviews: 37,
      fees: 1500,
      image: ImageConstant?.doctor_icon, // Replace with actual image URL
      isFavorite: true,
    },
    {
      id: '2',
      name: 'Dr. Sarah Johnson',
      qualification: 'MD, Cardiologist',
      reviews: 45,
      fees: 2000,
      image: ImageConstant?.doctor_icon,
      isFavorite: false,
    },
    {
      id: '1',
      name: 'Dr. Danaesh Karthik',
      qualification: 'MBBS, MS, MCH',
      reviews: 37,
      fees: 1500,
      image: ImageConstant?.doctor_icon, // Replace with actual image URL
      isFavorite: true,
    },
    {
      id: '2',
      name: 'Dr. Sarah Johnson',
      qualification: 'MD, Cardiologist',
      reviews: 45,
      fees: 2000,
      image: ImageConstant?.doctor_icon,
      isFavorite: false,
    },
  ];
  return (
    <View style={styles?.container}>
      <MyComponent />
      <HeaderForUser
        onPressLeftIcon={() => navigation.openDrawer()}
        source_arrow={ImageConstant?.drawer}
        title={'Patient Planet'}
        source_logo={ImageConstant?.notification}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 20,
        }}>
        <View style={{width: '80%'}}>
          <Input
            placeholder={'Search'}
            showImage={false}
            style_input={{width: '100%', height: 50}}
            style_inputContainer={{height: 50, width: '100%'}}
            source_eye={ImageConstant?.searchTab_icon}
            icon_style={{
              marginRight: 10,
              width: 20,
              height: 20,
              resizeMode: 'contain',
            }}
          />
        </View>
        <View style={{width: '15%'}}>
          <TouchableOpacity
            style={{
              width: '100%',
              backgroundColor: Colors?.blue,
              height: 50,
              borderRadius: 8,
              marginTop: 20,
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={ImageConstant?.heart}
              style={{width: 20, height: 20, tintColor: '#fff'}}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollContainer>
        <View
          style={{
            backgroundColor: '#fff',
            marginTop: 30,
            padding: 10,
            borderWidth: 0.5,
            borderRadius: 7,
            borderColor: 'gray',
            justifyContent: 'center',
          }}>
          <Typography style={styles.sectionTitle} textAlign={'center'}>
            What services are you looking for?
          </Typography>
          <View style={styles.servicesContainer}>
            {data.map((service, index) => (
              <View key={index} style={styles.serviceWrapper}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('PartnerList');
                  }}
                  style={styles.serviceCard}>
                  <Image source={service.img} style={styles.serviceImage} />
                </TouchableOpacity>
                <Typography style={styles.serviceText}>
                  {service.name}
                </Typography>
              </View>
            ))}
          </View>
          <FlatList
            data={doctors}
            keyExtractor={item => item.id}
            renderItem={({item}) => <DoctorCard navigation={navigation} doctor={item} />}
          />
        </View>
      </ScrollContainer>
    </View>
  );
};

export default Partner;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1,
    paddingHorizontal: 2,
  },
  sectionTitle: {
    fontSize: width * 0.04,
    fontWeight: '600',
    color: '#029991',
    marginVertical: height * 0.02,
  },
  servicesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  serviceWrapper: {
    flexDirection: 'column',
    width: '22%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  serviceCard: {
    backgroundColor: '#fff',
    padding: width * 0.04,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: height * 0.015,
    elevation: 5,
  },
  serviceImage: {
    width: width * 0.09,
    height: width * 0.09,
  },
  serviceText: {
    top: -10,
    textAlign: 'center',
    fontWeight: '600',
    color: '#029991',
    fontSize: width * 0.03,
    fontFamily: Font?.Poppins_Medium,
  },
  serviceTextMultiLine: {
    top: -10,
    height: height * 0.05,
    textAlign: 'center',
    fontWeight: '400',
    color: '#fff',
    fontSize: width * 0.03,
    fontFamily: Font?.Poppins_Regular,
  },
});
