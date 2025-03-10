import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  ScrollView,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {validators} from '../../../Backend/Validator';
import {isValidForm} from '../../../Backend/Utility';
import MyComponent from '../../../Component/UI/Blur';
import Input from '../../../Component/Input';
import {ImageConstant} from '../../../Constants/ImageConstant';
import PasswordHash from '../../../Component/Modals/PasswordHash';
import ImageModal from '../../../Modals/ImageModal';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import DropdownComponent from '../../../Component/DropdownComponent';
import Header from '../../../Component/Header';
import {Font} from '../../../Constants/Font';
import {RegisterData, TitleData} from '../../../Constants/Data';
import DropdownNew from '../../../Component/DropdownNew';
import Button from '../../../Component/Button';
import Date_Picker from '../../../Component/Date_Picker';

const ProfileStep1 = ({navigation}) => {
  const [registerAs, setRegisterAs] = useState(null);
  const [gender, setGender] = useState(null);
  const [title, setTitle] = useState(null);
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState(null);
  const [pinCode, setPinCode] = useState('');
  const [experience, setExperience] = useState('');
  const [address, setAddress] = useState('');
  const [aboutMe, setAboutMe] = useState('');
  const [language, setLanguage] = useState(null);
  const [phone, setPhone] = useState('');
  const [image, setImage] = useState({});
  const [showImage, setShowImage] = useState(false);

  console.log(image, 'image=====>');

  const [error, setError] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });


  const HandleSubmit = ()=>{
    navigation.navigate("ProfileStep2")
  }

  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <MyComponent />
          <Header
            containerStyle={{top: -15}}
            style_title={{
              fontSize: 20,
              fontWight: 600,
              fontFamily: Font?.Poppins_Medium,
            }}
            source_arrow={ImageConstant.arrow_left}
            title={'Complete Profile'}
          />
          <ScrollView
            style={styles.formContainer}
            showsVerticalScrollIndicator={false}>
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <View
                style={{
                  width: 120,
                  height: 120,
                  borderWidth: 10,
                  borderRadius: 120,
                  borderColor: '#DFF1F5',
                  overflow: 'hidden',
                }}>
                <Image
                  source={ImageConstant?.docProfile}
                  style={{width: '100%', height: '100%'}}
                  resizeMode="cover"
                />
              </View>
              <View
                style={{
                  flex: 1,
                  width: 100,
                  marginTop: 60,
                  position: 'absolute',
                  alignContent: 'flex-end',
                  alignItems: 'flex-end',
                }}>
                <TouchableOpacity
                  onPress={() => {
                    setShowImage(true);
                  }}
                  style={{
                    height: 40,
                    width: 40,
                    backgroundColor: '#DFF1F5',
                    borderRadius: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                    left: 10,
                  }}>
                  <Image
                    source={ImageConstant?.camera}
                    style={{width: 25, height: 25}}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <DropdownNew
              placeholder="Register as"
              selectedTextStyleNew={{marginLeft: 20}}
              marginHorizontal={0}
              style_dropdown={{width: '100%', marginHorizontal: 0}}
              error={error?.gender}
              value={registerAs}
              onChange={v => {
                console.log(v, '===========>');
                setRegisterAs(v);
              }}
              data={RegisterData}
            />

            <DropdownComponent
              placeholder="Title"
              selectedTextStyleNew={{marginLeft: 20}}
              marginHorizontal={0}
              style_dropdown={{width: '100%', marginHorizontal: 0}}
              error={error?.gender}
              value={title}
              onChange={v => {
                console.log(v, '===========>');
                setTitle(v);
              }}
              data={TitleData}
            />

            <Input
              showImage={false}
              // source={ImageConstant.profile}
              placeholder="First Name"
              value={name}
              onChange={setName}
              style_input={styles.inputText}
              showTitle={false}
              error={error.name}
            />

            <Input
              showImage={false}
              // source={ImageConstant.profile}
              placeholder="Last Name"
              value={lastName}
              onChange={setLastName}
              style_input={styles.inputText}
              showTitle={false}
              error={error.name}
            />

            <Input
              showImage={false}
              // source={ImageConstant.email}
              placeholder="Email"
              value={email}
              onChange={setEmail}
              style_input={styles.inputText}
              showTitle={false}
              keyboardType="email-address"
              textContentType="emailAddress"
              autoCapitalize="none"
              error={error.email}
            />

            <DropdownComponent
              placeholder="Sex"
              selectedTextStyleNew={{marginLeft: 20}}
              marginHorizontal={0}
              style_dropdown={{width: '100%', marginHorizontal: 0}}
              error={error?.gender}
              value={gender}
              onChange={v => {
                console.log(v, '===========>');
                setGender(v);
              }}
              data={[
                {id: 1, label: 'Male', value: 'Male'},
                {id: 2, label: 'Female', value: 'Female'},
              ]}
            />

            <DropdownComponent
              placeholder="language"
              selectedTextStyleNew={{marginLeft: 20}}
              marginHorizontal={0}
              style_dropdown={{width: '100%', marginHorizontal: 0}}
              error={error?.language}
              value={language}
              onChange={v => {
                console.log(v, '===========>');
                setLanguage(v);
              }}
              data={[
                {id: 1, label: 'Hindi', value: 'Hindi'},
                {id: 2, label: 'English', value: 'English'},
              ]}
            />
            <Input
              countryPicker
              style_inputContainer={styles.inputText}
              placeholder="Enter Mobile Number"
              showTitle={false}
              value={phone}
              error={error.phone}
              textAlign="center"
              keyboardType="phone-pad"
              onChange={e => {
                setPhone(e);
              }}
            />

            <Date_Picker
              onChange={setDob}
              onConfirm={setDob}
              placeholder={'Date of birth'}
              title={false}
              ageRestrict={true}
              allowFutureDates={false}
              error={error?.date}
            />

            <Input
              style_inputContainer={styles.inputText}
              placeholder="Service area Pin No"
              showTitle={false}
              value={pinCode}
              error={error.pinCode}
              textAlign="center"
              keyboardType="phone-pad"
              onChange={e => {
                setPinCode(e);
              }}
            />

            <Input
              style_inputContainer={styles.inputText}
              placeholder="Years of Experience"
              showTitle={false}
              value={experience}
              error={error.experience}
              textAlign="center"
              keyboardType="phone-pad"
              onChange={e => {
                setExperience(e);
              }}
            />
            

            <Input
              multiline={true}
              style_inputContainer={[styles.inputText, {height: 100}]}
              placeholder="Your Address here like street "
              showTitle={false}
              value={address}
              error={error.address}
              style_input={{height: 100}}
              keyboardType="text"
              onChange={e => {
                setAddress(e);
              }}
            />

            <Input
              multiline={true}
              style_inputContainer={[styles.inputText, {height: 100}]}
              placeholder="About Me"
              showTitle={false}
              value={aboutMe}
              error={error?.aboutMe}
              style_input={{height: 100}}
              keyboardType="text"
              onChange={e => {
                setAboutMe(e);
              }}
            />

            {/* <View style={{height: 100}} /> */}
            <Button
              title="Let’s Start"
              onPress={() =>HandleSubmit()}
              accessible
              accessibilityRole="button"
              accessibilityLabel="Proceed to Login"
              style={styles.button}
            />
          </ScrollView>
        </View>
      </TouchableWithoutFeedback>
      <ImageModal
        showModal={showImage}
        selected={v => {
          console.log(v, 'v--------------->'), setImage(v[0]);
        }}
        close={() => {
          setShowImage(!showImage);
        }}
      />
    </>
  );
};

export default ProfileStep1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 20,
  },
  formContainer: {
    flex: 1,
    padding: 20,
  },
  inputText: {
    color: Colors.black,
  },
  errorText: {
    color: 'red',
    fontSize: 11,
    marginTop: 4,
    marginLeft: 8,
  },
  button: {
    marginHorizontal: 0,
    marginVertical: 40,
  },
  buttonTitle: {
    fontSize: 18,
  },
});
