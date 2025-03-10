import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Header from '../../../Component/Header';
import Typography from '../../../Component/UI/Typography';
import { Font } from '../../../Constants/Font';
import menuItems from '../../../Constants/Data';
import { Colors } from '../../../Constants/Colors';
import { ImageConstant } from '../../../Constants/ImageConstant';

const physiotherapyServices = [
    { id: 1, name: "Sports Services", checked: false },
    { id: 2, name: "Geriatric", checked: false },
    { id: 3, name: "Orthopedic", checked: false },
    { id: 4, name: "Pediatric", checked: false },
    { id: 5, name: "Neurological", checked: false },
    { id: 6, name: "Cardiovascular", checked: false },
];

const PhysioServices = () => {
    const [services, setServices] = useState(physiotherapyServices);

    const toggleCheckbox = (id) => {
        setServices((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, checked: !item.checked } : item
            )
        );
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.itemContainer} onPress={() => toggleCheckbox(item.id)}>
            <View style={styles.checkbox}>
                {item.checked && <Image source={ImageConstant.isCheck} style={styles.checkedBox} />}
            </View>
            <Typography size={13} lineHeight={20} >{item.name}</Typography>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Header
                containerStyle={{
                    top: -15, marginLeft: 20,
                    height: 130,
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
                <View style={styles.profileContainer}>
                    <Image source={ImageConstant.profileOfDR} style={styles.profileImage} />
                    <View style={styles.profileTextContainer}>
                        <Typography type={Font.Poppins_Bold} size={15} lineHeight={22.5} color={Colors.white} textAlign={"center"}>
                            Dr. Danaesh Karthik
                        </Typography>
                        <Typography size={11} lineHeight={16.5} type={Font.Poppins_light} textAlign={"center"} color={Colors.white}>
                            Physiotherapist
                        </Typography>
                    </View>
                </View>
            </View>
            {/* Menu Items */}
            <View style={styles.bottomContainer}>
                <ScrollView showsVerticalScrollIndicator={false}>


                    <View style={{ marginTop: 30 ,marginBottom:30}}>

                        <Typography type={Font.Poppins_Bold} size={17} lineHeight={25.5} color={Colors.blue}>
                            Physiotherapist Services
                        </Typography>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
                            <Typography size={14} lineHeight={21} >
                                Physiotherapists mostly use massages, exercises, heat therapy, and electrotherapy to treat injuries and deformities.
                            </Typography>

                        </View>
                    </View>

                    <FlatList
                        data={services}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={renderItem}
                    />
                </ScrollView>

            </View>
        </View>
    )
}

export default PhysioServices

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
        // paddingBottom: 50,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        // height: 150,
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
        height: "52%"
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
    itemContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
        
    },
    checkbox: {
        width: 16.67,
        height: 16.67,
        borderRadius: 3,
       
        // borderColor: "#000",
        backgroundColor: "#D9D9D9",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 10, // Space between checkbox & text
    },
    checkedBox: {
        width: 10,
        height: 10,
        resizeMode: "contain",
        borderRadius: 2,
    },
    text: {
        fontSize: 16,
    },
});
