import { Alert, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import ToothsComponent from '../../Component/ToothsComponent';
import Header from '../../Component/Header';
import { Colors } from '../../Constants/Colors';
import { ImageConstant } from '../../Constants/ImageConstant';
import Typography from '../../Component/UI/Typography';
import { Font } from '../../Constants/Font';
import Input from '../../Component/Input';
import Button from '../../Component/Button';
import MyComponent from '../../Component/UI/Blur';
import { validators } from '../../Backend/Validator';
import { useSelector } from 'react-redux';
import { isValidForm } from '../../Backend/Utility';

const SignUp = ({ navigation }) => {
  // State for phone number and referral code
  const [phoneNumber, setPhoneNumber] = useState('');
  const [referralCode, setReferralCode] = useState('');
  const userDetail = useSelector(store => store?.userDetails);

  const [error, setError] = useState({
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = () => {
    let err = {
      phone: validators.checkRequire('Phone Number', phoneNumber),

    };

    setError(err);
    if (isValidForm(err)) {
      navigation.navigate("Otp")
    }

  };
  return (
    <View style={styles.container}>
      <MyComponent />
      <Header source_arrow={ImageConstant.arrow_left} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          source={ImageConstant.SignUp}
          style={styles.image}
        />
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Typography
            type={Font.Poppins_Medium}
            lineHeight={22}
            size={15}
            textAlign="center"
            style={styles.welcomeText}
          >
            Welcome to a seamless Home care experience
          </Typography>
        </View>
        <Typography
          type={Font.Poppins_Bold}
          size={18}
          lineHeight={24}
          textAlign="center"
          color={Colors.text}
          style={styles.titleText}
        >
          {
            userDetail?.type == 1 ? "Find your next homecare opportunity in 1 minute. Connect with patients instantly!" :"Book a Home care appointment in 1 minute"
          }
        </Typography>
        <Typography
          color={Colors.blue}
          size={22}
          lineHeight={33}
          textAlign="center"
          type={Font.Poppins_Bold}
          style={styles.signInText}
        >
          Sign Up
        </Typography>
        <Input
          countryPicker
          style_inputContainer={styles.inputContainer}
          placeholder="Enter Mobile Number"
          showTitle={false}
          value={phoneNumber}
          onChange={(text) => setPhoneNumber(text)}
          error={error.phone}
          textAlign='center'
          keyboardType='phone-pad'
        />
        <Button
          title="Continue"
          onPress={() => handleSubmit()}
          style={styles.button}
          title_style={styles.buttonTitle}
        />
        {
          userDetail?.type == 1 && (
            <>
              {/* <Typography
                size={13}
                color={Colors.text}
                lineHeight={19.5}
                textAlign="center"
                style={styles.inputLabel}
              >
                Referral Code (optional)
              </Typography> */}
              <Input
                style_inputContainer={styles.inputContainer}
                placeholder="Enter Invite Code Here"
                showTitle={false}
                value={referralCode}
                onChangeText={(text) => setReferralCode(text)} // update state on input change

              />
            </>
          )
        }

        <Typography
          type={Font.Poppins_Medium}
          size={10}
          lineHeight={15}
          textAlign="center"
          style={styles.footerText}
        >
          Already Have An Account{' '}
          <Typography
            onPress={()=>{navigation?.navigate("NewLogin")}}
            type={Font.Poppins_Medium}
            size={10}
            lineHeight={15}
            color={Colors.blue}
          >
            Log In
          </Typography>{' '}
          Here
        </Typography>
      </ScrollView>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1,
    paddingHorizontal: 20,
  },
  image: {
    width: 375,
    height: 206,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  welcomeText: {
    width: '80%',
    marginTop: 14,
  },
  titleText: {
    marginTop: 27,
  },
  signInText: {
    marginTop: 26,
  },
  inputLabel: {
    marginTop: 23,
  },
  inputContainer: {
    marginHorizontal: 40,
  },
  button: {
    marginHorizontal: 20,
  },
  buttonTitle: {
    fontSize: 18,
  },
  footerText: {
    marginBottom: 37,
    marginTop: 20,
  },
});
