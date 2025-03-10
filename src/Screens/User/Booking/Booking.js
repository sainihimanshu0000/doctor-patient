import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderForUser from '../../../Component/HeaderForUser'
import { ImageConstant } from '../../../Constants/ImageConstant'

const Booking = ({navigation}) => {
  return (
    <View>
      <HeaderForUser
        onPressLeftIcon={() => navigation.openDrawer()}
        source_arrow={ImageConstant?.drawer}
        title={'Patient Planet'}
        source_logo={ImageConstant?.notification}
      />
    </View>
  )
}

export default Booking

const styles = StyleSheet.create({});