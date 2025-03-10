import { StyleSheet, View, Image, TouchableOpacity, PixelRatio } from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from '../../Component/Header';
import ToothsComponent from '../../Component/ToothsComponent';
import Button from '../../Component/Button';
import { ImageConstant } from '../../Constants/ImageConstant';
import { Colors } from '../../Constants/Colors';
import { Font } from '../../Constants/Font';
import Typography from '../../Component/UI/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { USER } from '../../Redux/constant';
import { userDetails } from '../../Redux/action';

const ChooseUser = ({ navigation }) => {


  const [select, setSelect] = useState(2);
  const dispatch = useDispatch();
  const userDetail = useSelector(store => store?.userDetails);

  console.log(userDetail,"user==========================>")

  const fontScale = PixelRatio?.getFontScale();

  return (
    <View style={styles.container}>
      <Header
      style_title={{color:Colors?.blue}}
        source_arrow={ImageConstant.backarrow}
        title="Sign up as"
    style_backarrow={{ tintColor: Colors.black,marginLeft:20}}
      />
      <ToothsComponent style={styles.toothsComStyle} source={ImageConstant.chooseRole} />
      <View style={styles.optionsContainer}>
        <View style={styles.row}>
          <View style={{ width: "45%" }}>

            <View
              style={[
                styles.option,

              ]}

              accessible
              accessibilityLabel="Select Dentists"
              accessibilityHint="Choose to sign up as a Dentist"
            >
              <Image source={ImageConstant.Partner} style={styles.img} />

            </View>
            <TouchableOpacity
              onPress={() =>{
                dispatch(userDetails({...userDetail,type:1}))
                setSelect(1)
              } }
              style={[{ width: "100%", borderWidth: 1, justifyContent: "center", marginTop: 25, borderColor: Colors.white, borderRadius: 8 },
              select === 1 && styles.selectedOption]}>

              <Typography style={[styles.text,{ color: select === 1 ? Colors.lightblue : Colors.white,fontSize: 16/fontScale, }]}>Partner</Typography>
            </TouchableOpacity>
            <View style={{marginTop:12}}>
            <Typography textAlign={"center"} type={Font.Poppins_Medium} size={12} lineHeight={18} color={Colors.white} >
              I provide healthcare service at home 
              </Typography>
            </View>
          </View>

          {/* Hygienists */}
          <View style={{ width: "45%" }}>

            <View
              style={[
                styles.option,

              ]}

              accessible
              accessibilityLabel="Select Hygienists"
              accessibilityHint="Choose to sign up as a Hygienist"
            >
              <Image source={ImageConstant.Patient} style={styles.img} />

            </View>
            <TouchableOpacity
              onPress={() => {
                setSelect(2);
                dispatch(userDetails({...userDetail,type:2}))
              }}
              style={[{ width: "100%", borderWidth: 1, justifyContent: "center", marginTop: 25, borderColor: Colors.white, borderRadius: 8 },
              select === 2 && styles.selectedOption]}>
              <Typography style={[styles.text, {color : select === 2 ? Colors.blue : Colors.white,fontSize: 16/fontScale, }]}>Patient</Typography>
            </TouchableOpacity>

            <View style={{marginTop:12}}>
              <Typography textAlign={"center"} type={Font.Poppins_Medium} size={12} lineHeight={18} color={Colors.white} >
              I want to book healthcare at home service
              </Typography>
            </View>
          </View>

        </View>
        <Button
          title="Let’s Connect"
          onPress={() => navigation.navigate('SignUp')}
          accessible
          accessibilityRole="button"
          accessibilityLabel="Proceed to Login"
          style={styles.button}
        />
      </View>
    </View>
  );
};

export default ChooseUser;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F9FBFD',
    flex: 1,
  },
  toothsComStyle: {
    marginTop: 20,
  },
  optionsContainer: {
    flex: 1,
    backgroundColor: "#029991",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 20,
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  option: {
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 14,
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: Colors.white,
    marginHorizontal:10


  },
  selectedOption: {
    backgroundColor: Colors.white,
    borderColor: Colors.white,
  },
  img: {
    height: 50,
    width: 50,
    marginBottom: 10,
  },
  text: {

    
    fontFamily: Font.Poppins_Medium,
    textAlign: "center",
    marginVertical: 10
  },
  button: {
    alignSelf: 'center',
    marginTop: 10,
    width:"80%"
  },
  transparent: {
    borderColor: 'transparent',
  },
});
