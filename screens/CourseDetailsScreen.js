import React from 'react';
import { View, Text } from 'react-native';

const courseDetails = {
  'First Aid': { fees: 'R1500', purpose: 'To provide first aid awareness and basic life support.' },
  'Sewing': { fees: 'R1500', purpose: 'To provide alterations and new garment tailoring services.' },
  'Landscaping': { fees: 'R1500', purpose: 'To provide landscaping services for new and established gardens.' },
  'Life Skills': { fees: 'R1500', purpose: 'To provide skills to navigate basic life necessities.' },
  'Child Minding': { fees: 'R750', purpose: 'To provide basic child and baby care.' },
  'Cooking': { fees: 'R750', purpose: 'To prepare and cook nutritious family meals.' },
  'Garden Maintenance': { fees: 'R750', purpose: 'To provide basic knowledge of garden care.' },
};

const CourseDetailsScreen = ({ route }) => {
  const { course } = route.params;
  const details = courseDetails[course];

  return (
    <View>
      <Text>{course}</Text>
      <Text>Fees: {details.fees}</Text>
      <Text>Purpose: {details.purpose}</Text>
    </View>
  );
};

export default CourseDetailsScreen;
