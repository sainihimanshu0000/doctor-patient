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
import {Colors} from '../../Constants/Colors';
import Input from '../../Component/Input';
import {ImageConstant} from '../../Constants/ImageConstant';
import Header from '../../Component/Header';
import PasswordHash from '../../Component/Modals/PasswordHash';
import Button from '../../Component/Button';
import {validators} from '../../Backend/Validator';
import {useSelector} from 'react-redux';
import DropdownComponent from '../../Component/DropdownComponent';
import Typography from '../../Component/UI/Typography';
import ImageModal from '../../Modals/ImageModal';
import ButtonIcon from '../../Component/ButtonIcon';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {isValidForm} from '../../Backend/Utility';
import MyComponent from '../../Component/UI/Blur';
import { Font } from '../../Constants/Font';

const Login = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);
  const [isConfirmPasswordSecure, setIsConfirmPasswordSecure] = useState(true);
  const [isAllTrue, setIsAllTrue] = useState(false);
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [image, setImage] = useState({});
  const [showImage, setShowImage] = useState(false);
  const userDetail = useSelector(store => store?.userDetails);

  console.log(image, 'image=====>');

  const [error, setError] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = () => {
    let err = {
      name: validators.checkRequire('Full Name', name),
      email: validators.checkEmail('Email', email),
      password: validators.checkPassword('Password', password),
      age: validators.checkRequire('Age', age),
      confirmPassword:validators.checkMatch("Password",password,"Confirm Password",confirmPassword)
      // gender: validators.checkRequire('Gender', gender),
    };

    setError(err);
    if (isValidForm(err)) {
      navigation.navigate('NewLogin');
    }
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView style={styles.container}>
          <MyComponent />
          <View style={{backgroundColor: '#029991', paddingHorizontal: 20,borderBottomRightRadius:30,borderBottomLeftRadius:30}}>
            <Header source_arrow={ImageConstant.arrow_left} />

            <TouchableOpacity
              onPress={() => {
                setShowImage(true);
              }}
              style={{alignItems: 'center', marginTop: 10}}>
              {image?.uri ? (
                <>
                  <Image
                    source={{uri: image?.uri}}
                    style={{
                      height: 100,
                      width: 100,
                      marginBottom: 20,
                      resizeMode: 'cover',
                      borderRadius: 10,
                    }}
                  />
                </>
              ) : (
                <Image
                  source={ImageConstant.ic_login}
                  style={{
                    height: 100,
                    width: 100,
                    marginBottom: 20,
                    resizeMode: 'cover',
                    borderRadius: 10,
                  }}
                />
              )}
            </TouchableOpacity>

            <Typography textAlign={"center"} size={20} type={Font?.Poppins_Medium} style={{marginBottom:20}} color='#fff'>Create your Account</Typography>
          </View>
          <View
            style={styles.formContainer}
            showsVerticalScrollIndicator={false}>
            {/* <View
                  style={{
                    flexDirection: 'row',
                    alignSelf: 'center',
                    position:"absolute",
                    // marginTop: 10,
                    opacity:1,
                    zIndex:1,
                    borderWidth:1,
                    borderRadius:20,
                    borderColor:Colors?.blue
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      setShowImage(true);
                    }}
                    style={{
                      alignSelf: 'center',
                      position: 'relative',
                      // marginTop: heightPercentageToDP(5),
                    }}>
                    <Image
                      source={ImageConstant.edit}
                      style={{
                        resizeMode: 'center',
                        width:30,
                        height:30,
                        tintColor:Colors?.blue
                        // marginTop: Platform.OS == 'android' ? -12 : -15,
                      }}
                    />
                  </TouchableOpacity>
                 
                </View> */}

            <Input
              showImage={true}
              source={ImageConstant.profile}
              placeholder="Full Name"
              value={name}
              onChange={setName}
              style_input={styles.inputText}
              showTitle={false}
              error={error.name}
            />

            <Input
              showImage={true}
              source={ImageConstant.email}
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

            {/* <DropdownComponent
          leftIconsShow={true} placeholder="Sex"
           leftIcons={ImageConstant.profile}
            marginHorizontal={0} 
            style_dropdown={{ width: "100%", marginHorizontal: 0 }} 
            error={error?.gender}
            value={gender}
            onChange={(v)=>{
              console.log(v,"===========>")
              setGender(v)
            }}
            data={[{ id: 1, label: "Male", value: "Male" }, { id: 2, label: "Female", value: "Female" }]} 
            /> */}

            <Input
              showImage={true}
              source={ImageConstant.profile}
              placeholder="Age"
              value={age}
              onChange={setAge}
              style_input={styles.inputText}
              showTitle={false}
              keyboardType="number-pad"
              textContentType="numaric"
              autoCapitalize="none"
              error={error.age}
            />
            <Input
              source={ImageConstant.lock}
              showTitle={false}
              placeholder="Password"
              value={password}
              showImage={true}
              onChange={setPassword}
              style_input={styles.inputText}
              secureTextEntry={isPasswordSecure}
              onPress={() => setIsPasswordSecure(!isPasswordSecure)}
              error={error.password}
              source_eye={
                isPasswordSecure ? ImageConstant.eyeslash : ImageConstant.eye
              }
              children={
                password !== '' &&
                isAllTrue && (
                  <PasswordHash
                    onAllValidated={v => {
                      if (!v) setIsAllTrue(false);
                    }}
                    password={password}
                  />
                )
              }
            />

            <Input
              source={ImageConstant.lock}
              showTitle={false}
              placeholder="Confirm Password"
              value={confirmPassword}
              showImage={true}
              onChange={setConfirmPassword}
              style_input={styles.inputText}
              secureTextEntry={isConfirmPasswordSecure}
              onPress={() =>
                setIsConfirmPasswordSecure(!isConfirmPasswordSecure)
              }
              source_eye={
                isConfirmPasswordSecure
                  ? ImageConstant.eyeslash
                  : ImageConstant.eye
              }
              error={error.confirmPassword}
            />

            {/* <View style={{height: 100}} /> */}
          </View>
          <Button
            style={{marginBottom: 30}}
            title="Sign up"
            onPress={handleSubmit}
          />
        </ScrollView>
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

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    // paddingHorizontal: 20,
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
});
