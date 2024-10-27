// screens/SixMonthCoursesScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const SixMonthCoursesScreen = ({ navigation }) => {
    const courses = [
        { title: 'First Aid', fees: 'R1500', purpose: 'To provide first aid awareness and basic life support.' },
        { title: 'Sewing', fees: 'R1500', purpose: 'To provide alterations and new garment tailoring services.' },
        { title: 'Landscaping', fees: 'R1500', purpose: 'To provide landscaping services for new and established gardens.' },
        { title: 'Life Skills', fees: 'R1500', purpose: 'To provide skills to navigate basic life necessities.' },
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Six-Month Courses</Text>
            {courses.map((course, index) => (
                <Button
                    key={index}
                    title={`${course.title} - ${course.fees}`}
                    onPress={() => navigation.navigate('Course Details', { course })}
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontSize: 24,
        marginBottom: 10,
    },
});

export default SixMonthCoursesScreen;
