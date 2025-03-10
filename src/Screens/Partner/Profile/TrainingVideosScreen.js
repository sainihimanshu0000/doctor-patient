import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import { Colors } from '../../../Constants/Colors'
import Header from '../../../Component/Header'
import { Font } from '../../../Constants/Font'
import { ImageConstant } from '../../../Constants/ImageConstant'
import Typography from '../../../Component/UI/Typography'
import TrainingVideoCard from '../../../Component/UI/TrainingVideoCard'
import { trainingVideos } from '../../../Constants/Data'
import Button from '../../../Component/Button'

const TrainingVideosScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Header
                title={"Watch our Training & Orientation Videos"}
                containerStyle={{ top: -15 }}
                style_title={{
                    fontSize: 23,
                    fontWeight: "600", // Fixed typo
                    fontFamily: Font?.Poppins_Medium,
                }}
                source_arrow={ImageConstant.arrow_left}
            />
            
            {/* Introduction Text */}
            <Typography size={13} lineHeight={19.5} style={styles.introText}>
                How to greet, how to address issues, whom to connect, whom to call, Payment, how to use the app
            </Typography>

            {/* Training Videos List */}
            <FlatList
                data={trainingVideos}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TrainingVideoCard 
                        image={ImageConstant.Training} 
                        title={item.title} 
                        subtitle={item.subtitle} 
                    />
                )}
                initialNumToRender={5} // Optimization
                contentContainerStyle={{ paddingBottom: 20 }}
                showsVerticalScrollIndicator={false}
                ListFooterComponent={()=>(
                    <Button
                    title="Done"
                    onPress={() => navigation.navigate("Dashboard")}
                    accessible
                    accessibilityRole="button"
                    accessibilityLabel="Proceed to Login"
                />

    )}
    ListFooterComponentStyle={styles.footerStyle}
            />

        </View>
    )
}

export default TrainingVideosScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        paddingHorizontal: 20,
    },
    introText: {
        marginLeft: 60,
        marginBottom: 20,
    },
    footerStyle:{
        marginTop:50
    }
})
