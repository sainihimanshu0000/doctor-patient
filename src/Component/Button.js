import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  PixelRatio,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../Constants/Colors';
import { Font } from '../Constants/Font';
import Typography from './UI/Typography';

const Button = ({ onPress, title, loader = false, style, title_style,main_style,linerColor=['#07C4AE', '#4E38FD'] }) => {

      const fontScale = PixelRatio?.getFontScale();
  
  return (
    <TouchableOpacity onPress={onPress} disabled={loader} style={main_style}>
      <LinearGradient
        colors={linerColor}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={[styles.opacity_style, style]}
      >
        {loader ? (
          <ActivityIndicator size="small" color="#175FA6" />
        ) : (
          <Typography style={[styles.text_style, title_style,{fontSize:16/fontScale}]}>
            {title}
          </Typography>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  opacity_style: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginHorizontal: 20,
    marginVertical: 10,
    height: 50,
  },
  text_style: {
    color: Colors.white,
    fontSize: 16,
    fontFamily: Font.Poppins_Medium,
  },
});
