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
import {howLongKnownOptions, referenceOptions} from '../../../Constants/Data';
import DropdownNew from '../../../Component/DropdownNew';

const ProfileStep2 = ({navigation}) => {
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
        title={'Upload your Documents'}
      />
      <ScrollView
        contentContainerStyle={{paddingHorizontal: 20, marginTop: 20}}
        showsVerticalScrollIndicator={false}>
        <Typography
          type={Font?.Poppins_Medium}
          size={23}
          fontWeight={600}
          lineHeight={34}
          color="#2F3B4A">
          Verification from Patient Planet
        </Typography>
        <Typography
          type={Font?.Poppins_Regular}
          size={13}
          fontWeight={400}
          lineHeight={20}
          color="#252D38">
          Usually Takes less than 7 working days
        </Typography>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <Typography
            type={Font?.Poppins_Medium}
            size={15}
            fontWeight={500}
            lineHeight={23}
            color="#252D38">
            Upload Self attested Scanned Documents
          </Typography>
          <Typography
            style={{marginTop: 20}}
            type={Font?.Poppins_Medium}
            size={16}
            fontWeight={500}
            lineHeight={23}
            color="#252D38">
            Qualification
          </Typography>
        </View>

        <DocumentUpload
          images={ImageConstant?.doc}
          text2="graduation Degree"
          text="Upload MBBS Documents"
          style={{marginTop: 20}}
        />
        <DocumentUpload
          images={ImageConstant?.doc}
          text2="Post Graduation"
          text="Upload MD Documents"
          style={{marginTop: 20}}
        />
        <DocumentUpload
          images={ImageConstant?.doc}
          text="Upload Diploma"
          style={{marginTop: 20}}
        />
        <DocumentUpload
          images={ImageConstant?.doc}
          text2="Superspeciality"
          text="Upload MCH Documents"
          style={{marginTop: 20}}
        />

        <Typography
          style={{marginTop: 30}}
          type={Font?.Poppins_Medium}
          size={16}
          textAlign={'center'}
          fontWeight={500}
          lineHeight={23}
          color="#252D38">
          Registration
        </Typography>
        <DocumentUpload
          images={ImageConstant?.doc}
          text="Upload Your registration/Licence copy"
          style={{marginTop: 10}}
        />

        <Typography
          style={{marginTop: 30}}
          type={Font?.Poppins_SemiBold}
          size={16}
          textAlign={'center'}
          fontWeight={500}
          lineHeight={23}
          color="#252D38">
          Govt Issued ID
        </Typography>
        <Typography
          style={{marginTop: 0}}
          type={Font?.Poppins_Medium}
          size={12}
          textAlign={'center'}
          fontWeight={500}
          lineHeight={23}
          color="#252D38">
          AADHAR, DRIVING License ( it should have both sides with the address
          clearly scanned )
        </Typography>
        <DocumentUpload
          images={ImageConstant?.doc}
          text2="Front side"
          text="Upload AADHAR, DRIVING License"
          style={{marginTop: 10}}
        />
        <DocumentUpload
          images={ImageConstant?.doc}
          text2="Back side"
          text="Upload AADHAR, DRIVING License"
          style={{marginTop: 10}}
        />

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Typography
            style={{marginTop: 30}}
            type={Font?.Poppins_SemiBold}
            size={16}
            fontWeight={500}
            lineHeight={23}
            color="#252D38">
            Reference 1
          </Typography>
          <View style={{marginTop: 30}}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                backgroundColor: '#CFD8DD',
                paddingVertical: 10,
                paddingHorizontal: 20,
                borderRadius: 4,
              }}>
              <Image
                source={ImageConstant?.person}
                style={{width: 24, height: 24}}
              />
              <Typography
                style={{left: 10}}
                size={15}
                lineHeight={22}
                color="#134F4A"
                type={Font?.Poppins_Medium}>
                Add from Contacts
              </Typography>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{marginTop: 10}}>
          <Input
            showTitle
            showImage={false}
            title={'First name of referee'}
            // source={ImageConstant.profile}
            style_title={{fontSize: 16}}
            placeholder="First name of referee"
            style_input={styles.inputText}
            error={error.name}
          />
          <Input
            showTitle
            showImage={false}
            title={'Last name of referee'}
            // source={ImageConstant.profile}
            style_title={{fontSize: 16}}
            placeholder="Last name of referee"
            style_input={styles.inputText}
            error={error.name}
          />
          <Input
            showTitle
            showImage={false}
            title={'Email address'}
            // source={ImageConstant.profile}
            style_title={{fontSize: 16}}
            placeholder="email address"
            style_input={styles.inputText}
            error={error.name}
          />

          <Input
            countryPicker
            title={'Contact number'}
            style_inputContainer={styles.inputText}
            placeholder="Contact number"
            showTitle
            error={error.phone}
            textAlign="center"
            keyboardType="phone-pad"
          />

          <DropdownNew
            title={'How do you know this person?'}
            style_title={{marginLeft: 0}}
            placeholder="Select"
            selectedTextStyleNew={{marginLeft: 20}}
            marginHorizontal={0}
            style_dropdown={{width: '100%', marginHorizontal: 0}}
            error={error?.language}
            data={referenceOptions}
          />
          <DropdownNew
            title={'How long have you know this person?'}
            style_title={{marginLeft: 0}}
            placeholder="Select"
            selectedTextStyleNew={{marginLeft: 20}}
            marginHorizontal={0}
            style_dropdown={{width: '100%', marginHorizontal: 0}}
            error={error?.language}
            data={howLongKnownOptions}
          />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Typography
            style={{marginTop: 30}}
            type={Font?.Poppins_SemiBold}
            size={16}
            fontWeight={500}
            lineHeight={23}
            color="#252D38">
            Reference 2
          </Typography>
          <View style={{marginTop: 30}}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                backgroundColor: '#CFD8DD',
                paddingVertical: 10,
                paddingHorizontal: 20,
                borderRadius: 4,
              }}>
              <Image
                source={ImageConstant?.person}
                style={{width: 24, height: 24}}
              />
              <Typography
                style={{left: 10}}
                size={15}
                lineHeight={22}
                color="#134F4A"
                type={Font?.Poppins_Medium}>
                Add from Contacts
              </Typography>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{marginTop: 10}}>
          <Input
            showTitle
            showImage={false}
            title={'First name of referee'}
            // source={ImageConstant.profile}
            style_title={{fontSize: 16}}
            placeholder="First name of referee"
            style_input={styles.inputText}
            error={error.name}
          />
          <Input
            showTitle
            showImage={false}
            title={'Last name of referee'}
            // source={ImageConstant.profile}
            style_title={{fontSize: 16}}
            placeholder="Last name of referee"
            style_input={styles.inputText}
            error={error.name}
          />
          <Input
            showTitle
            showImage={false}
            title={'Email address'}
            // source={ImageConstant.profile}
            style_title={{fontSize: 16}}
            placeholder="email address"
            style_input={styles.inputText}
            error={error.name}
          />

          <Input
            countryPicker
            title={'Contact number'}
            style_inputContainer={styles.inputText}
            placeholder="Contact number"
            showTitle
            error={error.phone}
            textAlign="center"
            keyboardType="phone-pad"
          />

          <DropdownNew
            title={'How do you know this person?'}
            style_title={{marginLeft: 0}}
            placeholder="Select"
            selectedTextStyleNew={{marginLeft: 20}}
            marginHorizontal={0}
            style_dropdown={{width: '100%', marginHorizontal: 0}}
            error={error?.language}
            data={referenceOptions}
          />
          <DropdownNew
            title={'How long have you know this person?'}
            style_title={{marginLeft: 0}}
            placeholder="Select"
            selectedTextStyleNew={{marginLeft: 20}}
            marginHorizontal={0}
            style_dropdown={{width: '100%', marginHorizontal: 0}}
            error={error?.language}
            data={howLongKnownOptions}
          />
        </View>

        <TouchableOpacity
          onPress={() => {
            setIsCheck(!isCheck);
          }}
          style={{flexDirection: 'row', marginTop: 10}}>
          <View style={{alignItems: 'center'}}>
            <Image
              source={
                isCheck ? ImageConstant?.check_icon : ImageConstant?.checkbox
              }
              style={{width: 20, height: 20}}
            />
          </View>
          <View
            style={{left: 10, alignItems: 'center', justifyContent: 'center'}}>
            <Typography
              size={12}
              lineHeight={17}
              fontWeight={300}
              color={Colors?.blue}
              type={Font?.Poppins_Regular}>
              I hereby confirm that I am solely responsible for the authenticity
              of the documents I have uploaded. I understand that any
              falsification or misrepresentation of information on my part will
              result in my permanent removal and blacklisting from this
              platform.
            </Typography>
          </View>
        </TouchableOpacity>

        <View style={{flexDirection: 'row', flex: 1, marginTop: 10}}>
          <Typography
            size={12}
            lineHeight={17}
            fontWeight={600}
            color={'#252D38'}
            type={Font?.Poppins_Medium}>
            Note:{' '}
          </Typography>
          <Typography
            size={9}
            top={15}
            lineHeight={14}
            fontWeight={300}
            color={'#252D3880'}
            type={Font?.Poppins_Regular}>
            If we cannot verify your details online or there is a mismatch in
            your credentials you may be asked to come & meet us at the office /
            virtual meeting may be arranged with our onboarding team.
          </Typography>
        </View>

        <Button
          title="Next"
          onPress={() => HandleSubmit()}
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

export default ProfileStep2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 20,
  },
});
