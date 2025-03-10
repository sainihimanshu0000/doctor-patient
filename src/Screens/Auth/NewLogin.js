import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard, Alert, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Colors } from '../../Constants/Colors';
import Input from '../../Component/Input';
import { ImageConstant } from '../../Constants/ImageConstant';
import Header from '../../Component/Header';
import PasswordHash from '../../Component/Modals/PasswordHash';
import Button from '../../Component/Button';
import { validators } from '../../Backend/Validator';
import { useDispatch, useSelector } from 'react-redux';
import DropdownComponent from '../../Component/DropdownComponent';
import Typography from '../../Component/UI/Typography';
import ImageModal from '../../Modals/ImageModal';
import MyComponent from '../../Component/UI/Blur';
import { Font } from '../../Constants/Font';
import { isValidForm } from '../../Backend/Utility';
import { isAuth } from '../../Redux/action';

const NewLogin = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);
  const [isConfirmPasswordSecure, setIsConfirmPasswordSecure] = useState(true);
  const [isAllTrue, setIsAllTrue] = useState(false);
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [isCheck, setIsCheck] = useState(false)
  const userDetail = useSelector(store => store?.userDetails);

  const dispatch = useDispatch();


  const [error, setError] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = () => {
    let err = {
      name: validators.checkRequire('Full Name', name),
      email: validators.checkRequire('Email & Phone', email),
      password: validators.checkPassword('Password', password),
    };

    setError(err);
      if(!isValidForm(err)){
        dispatch(isAuth(true));
        setTimeout(()=>{
          navigation?.navigate("Home");
        },1000)
      }

  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <MyComponent />
        <Header
          source_arrow={ImageConstant.arrow_left} />
        <View style={styles.formContainer}>
          <View style={{ flexDirection: "row", justifyContent: "center", marginVertical: 20, padding: 10 }}>

            <Typography size={24} lineHeight={30} fontWeight={600} color={Colors?.blue} type={Font?.Poppins_Medium}>Login to your account</Typography>
          </View>
          <View style={{ borderWidth: 1, borderRadius: 7, backgroundColor: "#FFFFFF80", paddingHorizontal: 20, paddingVertical: 20, borderColor: "#05050740" }}>
            <Input
              showImage={true}
              source={ImageConstant.email}
              placeholder="Email or phone number"
              value={email}
              onChange={setEmail}
              style_input={styles.inputText}
              showTitle={false}
              keyboardType="email-address"
              textContentType="emailAddress"
              autoCapitalize="none"
              error={error.email}
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
              source_eye={isPasswordSecure ? ImageConstant.eyeslash : ImageConstant.eye}
              children={
                password !== '' &&
                isAllTrue && (
                  <PasswordHash
                    onAllValidated={(v) => {
                      if (!v) setIsAllTrue(false);
                    }}
                    password={password}
                  />
                )
              }
            />

          </View>
          <TouchableOpacity onPress={() => {setIsCheck(!isCheck)}} style={{ flexDirection: "row", marginTop: 10 }}>
            <View style={{ alignItems: "center" }}>
              <Image source={isCheck ? ImageConstant?.check_icon :ImageConstant?.checkbox} style={{ width: 20, height: 20 }} />
            </View>
            <View style={{ left: 30, alignItems: "center", justifyContent: "center" }}>
              <Typography size={12} lineHeight={15} fontWeight={300} color={Colors?.blue} type={Font?.Poppins_Regular}>Remember password</Typography>
            </View>
          </TouchableOpacity>

          <Button style={{ marginTop: 50 }} title="Login" onPress={handleSubmit} />
          {/* onPress={()=>{navigation.navigate("ForgotPassword")}}  */}
          <TouchableOpacity style={{ flexDirection: "row", justifyContent: "center", padding: 10 }}>
            <Typography size={12} lineHeight={18} fontWeight={500} color={Colors?.blue} type={Font?.Poppins_Medium}>Forgot password</Typography>
          </TouchableOpacity>

          <View style={{ flexDirection: "row", justifyContent: "center", padding: 10,marginTop:20 }}>
            <Typography size={14} lineHeight={21} fontWeight={700} color={Colors?.black} type={Font?.Poppins_Regular}>Don’t have an account?</Typography>
            <Typography onPress={()=>{navigation?.navigate("SignUp")}} size={16} lineHeight={21} fontWeight={700} color={Colors?.blue} type={Font?.Poppins_SemiBold}> Sign up</Typography>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default NewLogin;

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
});
