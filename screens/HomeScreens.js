import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Welcome to Empowering the Nation</Text>
      <Button title="View Courses" onPress={() => navigation.navigate('Courses')} />
      <Button title="About Us" onPress={() => navigation.navigate('About')} />
      <Button title="Contact Us" onPress={() => navigation.navigate('Contact')} />
    </View>
  );
};

export default HomeScreen;
