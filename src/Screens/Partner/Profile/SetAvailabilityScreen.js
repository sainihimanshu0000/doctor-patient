import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import Header from '../../../Component/Header';
import Button from '../../../Component/Button';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const timeSlots = {
    "Morning Slots": ["09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM"],
    "Afternoon Slots": ["12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM"],
    "Evening Slots": ["07:00 PM", "07:30 PM", "08:00 PM", "08:30 PM", "09:00 PM", "09:30 PM", "10:00 PM", "10:30 PM"]
};

const SetAvailabilityScreen = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedSlots, setSelectedSlots] = useState([]);
    const [availability, setAvailability] = useState([]);

    const toggleSlot = (slot) => {
        setSelectedSlots((prev) => prev.includes(slot) ? prev.filter(s => s !== slot) : [...prev, slot]);
    };

    const saveAvailability = () => {
        if (selectedDate && selectedSlots.length) {
            setAvailability([...availability, { date: selectedDate, slots: [...selectedSlots] }]);
            setSelectedSlots([]);
        }
    };

    const removeAvailability = (index) => {
        setAvailability(availability.filter((_, i) => i !== index));
    };

    return (
        <View style={styles.container}>
            <Header title="Set up your Calendar for your Availability" containerStyle={{ marginBottom: 20 }} />
            <Calendar 
                onDayPress={(day) => setSelectedDate(day.dateString)}
                markedDates={{ [selectedDate]: { selected: true, selectedColor: '#00adf5' } }}
            />
            <Text style={styles.sectionTitle}>Choose your Time</Text>
            {Object.entries(timeSlots).map(([section, slots]) => (
                <View key={section}>
                    <Text style={styles.slotHeader}>{section}</Text>
                    <FlatList
                        data={slots}
                        numColumns={3}
                        keyExtractor={(item) => item}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={[styles.slot, selectedSlots.includes(item) && styles.selectedSlot]}
                                onPress={() => toggleSlot(item)}
                            >
                                <Text style={styles.slotText}>{item}</Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            ))}
            <TouchableOpacity style={styles.saveButton} onPress={saveAvailability}>
                <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
            <Text style={styles.sectionTitle}>Your Availability</Text>
            {availability.map((item, index) => (
                <View key={index} style={styles.availabilityCard}>
                    <Text style={styles.availabilityText}>{item.date}</Text>
                    <Text style={styles.availabilityText}>{item.slots.join(', ')}</Text>
                    <TouchableOpacity onPress={() => removeAvailability(index)}>
                        {/* <Icon name="delete" size={22} color="red" /> */}
                    </TouchableOpacity>
                </View>
            ))}
            <Button title="Done" containerStyle={styles.doneButton} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: '#F8F9FA' },
    sectionTitle: { fontSize: 18, fontWeight: 'bold', marginVertical: 10 },
    slotHeader: { fontSize: 16, fontWeight: '600', marginTop: 10 },
    slot: { padding: 10, margin: 5, borderWidth: 1, borderColor: '#ccc', borderRadius: 8 },
    selectedSlot: { backgroundColor: '#00adf5', borderColor: '#00adf5' },
    slotText: { fontSize: 14, fontWeight: 'bold' },
    saveButton: { backgroundColor: '#00adf5', padding: 12, marginVertical: 10, borderRadius: 8, alignItems: 'center' },
    saveButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
    availabilityCard: { flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#fff', padding: 15, borderRadius: 10, marginVertical: 5, elevation: 2 },
    availabilityText: { fontSize: 14, fontWeight: '600' },
    doneButton: { marginTop: 20 }
});

export default SetAvailabilityScreen;
