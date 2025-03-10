import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../../Constants/Colors'
import { ImageConstant } from '../../../Constants/ImageConstant'
import Header from '../../../Component/Header'
import { Font } from '../../../Constants/Font'
import Typography from '../../../Component/UI/Typography'
import Button from '../../../Component/Button'

const Congratulations = ({ navigation }) => {
    return (
        <View style={styles.container}>
         
            <View style={styles.content}>
                <Header
                    containerStyle={{ top: -15 }}
                    style_title={{
                        fontSize: 23,
                        fontWight: 600,
                        fontFamily: Font?.Poppins_Medium,
                    }}
                    source_arrow={ImageConstant.arrow_left}
                />

                <Image source={ImageConstant.Congratulations} style={styles.image} />

                <Typography style={styles.title} color={Colors.text} type={Font.Poppins_Bold} size={35} lineHeight={52} textAlign={"center"}>
                    Congratulations!
                </Typography>

                <Typography style={styles.text} color={Colors.text} size={15} textAlign={"center"} lineHeight={22.5}>
                    You have successfully uploaded your documents, our team will get back to you if we need any further clarification.
                </Typography>

                <Typography color={Colors.text} size={15} textAlign={"center"} lineHeight={22.5} style={styles.text}>
                    Please continue to "Set your Schedule". We will set up your meeting with our Onboarding team once your documents are verified.
                </Typography>
            </View>

         
            <View style={styles.buttonContainer}>
                <Button
                    title="Add me As a partner"
                    onPress={() => navigation.navigate("TrainingVideosScreen")}
                    accessible
                    accessibilityRole="button"
                    accessibilityLabel="Proceed to Login"
                />
            </View>
        </View>
    )
}

export default Congratulations

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        paddingHorizontal: 20,
        justifyContent: "space-between", 
    },
    content: {
        flex: 1, 
       
    },
    image: {
        height: 123,
        width: 178,
        alignSelf: "center",
    },
    title: {
        marginTop: 15,
    },
    text: {
        marginTop: 15,
    },
    buttonContainer: {
        marginBottom: 20,
    },
});
