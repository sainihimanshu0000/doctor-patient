import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyComponent from '../../../Component/UI/Blur'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import Typography from '../../../Component/UI/Typography'
import Header from '../../../Component/Header'
import { Font } from '../../../Constants/Font'
import { ImageConstant } from '../../../Constants/ImageConstant'
import Button from '../../../Component/Button'

const Welcome = ({navigation}) => {
  return (
    <View style={styles.container}>
      <MyComponent />
      {/* <Header /> */}
      <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <View style={{width:"100%",height:"auto",flex:.6}}>
        <Image source={ImageConstant?.Patient} style={{width:"100%",height:"100%"}} resizeMode='contain'/>
        </View>
        <View style={{flex:.2,justifyContent:"center",alignItems:"center"}}>
        <Typography size={23} color='#0451AD' fontWeight={600} type={Font?.Poppins_Medium} lineHeight={34}>
        Partner with Us Today
        </Typography>
        <Typography textAlign={"center"} color='#0451AD' size={18} fontWeight={400} type={Font?.Poppins_Regular} lineHeight={27}>
        Unlock New Opportunities in Homecare with Just a Few Simple Steps!
        </Typography>
        </View>
      </View>
      <Button
          title="Next"
          onPress={() => navigation?.navigate("ProfileStep1")}
          style={styles.button}
          title_style={styles.buttonTitle}
        />
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
     container: {
        backgroundColor: Colors.white,
        flex: 1,
        paddingHorizontal: 20,
      },
})