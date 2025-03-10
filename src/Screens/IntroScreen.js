import React, {useState, useRef, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  StatusBar,
  Image,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Colors} from '../Constants/Colors';
import {windowHeight, windowWidth} from '../Constants/Dimensions';
import {ImageConstant} from '../Constants/ImageConstant';
import Button from '../Component/Button';
import {Font} from '../Constants/Font';
import Typography from '../Component/UI/Typography';
import {useDispatch} from 'react-redux';
import {skipData} from '../Redux/action';
import { useIsFocused } from '@react-navigation/native';
import { widthPercentageToDP } from 'react-native-responsive-screen';


const IntroScreen = ({navigation}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef(null);
  const dispatch = useDispatch();
  const data = [
    {
      id: 1,
      title: 'Welcome to Tooths',
      sub_title:
        'We provide healthcare services at home',
      image: ImageConstant.intro1,
    },
    {
      id: 2,
      title: 'Schedule Appointments with Ease',
      sub_title:
        ' Verified and experienced Caregivers',
      image:  ImageConstant.intro2,
    },
    {
      id: 3,
      title: 'Take Charge of Your Oral Health',
      sub_title:
        'Let’s take good care of your health at home',
      image:  ImageConstant.intro3,
    },
  ];
  
  const isFocus = useIsFocused();
  const onScroll = event => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = Math.floor(event.nativeEvent.contentOffset.x*1.1 / slideSize);
    setActiveIndex(index);
  };
  const goToNextSlide = () => {
    if (activeIndex < data.length - 1) {
      flatListRef.current.scrollToIndex({index: activeIndex + 1});
    } else {
      onDone();
    }
  };
  const onDone = () => {
    dispatch(
      skipData({
        intro: false,
      }),
    );
    navigation.navigate("ChooseUser")
  };

  
  return (
    <>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
        translucent={true}
      />
      
        <View style={{flex: 4, backgroundColor: 'transparent', paddingTop: 50}}>
          <FlatList
            data={data}
            horizontal={true}
            pagingEnabled={true}
            onScroll={onScroll}
            showsHorizontalScrollIndicator={false}
            ref={flatListRef}
            renderItem={({item}) => {
              console.log(item)
              return (
                <View style={{justifyContent:"space-between", width: windowWidth }}>
                  <View style={{justifyContent:"center",height:400,}}>
                  <Image source={ item?.image} style={styles.img} />
                    </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                     
                    }}>
                    <View
                      style={{
                        alignItems: 'center',
                        width: windowWidth - 60,
                        marginLeft: 20,
                       
                      }}>
                      <Typography size={24} lineHeight={34.8} style={styles.main_title}>
                        {item?.sub_title}
                      </Typography>
                     
                    </View>
                  </View>
                </View>
              );
            }}
            keyExtractor={item => item.id.toString()}
          />
          {activeIndex !== data?.length - 1 && (
            <TouchableOpacity
              style={styles.opacity}
              onPress={() => {
                onDone();
              }}>
              <Typography
                type={Font?.Poppins_Medium}
                style={{color: Colors.blue}}
                size={14}>
                Skip
              </Typography>
              <Image
                source={ImageConstant.arrow_right}
                tintColor={Colors.blue}
                style={{height: 20, width: 20}}
              />
            </TouchableOpacity>
          )}
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            marginBottom: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginVertical: 15,
            }}>
            {data.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.onpage_view,
                  {
                    backgroundColor:
                      activeIndex === index ? Colors.blue : Colors.lightgrey,
                  },
                  {width:  8},
                ]}
              />
            ))}
          </View>
          <Button
            title={activeIndex === data.length - 1 ? 'Get Started' : 'Next'}
            style={{marginHorizontal: 50}}
            onPress={goToNextSlide}
          />
        </View>
    
    
    </>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  img: {
    height: 300,
    width: 341,
    marginHorizontal: 20,
    marginVertical: 10,
    marginTop:40,
    
    alignItems: 'flex-end',
    // height: windowHeight * 0.4,
    // width: windowWidth * 0.9,
    resizeMode: 'contain',
    alignSelf:"center",


  
  },
  opacity: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: 'rgba(0, 0, 0, 0.3)',
    paddingHorizontal: 17,
    paddingVertical: 10,
    margin: 20,
    width: 89,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: Colors.blue,
    position: 'absolute',
    alignSelf: 'flex-end',
    top: 50,
    right: 10,
  
  },
  main_title: {
    color: Colors.blue,
    textAlign: 'center',
    marginVertical: 10,
    fontFamily: Font.Poppins_Regular,
  },
  onpage_view: {
    height: 8,
    borderRadius: 50,
    margin: 5,
  },
});

