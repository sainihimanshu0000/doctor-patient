import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import HeaderForUser from '../../../Component/HeaderForUser';
import {ImageConstant} from '../../../Constants/ImageConstant';
import Typography from '../../../Component/UI/Typography';
import {Font} from '../../../Constants/Font';
import Button from '../../../Component/Button';
import {ScrollContainer} from '../../../Component/UI/ScrollContainer';
const {width, height} = Dimensions.get('window');

const ProfileScreen = ({navigation}) => {
  return (
    <View style={styles?.container}>
      <View
        style={{
          backgroundColor: 'rgba(2, 153, 145, 1)',
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
        }}>
        <HeaderForUser
          onPressLeftIcon={() => navigation.goBack()}
          source_arrow={ImageConstant?.backarrow}
          title={'Profile'}
          style_title={{color: '#fff'}}
          source_logo={ImageConstant?.share}
          style_backarrow={{tintColor: '#fff'}}
          back_img={{tintColor: '#fff'}}
        />
        <View
          style={{
            height: 100,
            position: 'relative',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: '#fff',
              height: 146,
              width: 146,
              borderRadius: 100,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 100,
            }}>
            <Image
              source={ImageConstant?.docProfile}
              style={{width: 120, height: 120}}
            />
          </View>
        </View>
      </View>
      <View style={{height: 80}} />
      <ScrollContainer>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Typography
            color="rgba(2, 153, 145, 1)"
            size={16}
            type={Font?.Poppins_Medium}>
            Ms. Nikitta Sharma
          </Typography>
          <Typography
            color="rgba(2, 153, 145, 1)"
            size={16}
            type={Font?.Poppins_Medium}>
            {' '}
            ( MBBS){' '}
          </Typography>
          <Typography size={16} type={Font?.Poppins_Medium}>
            Registration No- 123456789
          </Typography>

          <View style={styles.row}>
            {[...Array(5)].map((_, index) => (
              <Image
                key={index}
                source={ImageConstant?.star}
                style={styles.icon}
              />
            ))}
            <Typography style={styles.reviews} color="rgba(2, 153, 145, 1)">
              ({'80'})
            </Typography>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '50%',
              marginTop: 10,
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: 'rgba(255, 255, 255, 1)',
                padding: 20,
                borderRadius: 40,
                elevation: 9,
              }}>
              <Image
                source={ImageConstant?.phone}
                style={{width: 13, height: 14, resizeMode: 'contain'}}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: 'rgba(255, 255, 255, 1)',
                padding: 20,
                borderRadius: 40,
                elevation: 9,
              }}>
              <Image
                source={ImageConstant?.video}
                style={{width: 13, height: 14, resizeMode: 'contain'}}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: 'rgba(255, 255, 255, 1)',
                padding: 20,
                borderRadius: 40,
                elevation: 9,
              }}>
              <Image
                source={ImageConstant?.message}
                style={{width: 13, height: 14, resizeMode: 'contain'}}
              />
            </TouchableOpacity>
          </View>
          <View style={{marginTop:20,width:"80%"}}>
            <View style={{flexDirection:"row",alignItems:"center"}}>
              <Image source={ImageConstant?.profile} style={{width:16,height:16,resizeMode:"contain"}}/>
            <Typography
             style={{marginLeft:20}}
              color="rgba(0, 0, 0, 1)"
              size={16}
              fontWeight={600}
              lineHeight={24}
              type={Font?.Poppins_Medium}>
              General Physician
            </Typography>
            </View>
            <View style={{flexDirection:"row",alignItems:"center",marginTop:10}}>
            <Image source={ImageConstant?.yearof} style={{width:16,height:16,resizeMode:"contain"}}/>
            <Typography
              color="rgba(0, 0, 0, 1)"
              size={16}
              fontWeight={600}
              lineHeight={24}
              style={{marginLeft:20}}
              type={Font?.Poppins_Medium}>
              Years of experience 14 years
            </Typography>
            </View>
            <View style={{flexDirection:"row",alignItems:"center",marginTop:10}}>
            <Image source={ImageConstant?.location} style={{width:16,height:16,resizeMode:"contain",tintColor:"rgba(2, 153, 145, 1)"}}/>
            <Typography
              color="rgba(0, 0, 0, 1)"
              size={16}
              fontWeight={600}
              lineHeight={24}
              style={{marginLeft:20}}
              type={Font?.Poppins_Medium}>
              Jaipur, Delhi
            </Typography>
            </View>
            <View style={{flexDirection:"row",alignItems:"center",marginTop:10}}>
            <Image source={ImageConstant?.fee} style={{width:16,height:16,resizeMode:"contain"}}/>
            <Typography
              color="rgba(0, 0, 0, 1)"
              size={16}
              fontWeight={600}
              lineHeight={24}
              style={{marginLeft:20}}
              type={Font?.Poppins_Medium}>
              Fees- Rs 1500
            </Typography>
            </View>
          </View>
          <View style={{width: '80%', marginTop: 20}}>
            <Typography
              color="rgba(2, 153, 145, 1)"
              size={16}
              lineHeight={24}
              type={Font?.Poppins_Medium}>
              Bio
            </Typography>
            <View style={{flexDirection: 'row'}}>
              <Typography
                color="rgba(0, 0, 0, 1)"
                size={16}
                fontWeight={600}
                lineHeight={24}
                type={Font?.Poppins_Medium}>
                Age:
              </Typography>
              <Typography
                color="rgba(0, 0, 0, 1)"
                size={16}
                fontWeight={600}
                lineHeight={24}
                type={Font?.Poppins_Regular}>
                {' '}
                40 Years {'    '}
              </Typography>
              <Typography
                color="rgba(0, 0, 0, 1)"
                size={16}
                fontWeight={600}
                lineHeight={24}
                type={Font?.Poppins_Medium}>
                SEX:
              </Typography>
              <Typography
                color="rgba(0, 0, 0, 1)"
                size={16}
                fontWeight={600}
                lineHeight={24}
                type={Font?.Poppins_Regular}>
                {' '}
                Male
              </Typography>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Typography
                color="rgba(0, 0, 0, 1)"
                size={16}
                fontWeight={600}
                lineHeight={24}
                type={Font?.Poppins_Medium}>
                Language:
              </Typography>
              <Typography
                color="rgba(0, 0, 0, 1)"
                size={16}
                fontWeight={600}
                lineHeight={24}
                type={Font?.Poppins_Regular}>
                {' '}
                English, Hindi, Bengali
              </Typography>
            </View>
          </View>
          <View style={{width: '80%', marginTop: 20}}>
            <Typography
              color="rgba(2, 153, 145, 1)"
              size={16}
              lineHeight={24}
              type={Font?.Poppins_Medium}>
              About Me
            </Typography>
            <Typography
              color="rgba(0, 0, 0, 1)"
              size={16}
              fontWeight={400}
              lineHeight={24}
              type={Font?.Poppins_Regular}>
              Experienced healthcare worker. Dedicated to excellent homecare
              service & patient outcomes experienced healthcare worker.
              Dedicated to excellent homecare service & patient outcomes
              experienced healthcare worker. Dedicated to excellent homecare
              service & patient outcomes .
            </Typography>
          </View>
          <Button
            title={'Book your Appointment'}
            linerColor={['rgba(2, 153, 145, 1)', 'rgba(2, 153, 145, 1)']}
            main_style={{width: '75%'}}
          />
        </View>
      </ScrollContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#f8f8f8'},
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  icon: {
    width: width * 0.04,
    height: width * 0.04,
    marginRight: width * 0.01,
  },
});

export default ProfileScreen;
