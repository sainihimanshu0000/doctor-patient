import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../../Component/Header';
import {ImageConstant} from '../../Constants/ImageConstant';
import Typography from '../../Component/UI/Typography';
import {Font} from '../../Constants/Font';
import {Colors} from '../../Constants/Colors';
import {windowWidth} from '../../Constants/Dimensions';
import {FocusAwareStatusBar} from '../../Component/UI/FocusAwareStatusBar';

const Faq = ({navigation}) => {
  const [isOpenedIndex, setOpenedIndex] = useState(-1);
  const [data, setData] = useState([
    {
      question: 'How do I schedule an appointment?',
      answer:
        'Yes, you can usually reschedule or cancel an appointment, but the specific process and any associated fees or deadlines depend on the organization or service provider. Its best to check the confirmation email or contact the provider directly for details.',
    },
    {
      question: 'Can I reschedule or cancel my appointment?',
      answer:
        'Yes, you can usually reschedule or cancel an appointment, but the specific process and any associated fees or deadlines depend on the organization or service provider. Its best to check the confirmation email or contact the provider directly for details.',
    },
    {
      question: 'How do I access my dental records?',
      answer:
        'Yes, you can usually reschedule or cancel an appointment, but the specific process and any associated fees or deadlines depend on the organization or service provider. Its best to check the confirmation email or contact the provider directly for details.',
    },
  ]);
  const toggleExpanded = index => {
    if (index == isOpenedIndex) {
      setOpenedIndex(-1);
    } else {
      setOpenedIndex(index);
    }
  };

  // const isFocus = useIsFocused();
  // useEffect(() => {
  //   if (isFocus) {
  //     faq_Data();
  //   }
  // }, [isFocus]);
  // const faq_Data = () => {
  //   GET(
  //     FAQ,
  //     async success => {
  //       console.log('success====FAQ', success);
  //       if (success?.status == 'success') {
  //         setData(success?.data)
  //       } else {
  //         setData([])
  //       }
  //     },
  //     error => {
  //       console.error('error====FAQ', error);
  //     },
  //     fail => {
  //       console.error('fail====FAQ', fail);
  //     },
  //   )
  // }

  const OpenDataList = ({item, index}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => toggleExpanded(index)}
        style={styles.pressContainer}>
        <View style={styles.viewcontainer}>
          <View style={{width: '90%'}}>
            <Typography
              size={16}
              color={Colors?.textColor}
              type={Font?.Poppins_Medium}
              lineHeight={24}
              textAlign={'left'}
              style={{}}>
              {item?.question}
            </Typography>
          </View>

          <View style={styles.svgbox}>
            {/* <SvgIcon
              color="#121212"
              name={isOpenedIndex == item?.id ? 'uparrow' : 'downarrow'}
            /> */}
            <Image
              source={ImageConstant.arrow_down}
              style={{
                height: 25,
                width: 25,
                transform: [
                  {rotate: isOpenedIndex == index ? '90deg' : '0deg'},
                ],
              }}
            />
          </View>
        </View>

        {isOpenedIndex == index && (
          <>
            <View
              style={{
                paddingTop: 12,
              }}>
              <Typography color={Colors?.grey} textAlign={'lefts'}>
                {item?.answer}
              </Typography>
            </View>
          </>
        )}
      </TouchableOpacity>
    );
  };
  return (
    <View
      style={{
        flex: 1,
        // backgroundColor: 'white'
      }}>
      <FocusAwareStatusBar />
      <Header
        onPress={() => {
          navigation.goBack();
        }}
        source_arrow={ImageConstant.backarrow}
        title={'Frequently Asked Questions'}
      />
      <View style={{paddingHorizontal: 15}}>
        <Typography type={Font.Poppins_Bold}>Need Help?</Typography>
        <Typography color={Colors.grey}>
          Have any questions? We’re here to guide you.
        </Typography>
        <FlatList
          scrollEnabled={false}
          keyExtractor={(item, index) => index?.toString()}
          data={data}
          renderItem={OpenDataList}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingVertical: 8, paddingBottom: 30}}
        />
      </View>
    </View>
  );
};

export default Faq;

const styles = StyleSheet.create({
  pressContainer: {
    backgroundColor: Colors.light_yellow,
    paddingTop: 16,
    paddingBottom: 18,
    padding: 18,
    borderRadius: 15,
    marginTop: 15,
    elevation: 0.2,
  },
  viewcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  svgbox: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: '12%',
  },
});
