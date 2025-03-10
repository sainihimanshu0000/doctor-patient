import React from "react";
import { View, TouchableOpacity, StyleSheet, Image, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../../../Constants/Colors";
import { ImageConstant } from "../../../Constants/ImageConstant";
import Typography from "../../../Component/UI/Typography";
import Header from "../../../Component/Header";
import { Font } from "../../../Constants/Font";

// Get window dimensions
const { width, height } = Dimensions.get("window");

const PaymentStatusScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Header
                containerStyle={{ top: -15 }}
                style_title={{
                    fontSize: 17,
                    fontWeight: "600",
                    fontFamily: Font?.Poppins_Medium,
                }}
                title={"Payment Status"}
                source_arrow={ImageConstant.arrow_left}
            />
            <View style={styles.paymentCardContainer}>
                {/* Total Amount */}
                <View style={[styles.paymentCard, { backgroundColor: Colors.blue }]}>
                    <Image style={styles.pieChart} source={ImageConstant.graph} />
                    <View style={styles.TypographyContainer}>
                        <Typography style={styles.cardTitle}>Total Amount</Typography>
                        <Typography style={styles.cardAmount}>10,000 INR</Typography>
                    </View>
                </View>

                {/* Payment Received */}
                <View style={[styles.paymentCard, { backgroundColor: "#33BFA0" }]}>
                    <Image style={styles.pieChart} source={ImageConstant.graph} />
                    <View style={styles.TypographyContainer}>
                        <Typography style={styles.cardTitle}>Payment received</Typography>
                        <Typography style={styles.cardAmount}>7,000 INR</Typography>
                    </View>
                </View>

                {/* Payment Dues */}
                <View style={[styles.paymentCard, { backgroundColor: "#66CFB8" }]}>
                    <Image style={styles.pieChart} source={ImageConstant.graph} />
                    <View style={styles.TypographyContainer}>
                        <Typography style={styles.cardTitle}>Payment dues</Typography>
                        <Typography style={styles.cardAmount}>1,000 INR</Typography>
                    </View>
                </View>

                {/* Go to Wallet Button */}
                <TouchableOpacity
                    style={styles.walletButton}
                    onPress={() => navigation.navigate("MyWallet")}
                >
                    <Typography style={styles.walletTypography}>Go to Wallet</Typography>
                    <Image source={ImageConstant.arrow_right} style={{ height: 12, width: 19 }} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E8F7F9",
        paddingHorizontal: width * 0.05, // 5% of screen width
    },
    paymentCardContainer: {
        marginTop: height * 0.02, // 2% of screen height
        backgroundColor: "#0299911A",
        padding: height * 0.05, // Responsive padding
        borderRadius: 40,
    },
    paymentCard: {
        padding: height * 0.025, // 2.5% of screen height
        borderRadius: 25,
        flexDirection: "row",
        alignItems: "center",
        height: height * 0.2, // 20% of screen height
        marginBottom: height * -0.02, // Adjust based on screen
    },
    pieChart: {
        height: height * 0.07, // 7% of screen height
        width: height * 0.07,
        marginRight: width * 0.04, // 4% of screen width
    },
    TypographyContainer: {
        flex: 1,
    },
    cardTitle: {
        fontSize: width * 0.04, // 4% of screen width
        color: "white",
    },
    cardAmount: {
        fontSize: width * 0.05, // 5% of screen width
        fontWeight: "bold",
        color: "white",
    },
    walletButton: {
        backgroundColor: Colors.blue,
        padding: height * 0.02, // 2% of screen height
        borderRadius: 30,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
        marginTop: height * 0.1, // 10% of screen height
        width: "80%",
        alignSelf: "center",
    },
    walletTypography: {
        fontSize: width * 0.045, // 4.5% of screen width
        color: "white",
        marginRight: width * 0.02,
    },
});

export default PaymentStatusScreen;
