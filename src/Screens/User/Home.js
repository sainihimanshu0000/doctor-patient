import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import React from 'react';
import HeaderForUser from '../../Component/HeaderForUser';
import {ImageConstant} from '../../Constants/ImageConstant';
import Typography from '../../Component/UI/Typography';
import Input from '../../Component/Input';
import {Font} from '../../Constants/Font';

const {width, height} = Dimensions.get('window');

const Home = ({navigation}) => {
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

  const data1 = [
    {
      name: 'Lab Test',
      img: ImageConstant?.lab,
    },
    {
      name: 'ECG',
      img: ImageConstant?.ecg,
    },
    {
      name: 'X-Ray',
      img: ImageConstant?.x_ray,
    },
    {
      name: 'Health Products',
      img: ImageConstant?.health,
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <HeaderForUser
        onPressLeftIcon={() => navigation.openDrawer()}
        source_arrow={ImageConstant?.drawer}
        title={'Patient Planet'}
        source_logo={ImageConstant?.notification}
      />
      <View style={styles.header}>
        <Image source={ImageConstant?.docProfile} style={styles.profileImage} />
        <View>
          <Typography style={styles.userName}>Mukesh Sharma</Typography>
          <Typography style={styles.userDetails}>
              <Typography type={Font.Poppins_Medium}>Age: </Typography>45 | <Typography type={Font.Poppins_Medium}>Sex:</Typography> Male
            </Typography>
        </View>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.innerContainer}>
          <Input
            firstStyle={{width:18,height:18}}
            style_inputContainer={styles.inputContainer}
            placeholder={'Search'}
            showImage={true}
            source={ImageConstant?.searchTab_icon}
          />

          <Typography style={styles.sectionTitle}>What services are you looking for?</Typography>
          <View style={styles.servicesContainer}>
            {data.map((service, index) => (
              <View key={index} style={styles.serviceWrapper}>
                <TouchableOpacity onPress={()=>{navigation.navigate("PartnerList")}} style={styles.serviceCard}>
                  <Image source={service.img} style={styles.serviceImage} />
                </TouchableOpacity>
                <Typography style={styles.serviceText}>{service.name}</Typography>
              </View>
            ))}
          </View>

          <View style={styles.categoriesHeader}>
            <Typography style={styles.sectionTitle}>Categories</Typography>
            <TouchableOpacity>
              <Typography style={styles.seeMore}>See more</Typography>
            </TouchableOpacity>
          </View>

          <View style={styles.categoriesContainer}>
            <TouchableOpacity style={styles.categoryCard}>
              <Image source={ImageConstant?.Membership} style={styles.categoryImageLarge} />
              <Typography type={Font?.Poppins_Medium} size={14} style={styles.categoryText}>Membership</Typography>
            </TouchableOpacity>
            <View style={styles.categoryColumn}>
              <TouchableOpacity style={styles.categoryCardSmall}>
                <Typography type={Font?.Poppins_Medium} size={14} style={styles.categoryTextSmall}>Physiotherapist</Typography>
                <Image source={ImageConstant?.Physiotherapist} style={styles.categoryImageSmall} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.categoryCardSmall}>
                <Typography type={Font?.Poppins_Medium} size={14} style={styles.categoryTextSmall}>Medical Equipment</Typography>
                <Image source={ImageConstant?.Equipment} style={styles.categoryImageSmall} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={[styles.servicesContainer, { marginTop: 10 }]}>
            {data1.map((service, index) => (
              <View key={index} style={styles.serviceWrapper}>
                <TouchableOpacity style={styles.serviceCard}>
                  <Image source={service.img} style={styles.serviceImage} />
                </TouchableOpacity>
                <Typography style={styles.serviceTextMultiLine} numberOfLines={2}>{service.name}</Typography>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.footerContainer}>
          <Image source={ImageConstant?.bus} style={styles.busImage} />
          <View style={styles.footerTextContainer}>
            <Typography type={Font?.Poppins_Bold} size={13} lineHeight={16}>Your health Caregiver is on the way to your place</Typography>
          </View>
          <TouchableOpacity style={styles.viewButton}>
            <Typography>View</Typography>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: height * 0.02,
    paddingHorizontal: width * 0.05,
    paddingTop: height * 0.02,
  },
  profileImage: {
    width: width * 0.15,
    height: width * 0.15,
    borderRadius: (width * 0.15) / 2,
    marginRight: width * 0.03,
  },
  userName: {
    fontSize: width * 0.045,
    fontWeight: '600',
    color: '#333',
  },
  userDetails: {
    fontSize: width * 0.035,
    color: '#666',
  },
  scrollView: {
    backgroundColor: 'rgba(2, 153, 145, 1)',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  innerContainer: {
    backgroundColor: 'rgba(2, 153, 145, 1)',
    flex: 1,
    padding: width * 0.05,
  },
  inputContainer: {
    paddingVertical: 0,
    height: height * 0.06,
  },
  sectionTitle: {
    fontSize: width * 0.04,
    fontWeight: '600',
    color: '#fff',
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
    fontWeight: '400',
    color: '#fff',
    fontSize: width * 0.03,
    fontFamily: Font?.Poppins_Regular,
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
  categoriesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  seeMore: {
    color: '#fff',
    fontSize: width * 0.035,
    textDecorationLine: 'underline',
  },
  categoriesContainer: {
    marginTop: height * 0.01,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoryCard: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: width * 0.04,
    borderRadius: 10,
    marginBottom: height * 0.015,
    width: '40%',
    height: height * 0.16,
  },
  categoryCardSmall: {
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: width * 0.04,
    borderRadius: 10,
    marginBottom: height * 0.015,
    width: '100%',
    height: height * 0.08,
    flexDirection: 'row',
  },
  categoryColumn: {
    width: '55%',
  },
  categoryImageLarge: {
    width: width * 0.18,
    height: height * 0.07,
    borderRadius: 7,
  },
  categoryImageSmall: {
    width: width * 0.11,
    height: width * 0.11,
    borderRadius: 7,
  },
  categoryText: {
    fontSize: width * 0.035,
    color: 'rgba(2, 153, 145, 1)',
    marginTop: height * 0.01,
  },
  categoryTextSmall: {
    fontSize: width * 0.035,
    color: 'rgba(2, 153, 145, 1)',
  },
  footerContainer: {
    backgroundColor: '#FFF',
    flexDirection: 'row',
    padding: width * 0.05,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  busImage: {
    width: width * 0.09,
    height: height * 0.04,
  },
  footerTextContainer: {
    width: '60%',
  },
  viewButton: {
    borderWidth: 1,
    borderRadius: 7,
    paddingVertical: height * 0.01,
    paddingHorizontal: width * 0.04,
    borderColor: 'rgba(2, 153, 145, 1)',
  },
});
