import React from 'react';
import { View, Text, Button } from 'react-native';

const CoursesScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Our Courses</Text>
      <Button title="First Aid" onPress={() => navigation.navigate('Course Details', { course: 'First Aid' })} />
      <Button title="Sewing" onPress={() => navigation.navigate('Course Details', { course: 'Sewing' })} />
      <Button title="Landscaping" onPress={() => navigation.navigate('Course Details', { course: 'Landscaping' })} />
      <Button title="Life Skills" onPress={() => navigation.navigate('Course Details', { course: 'Life Skills' })} />
      <Button title="Child Minding" onPress={() => navigation.navigate('Course Details', { course: 'Child Minding' })} />
      <Button title="Cooking" onPress={() => navigation.navigate('Course Details', { course: 'Cooking' })} />
      <Button title="Garden Maintenance" onPress={() => navigation.navigate('Course Details', { course: 'Garden Maintenance' })} />
    </View>
  );
};

export default CoursesScreen;
