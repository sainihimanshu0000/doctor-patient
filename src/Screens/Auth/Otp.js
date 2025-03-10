import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import Input from '../../Component/Input'
import { Colors } from '../../Constants/Colors'
import { Font } from '../../Constants/Font'
import MyComponent from '../../Component/UI/Blur'
import Header from '../../Component/Header';
import { ImageConstant } from '../../Constants/ImageConstant'
import Typography from '../../Component/UI/Typography'
import Button from '../../Component/Button'
import { OtpInput } from 'react-native-otp-entry'

const Otp = ({navigation}) => {
    return (
        <View style={styles.container}>
      <MyComponent />
      <Header source_arrow={ImageConstant.arrow_left} />
      <View style={{flex:1}}>
        <View style={{justifyContent:"center",alignItems:"center"}}>
        <View style={{width:"75%"}}>
        <Typography
          type={Font.Poppins_Medium}
          lineHeight={24}
          size={32}
          textAlign="center"
          style={styles.welcomeText}
        >
          Enter OTP
        </Typography>
        <Typography
          type={Font.Poppins_Regular}
          lineHeight={21}
          size={15}
          textAlign="center"
          style={[styles.welcomeText,{marginTop:10,color:"#69727D"}]}
        >
          Please Enter the OTP to access all the services
        </Typography>
        </View>
        </View>
        <View style={{width:"100%",alignItems:"flex-start",marginTop:30}}>
        <Typography   type={Font.Poppins_Regular}
          lineHeight={21}
          size={15}
          textAlign="center"
          style={[styles.welcomeText,{marginTop:10,color:"#2F3B4A"}]}>
             OTP send on SMS on +91032115153
        </Typography>
        <View style={{ marginHorizontal:0 ,borderRadius: 14,marginTop:10}}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                // marginHorizontal: 20,
                width:"100%"
            }}>
                <OtpInput numberOfDigits={6} style={{}} onTextChange={(text) => console.log(text)}  theme={{
    containerStyle: {width:"100%"},
    pinCodeContainerStyle:{height:50,width:50}
  }}/>

            </View>
        </View>
        </View>
        <View style={{justifyContent:"space-between",flexDirection:"row",marginTop:10}}>
        <Typography
          type={Font.Poppins_Regular}
          lineHeight={21}
          size={15}
          textAlign="center"
          style={[styles.welcomeText,{marginTop:10,color:"#2F3B4A"}]}
        >
          Resend the OTP in 
        </Typography> 
        <Typography
          type={Font.Poppins_Regular}
          lineHeight={21}
          size={15}
          textAlign="center"
          style={[styles.welcomeText,{marginTop:10,color:"#2F3B4A"}]}
        >
          00:30 sec
        </Typography> 
        </View>
        </View>
        <Button
          title="Next"
          onPress={() => {navigation?.navigate("Login")}}
          style={styles.button}
          title_style={styles.buttonTitle}
        />
        </View>
    )
}

export default Otp

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        flex: 1,
        paddingHorizontal: 20,
      },
    input_text: {
        height: 52,
        width: 49,
        backgroundColor: "#D9D9D9",
        borderRadius: 7,
        alignItems: 'center',
        justifyContent: 'space-around',
        flex: 1,
        paddingHorizontal: 15,
        paddingVertical: 8,
        color: Colors.black,
        fontFamily: Font.Poppins_Bold,
        fontSize: 20,
        marginRight:10
    },
    buttonTitle: {
        fontSize: 18,
      },
})