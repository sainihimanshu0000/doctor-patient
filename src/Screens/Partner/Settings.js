import { Alert, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Header from '../../Component/Header';
import Typography from '../../Component/UI/Typography';
import { Font } from '../../Constants/Font';
import menuItems from '../../Constants/Data';
import { Colors } from '../../Constants/Colors';
import { ImageConstant } from '../../Constants/ImageConstant';
import { useDispatch } from 'react-redux';
import { isAuth } from '../../Redux/action';

const Settings = ({ navigation }) => {
  const dispatch = useDispatch();

  const handleItemPress = (item) => {
    switch (item.name) {
      case "My Dashboard":
        navigation.navigate("Profile");
        break;
        case "My Schedule":
          navigation.navigate("MySchedule");
          break;

      case "Logout":
        Alert.alert(
          "Confirm Logout",
          "Are you sure you want to log out?",
          [
            { text: "No", style: "cancel" },
            { text: "Yes", onPress: () => dispatch(isAuth(false)) },
          ]
        );
        break;

      case "My Wallet":
        navigation.navigate("PaymentStatusScreen");
        break;
      case "Verify My Profile":
        navigation.navigate("MyScheduleScreen");
        break;

      default:
        Alert.alert(
          "Feature Coming Soon 🚀",
          "We're working hard to bring this feature to you. Stay tuned for updates!",
          [{ text: "OK", style: "cancel" }]
        );
    }
  };

  return (
    <View style={styles.container}>
      <Header
        containerStyle={{ top: -15, marginLeft: 20, }}
        style_title={{
          fontSize: 23,
          fontWeight: "600",
          fontFamily: Font?.Poppins_Medium,
        }}
        source_arrow={ImageConstant.arrow_left}
      />

      {/* Profile Section */}
      <View style={styles.profileContainer}>
        <Image source={ImageConstant.docProfile} style={styles.profileImage} />
        <View style={styles.profileTextContainer}>
          <Typography type={Font.Poppins_Bold} size={15} lineHeight={22.5} color={Colors.blue}>
            Dr. Danaesh Karthik
          </Typography>
          <Typography size={11} lineHeight={16.5} type={Font.Poppins_light}>
            Physiotherapist
          </Typography>
        </View>
      </View>

      {/* Background Curve */}
      <View style={styles.topBackground} />

      {/* Menu Items */}
      <View style={styles.bottomContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={menuItems}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.item}
              onPress={() => handleItemPress(item)}
            >

              <View style={styles.itemContent}>
                <Image source={item.image} style={styles.image} />
                <Typography size={15} lineHeight={22.5} color={Colors.black}>
                  {item.name}
                </Typography>
              </View>
              {item.name != "Logout" && <Image source={ImageConstant.arrow_down} style={styles.arrowIcon} />}
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    marginBottom: 50,
  },
  profileContainer: {
    flexDirection: "row",
    marginLeft: 28,
    alignItems: "center",
    marginBottom: 30,
  },
  profileImage: {
    height: 64,
    width: 64,
    resizeMode: "contain",
  },
  profileTextContainer: {
    marginLeft: 14,
    justifyContent: "center",
  },
  topBackground: {
    backgroundColor: Colors.blue,
    paddingTop: 20,
    alignItems: "center",
    paddingBottom: 50,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    height: 100,
  },
  bottomContainer: {
    paddingHorizontal: 30,
    backgroundColor: Colors.white,
    marginVertical: 30,
    marginTop: -20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 26,
    marginBottom: 330
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 17,
    backgroundColor: Colors.lightGray,
    marginBottom: 12,
  },
  itemContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 24,
    height: 24,
    resizeMode: "contain",
    marginRight: 30,
  },
  arrowIcon: {
    height: 16,
    width: 16,
    resizeMode: "cover",
  },
});
