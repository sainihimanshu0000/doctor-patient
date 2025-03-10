import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Header from '../../../Component/Header';
import Typography from '../../../Component/UI/Typography';
import { Font } from '../../../Constants/Font';
import { Colors } from '../../../Constants/Colors';
import { ImageConstant } from '../../../Constants/ImageConstant';
import Button from '../../../Component/Button';

const MyWallet = ({ navigation }) => {
    const [selectedTab, setSelectedTab] = useState("Reward History");

    return (
        <View style={styles.container}>
            <Header
                containerStyle={{
                    top: -15, marginLeft: 20,
                    // height: 190,
                }}
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
            <View style={styles.topBackground} >
                <Typography type={Font.Poppins_Regular} size={15} lineHeight={22.5} color={Colors.white} >My Wallet</Typography>
                <Typography type={Font.Poppins_Bold} size={24} lineHeight={36} color={Colors.white}>120 pp Coins</Typography>
            </View>

            {/* Menu Items */}
            <View style={styles.bottomContainer}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {/* Tab Buttons */}
                    <View style={styles.tabContainer}>
                        <TouchableOpacity
                            onPress={() => setSelectedTab("Reward History")}
                            style={[styles.tabButton, selectedTab === "Reward History" && styles.activeTab]}
                        >
                            <Typography color={selectedTab === "Reward History" ? Colors.white : Colors.black}>
                                Reward History
                            </Typography>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setSelectedTab("Redeem")}
                            style={[styles.tabButton, selectedTab === "Redeem" && styles.activeTab]}
                        >
                            <Typography color={selectedTab === "Redeem" ? Colors.white : Colors.black}>
                                Redeem
                            </Typography>
                        </TouchableOpacity>
                    </View>

                    {/* Dynamic Content */}
                    {selectedTab === "Reward History" ? (
                        <View style={styles.contentContainer}>
                             <View style={{ flexDirection: "row", justifyContent: "space-between",marginBottom:21 }}>

                                <Typography size={15} lineHeight={22.5} >Per Service</Typography>
                                <Typography size={15} lineHeight={22.5}>20</Typography>

                            </View>
                            <View style={{ flexDirection: "row", justifyContent: "space-between",marginBottom:21 }}>



                                <Typography size={15} lineHeight={22.5}>Per Referral</Typography>
                                <Typography size={15} lineHeight={22.5}>100</Typography>
                            </View>
                            <Image
                                source={ImageConstant.metar} style={{ width: "100%", height: 190, resizeMode: "contain",marginBottom:25 }} />
                            <Button title={"Redeem Coins"} onPress={() => setSelectedTab("Redeem")} />
                        </View>
                    ) : (
                        <View style={styles.contentContainer}>
                             <View style={{ flexDirection: "row", justifyContent: "space-between",marginBottom:21 }}>

                            <Typography size={15} lineHeight={22.5}>Total Balance</Typography>
                            <Typography size={15} lineHeight={22.5}>1000/-</Typography>

                             </View>
                            <Typography size={13} lineHeight={19} color={"#B0B0B0"} textAlign={"center"} style={{ marginBottom:12 }}>You can redeem your 1000 points once you reach 1500 points</Typography>
                            <Typography size={24} lineHeight={24} color={Colors.blue} textAlign={"center"} type={Font.Poppins_Bold} style={{ marginBottom:21 }}>Congrats!!</Typography>
                            <Typography size={14} lineHeight={21} textAlign={"center"}  >You have successfully reached your target</Typography>
                        </View>
                    )}
                </ScrollView>
            </View>
        </View>
    );
};

export default MyWallet;

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
        height: "48%",
    },
    tabContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
    },
    tabButton: {
        flex: 1,
        paddingVertical: 10,
        alignItems: "center",
        borderRadius: 10,
        backgroundColor: Colors.lightGray,
        marginHorizontal: 5,
    },
    activeTab: {
        backgroundColor: Colors.blue,
    },
    contentContainer: {
        marginTop: 20,
        marginBottom:20
    },
});
