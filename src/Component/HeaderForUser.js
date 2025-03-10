import {
    StyleSheet,
    View,
    StatusBar,
    TouchableOpacity,
    Image,
  } from 'react-native';
  import React from 'react';
  import { Colors } from '../Constants/Colors';
  import { Font } from '../Constants/Font';
  import Typography from './UI/Typography';
  import {
    heightPercentageToDP,
    widthPercentageToDP,
  } from 'react-native-responsive-screen';
  import { useNavigation } from '@react-navigation/native';
  
  const HeaderForUser = ({
    onPress,
    style_img,
    style_backarrow,
    style_title,
    title,
    source_arrow,
    source_logo,
    containerStyle,
    centerIcon = false,
    backgroundColor = Colors.white,
    centerIconSource,
    centerIconTitle,
    onPressRightIcon = () => { },
    onPressLeftIcon = ()=>{},
    back_img,
  }) => {
    const navigation = useNavigation();
    return (
      <View style={[styles.container, containerStyle, ]}>
        <StatusBar translucent={true} backgroundColor="transparent" />
  
        <View style={styles.backContainer}>
          <TouchableOpacity onPress={() => { onPressLeftIcon() }}>
            <Image
              source={source_arrow}
              style={[styles.back_img, style_backarrow]}
            />
          </TouchableOpacity>
          <Typography
            type={Font.Poppins_Medium}
            style={[styles.txt_style, style_title]}>
            {title}
          </Typography>
          <TouchableOpacity onPress={onPressRightIcon}>
            <Image source={source_logo} style={[styles.back_img,back_img]} />
          </TouchableOpacity>
        </View>
     
      </View>
    );
  };
  
  export default HeaderForUser;
  
  const styles = StyleSheet.create({
    container: {
      alignItems: "center",
      borderBottomRightRadius: 30,
      borderBottomLeftRadius: 30,
    },
    backContainer: {
      flexDirection: 'row',
      paddingTop: heightPercentageToDP(7),
      justifyContent: 'space-between',
      alignItems: "center",
      paddingHorizontal:30,
    },
    back_img: {
      height: 18.21,
      width: 23.15,
      resizeMode: "center",
      tintColor: Colors.black,
    },
    txt_style: {
      color: "rgba(2, 153, 145, 1)",
      fontSize: 15,
      textAlign: 'center',
      flex: 1,
    },
  });
  