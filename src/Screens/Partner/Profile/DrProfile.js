import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Header from '../../../Component/Header';
import Typography from '../../../Component/UI/Typography';
import { Font } from '../../../Constants/Font';
import menuItems from '../../../Constants/Data';
import { Colors } from '../../../Constants/Colors';
import { ImageConstant } from '../../../Constants/ImageConstant';

const DrProfile = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Header
                containerStyle={{
                    top: -15, marginLeft: 20,
                    height: 190,
                }}
                style_title={{
                    fontSize: 23,
                    fontWeight: "600",
                    fontFamily: Font?.Poppins_Medium,
                }}
                source_arrow={ImageConstant.arrow_left}
            />

            {/* Profile Section */}


            {/* Background Curve */}
            <View style={styles.topBackground} >
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
            {/* Menu Items */}
            <View style={styles.bottomContainer}>
                <ScrollView showsVerticalScrollIndicator={false}>

                    <View style={styles.profileContainer}>
                        <Image source={ImageConstant.profileOfDR} style={styles.profileImage} />
                        <View style={styles.profileTextContainer}>
                            <Typography type={Font.Poppins_Bold} size={15} lineHeight={22.5} color={Colors.blue} textAlign={"center"}>
                                Dr. Danaesh Karthik
                            </Typography>
                            <Typography size={11} lineHeight={16.5} type={Font.Poppins_Light} textAlign={"center"}>
                                Physiotherapist
                            </Typography>
                        </View>
                    </View>
                    <View style={{ marginTop: 30 }}>

                        <Typography type={Font.Poppins_Bold} size={17} lineHeight={25.5} color={Colors.blue}>
                            Physiotherapist Services
                        </Typography>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
                            <Typography size={14} lineHeight={21} >
                                Ligament sprains
                            </Typography>
                            <TouchableOpacity onPress={()=>{navigation.navigate("PhysioServices")}}>
                                <Typography size={14} lineHeight={21} >

                                    See all
                                </Typography>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ marginTop: 30 }}>
                        <Typography type={Font.Poppins_Bold} size={17} lineHeight={25.5} color={Colors.blue}>
                            Location
                        </Typography>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
                            <Typography size={14} lineHeight={21} >
                                Bengalore, India
                            </Typography>
                            <TouchableOpacity>
                                <Typography size={14} lineHeight={21} >

                                    Explore
                                </Typography>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginTop: 30 }}>
                        <Typography type={Font.Poppins_Bold} size={17} lineHeight={25.5} color={Colors.blue}>
                            Time
                        </Typography>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
                            <Typography size={14} lineHeight={21} >
                                11 am - 2 pm ( Monday - Friday )
                            </Typography>
                            <TouchableOpacity>
                                <Typography size={14} lineHeight={21} >

                                    Set time
                                </Typography>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>

            </View>
        </View>
    )
}

export default DrProfile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        marginBottom: 50,
    },
    profileContainer: {
        // flexDirection: "row",
        marginLeft: 28,
        alignItems: "center",
        marginBottom: 30,
    },
    profileImage: {
        height: 86,
        width: 80,
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
        height: 150,
        flexDirection: "row",
        justifyContent: "space-around",

    },
    bottomContainer: {
        paddingHorizontal: 30,
        backgroundColor: Colors.white,
        marginVertical: 30,
        marginTop: -20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingTop: 26,
  
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
