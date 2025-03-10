import { FlatList, Image, StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import { ImageArray } from "../../../Constants/Data";
import Typography from "../../../Component/UI/Typography";
import { Colors } from "../../../Constants/Colors";
import { Font } from "../../../Constants/Font";
import Header from "../../../Component/Header";
import { ImageConstant } from "../../../Constants/ImageConstant";

const Dashboard = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
      <Header
        containerStyle={{ top: -15,marginLeft:20 }}
        style_title={{
          fontSize: 23,
          fontWeight: "600",
          fontFamily: Font?.Poppins_Medium,
        }}
        source_arrow={ImageConstant.arrow_left}
      />
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
    
      <Typography size={18} type={Font.Poppins_Bold} lineHeight={27} textAlign={"center"} color={Colors.text} style={{marginBottom:7}}>
        My Dashboard

    

      </Typography>
      <View style={{ backgroundColor: Colors.blue, paddingTop: 20, flexDirection: "row", justifyContent: "space-around", alignItems: "center", paddingBottom: 50, borderTopRightRadius: 30, borderTopLeftRadius: 30, }}>
        <View style={{ backgroundColor: Colors.white, padding: 14, borderRadius: 14, height: 72, width: 85, justifyContent: "center" }}>
          <Typography color={Colors.blue} type={Font.Poppins_Bold} size={15} textAlign={"center"} numberOfLines={1}>
            Patient
          </Typography>
          <Typography textAlign={"center"}>
            500+
          </Typography>
        </View>
        <View style={{ backgroundColor: Colors.white, padding: 14, borderRadius: 14, height: 72, width: 85, justifyContent: "center" }}>
        <Typography color={Colors.blue} type={Font.Poppins_Bold} size={15} textAlign={"center"} numberOfLines={1}>

            Chat
          </Typography>

        </View>
        <View style={{ backgroundColor: Colors.white, padding: 14, borderRadius: 14, height: 72, width: 85, justifyContent: "center" }}>
        <Typography color={Colors.blue} type={Font.Poppins_Bold} size={15} textAlign={"center"} numberOfLines={1}>
            Today
          </Typography>
          <Typography textAlign={"center"} >
            500+
          </Typography>
        </View>
      </View>
      <View style={styles.Bottomcontainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={ImageArray}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          initialNumToRender={6}
          removeClippedSubviews={true}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.item} onPress={()=>{navigation.navigate("TabNavigation")}}>
              <Image source={item.image} style={styles.image} />
              <Typography
                type={Font.Poppins_Bold}
                size={13}
                lineHeight={19.5}
                textAlign={"center"}
                color={Colors.blue}
              >
                {item.name}
              </Typography>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: "row",
    marginLeft: 28,
    alignItems: "center",
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
  Bottomcontainer: {

    paddingHorizontal: 30,
    backgroundColor: Colors.white,
    marginVertical: 30,
    marginTop:-20,
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    paddingTop:26,
    flex:1
  },
  item: {
    width: 142,
    height: 121,
    flex: 1,
    margin: 10,
    alignItems: "center",
    backgroundColor: Colors.primary,
    padding: 10,
    borderRadius: 17,
    borderColor: "#00000040",
    borderWidth: 1,
    elevation: 1,
    shadowColor: "#00000040",
    // shadowOffset: { width: 0, height: 3 }, 
    // shadowOpacity: 0.3,
    // shadowRadius: 5,
    justifyContent: "center"
  },
  image: {
    width: 36,
    height: 36,
    resizeMode: "contain",
    marginBottom: 13,
  },
});
