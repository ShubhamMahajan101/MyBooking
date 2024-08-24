import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MyBookingsScreen from '../screens/MyBookingsScreen';
import BookingDetailsScreen from '../screens/BookingDetailsScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="MyBookings">
      <Stack.Screen name="MyBookings" component={MyBookingsScreen}  />
      <Stack.Screen name="BookingDetails" component={BookingDetailsScreen}  options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
};

export default AppNavigator;



