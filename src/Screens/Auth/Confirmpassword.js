import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Keyboard,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../../Component/Header';
import ToothsComponent from '../../Component/ToothsComponent';
import Input from '../../Component/Input';
import Button from '../../Component/Button';
import {ImageConstant} from '../../Constants/ImageConstant';
import {Colors} from '../../Constants/Colors';
import {windowHeight, windowWidth} from '../../Constants/Dimensions';
import {validators} from '../../Backend/Validator';
import Typography from '../../Component/UI/Typography';
import PasswordHash from '../../Component/Modals/PasswordHash';
import {useIsFocused} from '@react-navigation/native';
import {ChangePasswordModal} from '../../Component/Modals/ChangePasswordModal';

const Confirmpassword = ({navigation}) => {
  const isFocus = useIsFocused();
  const [isAllTrue, setIsAllTrue] = useState(false);
  const [confirmpassword, setConfirmpassword] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({});
  const [isSecure, setIsSecure] = useState(true);
  const [isSecureConfirm, setIsSecureConfirm] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const handleSubmit = () => {
    const passwordError = validators.checkPassword('Password', password);
    const confirmpasswordError = validators.checkMatch(
      'Password',
      confirmpassword,
      'Confirm Password',
      password,
    );
    setError({confirmpassword: confirmpasswordError, password: passwordError});
    if (!confirmpasswordError && !passwordError) {
      setModalVisible(true);
      Keyboard.dismiss()
      setTimeout(() => {
        setModalVisible(false);
        navigation.navigate('Login');
      }, 3000);
    }
  };
  useEffect(() => {
    setIsAllTrue(false);
  }, [isFocus]);

  return (
    <View style={{backgroundColor: Colors.white, flex: 1}}>
      <ScrollView style={{flex: 1}}>
        <View style={{flex: 1}}>
          <View style={{marginBottom: 20}}>
            <Header source_arrow={ImageConstant.backarrow}/>
            <ToothsComponent
              title={'Reset Password'}
              sub_title={'Enter your new password'}
              style={styles.toothsCom_style}
            />
          </View>
          <View>
            <Input
              source={ImageConstant.lock}
              title={'New Password'}
              value={password}
              showImage={true}
              onChange={v => {
                setPassword(v);
                setIsAllTrue(true); 
                setError({ ...error, password: '' });
              }}
              style_input={{color: Colors.black}}
              secureTextEntry={isSecure}
              onPress={() => setIsSecure(!isSecure)}
              source_eye={isSecure ? ImageConstant.eyeslash : ImageConstant.eye}
              children={
                password !== '' && isAllTrue && (
                  <PasswordHash
                    onAllValidated={v => {
                      if (!v) setIsAllTrue(false); 
                      console.log(isAllTrue, "====---====---===ISALLTRUE");
                    }}
                    password={password}
                  />
                )
              }
            />
            <View style={{alignItems: 'flex-end', width: '100%'}}>
              {error?.password && (
                <Typography
                  style={{color: 'red', fontSize: 11, marginRight: 20}}>
                  {error?.password}
                </Typography>
              )}
            </View>
            <Input
              source={ImageConstant.lock}
              title={'Confirm Password'}
              value={confirmpassword}
              showImage={true}
              onChange={v => {
                setConfirmpassword(v);
                setError({...error, confirmpassword: ''});
              }}
              style_input={{color: Colors.black}}
              secureTextEntry={isSecureConfirm}
              onPress={() => setIsSecureConfirm(!isSecureConfirm)}
              source_eye={
                isSecureConfirm ? ImageConstant.eyeslash : ImageConstant.eye
              }
            />
            <View style={{alignItems: 'flex-end', width: '100%'}}>
              {error?.confirmpassword && (
                <Typography
                  style={{color: 'red', fontSize: 11, marginRight: 20}}>
                  {error?.confirmpassword}
                </Typography>
              )}
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={{flex: 0.2, justifyContent: 'flex-end'}}>
        <Button title={'Save'} onPress={handleSubmit} />
      </View>

      <ChangePasswordModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        parentText={'Your password has been successfully updated.'}
        text_style={{marginBottom: 10}}
      />
    </View>
  );
};

export default Confirmpassword;

const styles = StyleSheet.create({
  toothsCom_style: {},
});
