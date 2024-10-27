import React from 'react';
import { View, Text } from 'react-native';

const CourseDetailsScreen = ({ route }) => {
    const { courseName } = route.params;

    return (
        <View>
            <Text>{courseName} Details</Text>
            {/* Add more course details based on the selected course */}
        </View>
    );
};

export default CourseDetailsScreen;
