// screens/AboutScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>About Us</Text>
            <Text>
                Empowering the Nation was established in 2018 and offers courses in Johannesburg.
                Hundreds of domestic workers and gardeners have been trained...
                {/* Add the full about text here */}
            </Text>
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

export default AboutScreen;
