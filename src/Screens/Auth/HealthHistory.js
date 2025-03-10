import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Children, useEffect, useState} from 'react';
import Header from '../../Component/Header';
import {ImageConstant} from '../../Constants/ImageConstant';
import Typography from '../../Component/UI/Typography';
import {Font} from '../../Constants/Font';
import {Colors} from '../../Constants/Colors';
import {ScrollContainer} from '../../Component/UI/ScrollContainer';
import Input from '../../Component/Input';

const HealthHistory = () => {
  const [apiData, setApiData] = useState([]);
  const [isPregnant, setIsPregnant] = useState();
  const [bleedingMedication, setBleedingMedication] = useState({
    name: 'Medications for Increased Bleeding',
    description:
      'Please check if the patient is taking any of the following medications:',
    isActive: true,
    category: [
      {
        id: 1,
        title: 'Ibuprofen',
        isActive: false,
      },
      {
        id: 2,
        title: 'Fluoxetine',
        isActive: false,
      },
      {
        id: 3,
        title: 'Acetaminophen',
        isActive: true,
      },
      {
        id: 4,
        title: 'Escitalopram',
        isActive: true,
      },
      {
        id: 5,
        title: 'Aspirin',
        isActive: false,
      },
    ],
  });
  const [caner_treatment, setCancer_treatment] = useState({
    name: 'Cancer Treatment',
    category: [
      {
        id: 1,
        title: 'Ibuprofen',
        isActive: false,
      },
      {
        id: 2,
        title: 'Fluoxetine',
        isActive: false,
      },
      {
        id: 3,
        title: 'Acetaminophen',
        isActive: true,
      },
    ],
  });
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Header
        onPress={() => navigation.goBack()}
        source_arrow={ImageConstant.backarrow}
        title={'Health History'}
      />
      <ScrollContainer>
        <View
          style={{
            borderRadius: 15,
            padding: 10,
            marginBottom: 10,
            marginHorizontal: 15,
            // elevation: 1,
            marginTop: 5,
          }}>
          <Typography style={{}} size={16} type={Font.Poppins_SemiBold}>
            Is the patient pregnant?
          </Typography>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => {
                setIsPregnant(1);
              }}
              style={{
                padding: 5,
                flexDirection: 'row',
              }}>
              <Image
                source={
                  isPregnant
                    ? ImageConstant?.check_icon
                    : ImageConstant?.unCheck_icon
                }
                style={{height: 20, width: 20, marginEnd: 7}}
              />
              <Typography size={13}>{'Yes'}</Typography>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setIsPregnant(0);
              }}
              style={{
                padding: 5,
                flexDirection: 'row',
                marginHorizontal: 10,
              }}>
              <Image
                source={
                  !isPregnant
                    ? ImageConstant?.check_icon
                    : ImageConstant?.unCheck_icon
                }
                style={{height: 20, width: 20, marginEnd: 7}}
              />
              <Typography size={13}>{'No'}</Typography>
            </TouchableOpacity>
          </View>
        </View>
        <HealthHistoryCard
          data={bleedingMedication}
          numColumns={2}
          onChange={v => {
            console.log(v, 'bleedingMedication====>');
          }}
          children={() => {
            return (
              <View style={{}}>
                <Input mainStyle={{marginHorizontal: 0}} title={'Other'} />
              </View>
            );
          }}
        />
        <HealthHistoryCard
          data={caner_treatment}
          onChange={v => {
            console.log(v, 'caner_treatment-===>');
          }}
        />
        <View
          style={{
            borderRadius: 15,
            padding: 10,
            marginBottom: 10,
            marginHorizontal: 15,
            // elevation: 1,
            marginTop: 5,
          }}>
          <Typography style={{}} size={16} type={Font.Poppins_SemiBold}>
            Additional Notes
          </Typography>
          <Typography style={{marginTop: 5}} color={Colors.grey}>
            If the patient requires any premedication or additional care, please
            provide details:
          </Typography>
          <Input
            multiline={true}
            mainStyle={{marginHorizontal: 0}}
            style_input={{height: 115}}
            title={'Additional Notes'}
          />
        </View>
      </ScrollContainer>
    </View>
  );
};

export default HealthHistory;

const HealthHistoryCard = ({
  data,
  onChange = () => {},
  children = () => {},
  numColumns = 1,
}) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  console.log('🚀 ~ selectedCategories:', selectedCategories);
  const toggleSubCategorySwitch = id => {
    setSelectedCategories(prev => {
      const newSelectedCategories = prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id];
      onChange(newSelectedCategories);
      return newSelectedCategories;
    });
  };

  return (
    <View
      style={{
        borderRadius: 15,
        padding: 10,
        marginBottom: 10,
        marginHorizontal: 15,
        // elevation: 1,
      }}>
      <Typography style={{}} size={16} type={Font.Poppins_SemiBold}>
        {data?.name}
      </Typography>
      {data?.description && (
        <Typography style={{marginTop: 5}} color={Colors.grey}>
          {data?.description}
        </Typography>
      )}
      {data?.category?.length > 0 && (
        <FlatList
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={data?.category}
          numColumns={numColumns}
          renderItem={({item, index}) => {
            const isEnabled = selectedCategories.includes(item?.id);
            return (
              <TouchableOpacity
                onPress={() => {
                  toggleSubCategorySwitch(item?.id);
                }}
                style={{
                  padding: 5,
                  flexDirection: 'row',
                  width: '50%',
                }}>
                <Image
                  source={
                    isEnabled
                      ? ImageConstant?.check_icon
                      : ImageConstant?.unCheck_icon
                  }
                  style={{height: 20, width: 20, marginEnd: 7}}
                />
                <Typography size={13}>{item?.title}</Typography>
              </TouchableOpacity>
            );
          }}
          style={{paddingVertical: 10}}
        />
      )}
      {children && children()}
    </View>
  );
};

const styles = StyleSheet.create({});
