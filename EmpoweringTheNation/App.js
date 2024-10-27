// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import CourseDetailsScreen from './screens/CourseDetailsScreen';
import AboutScreen from './screens/AboutScreen';
import ContactScreen from './screens/ContactScreen';
import SixMonthCoursesScreen from './screens/SixMonthCoursesScreen';
import SixWeekCoursesScreen from './screens/SixWeekCoursesScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Six Month Courses" component={SixMonthCoursesScreen} />
        <Stack.Screen name="Six Week Courses" component={SixWeekCoursesScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Contact" component={ContactScreen} />
        <Stack.Screen name="Course Details" component={CourseDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
