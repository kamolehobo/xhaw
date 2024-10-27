// screens/SixWeekCoursesScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const SixWeekCoursesScreen = ({ navigation }) => {
    const courses = [
        { title: 'Child Minding', fees: 'R750' },
        { title: 'Cooking', fees: 'R750' },
        { title: 'Garden Maintenance', fees: 'R750' },
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Six-Week Courses</Text>
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

export default SixWeekCoursesScreen;
