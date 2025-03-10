import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import MyComponent from '../../../Component/UI/Blur';
import {Font} from '../../../Constants/Font';
import {ImageConstant} from '../../../Constants/ImageConstant';
import {Colors} from '../../../Constants/Colors';
import Header from '../../../Component/Header';
import Typography from '../../../Component/UI/Typography';
import DocumentUpload from '../../../Component/DocumentUpload';
import Button from '../../../Component/Button';
import Input from '../../../Component/Input';
import DropdownComponent from '../../../Component/DropdownComponent';
import {
  accountTypeOptions,
  howLongKnownOptions,
  referenceOptions,
} from '../../../Constants/Data';
import DropdownNew from '../../../Component/DropdownNew';

const ProfileStep3 = ({navigation}) => {
  const [error, seterror] = useState({});
  const [isCheck, setIsCheck] = useState(false);

  const HandleSubmit = () => {
    navigation.navigate('ProfileStep3');
  };

  return (
    <View style={styles.container}>
      <MyComponent />
      <Header
        containerStyle={{top: -15}}
        style_title={{
          fontSize: 23,
          fontWight: 600,
          fontFamily: Font?.Poppins_Medium,
        }}
        source_arrow={ImageConstant.arrow_left}
        title={'Financial Information'}
      />
      <ScrollView
        contentContainerStyle={{paddingHorizontal: 20, marginTop: 20}}
        showsVerticalScrollIndicator={false}>
        <DropdownNew
          title={'Set up your fees'}
          style_title={{marginLeft: 0, fontSize: 16}}
          selectedTextStyleNew={{marginLeft: 20}}
          marginHorizontal={0}
          style_dropdown={{width: '100%', marginHorizontal: 0}}
          error={error?.language}
          data={[]}
        />

        <Input
          showTitle
          showImage={false}
          title={'Bank Name'}
          // source={ImageConstant.profile}
          style_title={{fontSize: 16}}
          style_input={styles.inputText}
          error={error.name}
        />

        <Input
          showTitle
          showImage={false}
          title={'Account Number'}
          placeholder={'Type Here'}
          // source={ImageConstant.profile}
          style_title={{fontSize: 16}}
          keyboardType="number-pad"
          style_input={styles.inputText}
          error={error.name}
        />
        <DropdownNew
          title={'Account type'}
          style_title={{marginLeft: 0, fontSize: 16}}
          selectedTextStyleNew={{marginLeft: 20}}
          marginHorizontal={0}
          style_dropdown={{width: '100%', marginHorizontal: 0}}
          error={error?.language}
          data={accountTypeOptions}
        />

        <Input
          showTitle
          showImage={false}
          title={'IFSC Code'}
          placeholder={'Type Here'}
          // source={ImageConstant.profile}
          style_title={{fontSize: 16}}
          style_input={styles.inputText}
          error={error.name}
        />
        <Input
          showTitle
          showImage={false}
          title={'Bank Branch'}
          placeholder={'Type Here'}
          // source={ImageConstant.profile}
          style_title={{fontSize: 16}}
          keyboardType="number-pad"
          style_input={styles.inputText}
          error={error.name}
        />
        <Button
          title="Next"
          onPress={() => {navigation.navigate("Congratulations")}}
          accessible
          accessibilityRole="button"
          accessibilityLabel="Proceed to Login"
          style={{marginTop: 50}}
        />
        <View style={{height: 100}} />
      </ScrollView>
    </View>
  );
};

export default ProfileStep3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 20,
  },
});
