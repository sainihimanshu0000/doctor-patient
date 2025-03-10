import {StyleSheet, Text, View, ScrollView, Keyboard} from 'react-native';
import React, {useState} from 'react';
import Header from '../../Component/Header';
import ToothsComponent from '../../Component/ToothsComponent';
import Button from '../../Component/Button';
import Input from '../../Component/Input';
import {ImageConstant} from '../../Constants/ImageConstant';
import {Colors} from '../../Constants/Colors';
import {windowHeight, windowWidth} from '../../Constants/Dimensions';
import {VALIDATE, validators} from '../../Backend/Validator';
import {isValidForm} from '../../Backend/Utility';
import Typography from '../../Component/UI/Typography';
import OtpInput from '../../Component/UI/OtpInput';
import {POST, POST_FORMDATA} from '../../Backend/Backend';
import {userType} from '../../Constants/UserConstant';
import {FORGOT_PASSWORD} from '../../Backend/api_routes';
import SimpleModal from '../../Component/UI/SimpleModal';
import {ChangePasswordModal} from '../../Component/Modals/ChangePasswordModal';
import {EmailVerifyModal} from '../../Component/Modals/EmailVerifyModal';

const ForgotPassword = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState({});
  const [otpVisible, setOtpVisible] = useState(false);
  const [otp, setOtp] = useState();
  const [modalVisible, setModalVisible] = useState(false);

  const handleSubmit = () => {
    const emailError = validators.checkEmail('Email', email);
    setError({email: emailError});

    if (!emailError) {
      // navigation.navigate('Confirmpassword');
      setModalVisible(false);
      setOtpVisible(true)
      // const body = JSON.stringify({
      //   email: 'devil@yopmail.com',
      //   role: 'patient',
      // });
      // POST(
      //   FORGOT_PASSWORD,
      //   body,
      //   success => {
      //     console.log('success--------->>>>', success);
      //   },
      //   error => {
      //     console.log('error--------->>>>', error);
      //   },
      //   fail => {
      //     console.log('fail--------->>>>', fail);
      //   },
      // );
    }
  };

  return (
    <View style={{backgroundColor: Colors.white, flex: 1}}>
      <ScrollView style={{flex: 1}}>
        <View style={{marginBottom: 20}}>
          <Header source_arrow={ImageConstant.backarrow}/>
          <ToothsComponent
            title={'Forgot Password'}
            sub_title={'Enter your email below to receive password'}
            style={styles.toothsCom_style}
          />
        </View>
        <Input
          title={'Email'}
          color_verify={VALIDATE.EMAIL.test(email) ? Colors.green : Colors.grey}
          source={ImageConstant.sms}
          style_input={{color: Colors.black}}
          value={email}
          onChange={v => {
            setEmail(v);
            setError({...error, email: ''});
          }}
          onPres_text={() => {
            if (VALIDATE.EMAIL.test(email)) {
              setOtpVisible(true);
            }
          }}
          // text={'Verify'}
          onFocus={() => {
            setOtpVisible(false);
          }}
        />
        <View style={{alignItems: 'flex-end', width: '100%'}}>
          {error?.email && (
            <Typography style={{color: 'red', fontSize: 11, marginRight: 20}}>
              {error?.email}
            </Typography>
          )}
        </View>
        {otpVisible && (
          <OtpInput
            value={otp}
            setValue={setOtp}
            onChangeText={v => {
              setOtp(v);
              if (v.length > 5) {
                Keyboard.dismiss();
              }
            }}
          />
        )}
      </ScrollView>
      <View style={{}}>
        <Button title={'Submit'} onPress={handleSubmit} />
      </View>

      <EmailVerifyModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        childText={
          'If you have an account with Tooths, password reset instructions will be sent to your registered email address.'
        }
        text_style={{marginBottom: 10}}
        onPress={() => {
          setModalVisible(false);
          navigation.navigate('Confirmpassword');
        }}
      />
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({});
