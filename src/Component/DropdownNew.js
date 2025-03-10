import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import {ImageConstant} from '../Constants/ImageConstant';
import {Colors} from '../Constants/Colors';
import Typography from './UI/Typography';
import {Font} from '../Constants/Font';

const DropdownNew = ({
  title,
  source,
  style_img,
  style_title,
  style_dropdown,
  data,
  value,
  onChange = () => {},
  containerStyle = {},
  MainBoxStyle = {},
  iconColor = Colors.black,
  disable,
  width = '80%',
  marginHorizontal = 20,
  size = 52,
  error,
  placeholder = '',
  leftIcons = ImageConstant.arrow_down,
  leftIconsShow = false,
  selectedTextStyleNew = {},
}) => {
  console.log('🚀 ~ value:', value);
  const renderItem = (item, index) => {
    return (
      <>
        <View
          style={{
            flexDirection: 'row',
            height: 50,
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: 'white',
            paddingHorizontal: 20,
          }}>
          <Typography style={{width: width}} type={Font.Poppins_SemiBold}>
            {item?.label}
          </Typography>
          {item?.subcategories && (
            <>
            <TouchableOpacity>
              <Image
                style={{
                  height: 20,
                  width: 20,
                  marginStart: 20,
                  resizeMode: 'contain',
                  transform: [{rotate: '90deg'}],
                }}
                source={
                  index
                    ? leftIcons
                    : leftIcons
                }
              />
              </TouchableOpacity>
            </>
          )}
        </View>
        {item?._index !== data?.length - 1 && (
          <View
            style={{
              height: 1.5,
              backgroundColor: Colors.lightgrey,
              marginHorizontal: 20,
            }}></View>
        )}
      </>
    );
  };
  return (
    <>
      <View
        style={[
          {marginHorizontal: marginHorizontal, marginVertical: 15},
          MainBoxStyle,
        ]}>
        {title && (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 10,
            }}>
            {source && (
              <Image source={source} style={[styles.img_style, style_img]} />
            )}
            <Typography type={Font?.Poppins_Medium} size={15} color='#252D38' style={[styles.txt_style, style_title]}>
              {title}
            </Typography>
          </View>
        )}

        <Dropdown
          disable={disable}
          showsVerticalScrollIndicator={false}
          style={[styles.dropdown, style_dropdown]}
          selectedTextStyle={[styles.selectedTextStyle, selectedTextStyleNew]}
          iconStyle={styles.iconStyle}
          placeholderStyle={[{color: 'gray'}, {...selectedTextStyleNew}]}
          data={data}
          value={value}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={placeholder}
          iconColor={iconColor}
          onChange={item => {
            onChange(item);
          }}
          renderRightIcon={() => {
            return (
              <View
                style={{
                  height: size,
                  width: size,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  tintColor={iconColor}
                  source={ImageConstant.arrow_down}
                  style={{
                    height: 20,
                    width: 20,
                    resizeMode: 'contain',
                    transform: [{rotate: '90deg'}],
                  }}
                />
              </View>
            );
          }}
          renderLeftIcon={() => {
            return (
              <>
                {leftIconsShow && (
                  <View
                    style={{
                      height: size,
                      width: size,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Image
                      tintColor={iconColor}
                      source={leftIcons}
                      style={{
                        height: 20,
                        width: 20,
                        resizeMode: 'contain',
                        tintColor: Colors?.blue,
                        // transform: [{rotate: '90deg'}],
                      }}
                    />
                  </View>
                )}
              </>
            );
          }}
          renderItem={renderItem}
          containerStyle={[styles.containerStyle, containerStyle]}
        />
      </View>
      {error && (
        <Typography
          textAlign={'right'}
          style={{
            color: 'red',
            fontSize: 12,
            marginStart: 5,
            marginTop: -5,
            marginBottom: 10,
          }}>
          {error}
        </Typography>
      )}
    </>
  );
};

export default DropdownNew;

const styles = StyleSheet.create({
  img_style: {
    height: 16,
    width: 16,
    marginLeft: 10,
    fontFamily:Font.Poppins_Bold
  },
  txt_style: {
    color: Colors.lableColor,
    fontize: 15,
    fontFamily: Font.Inter_Medium,
    marginLeft: 15,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: Colors.LightWhite,
    borderRadius: 10,
    marginHorizontal: 10,
    height: 60,
  },
  placeholderStyle: {
    color: Colors.white,
  },
  inputSearchStyle: {
    borderWidth: 1,
  },
  iconStyle: {
    height: 24,
    width: 24,
    marginHorizontal: 10,
    marginVertical: 13,
  },
  selectedTextStyle: {
    color: Colors.black,
    // paddingLeft: 15,
  },
  containerStyle: {
    borderRadius: 20,
    elevation: 2,
    borderWidth: 0,
    overflow: 'hidden',
    marginTop: 2,
  },
});
