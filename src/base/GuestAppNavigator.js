import React, { useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/Home/HomeScreen'
import useHeader from '../hooks/useHeader'
import AddEventScreen from '../screens/AddEvent/AddEventScreen'

const Stack = createNativeStackNavigator()

export const GuestAppNavigator = () => {
  const { header } = useHeader();
  useEffect(() => {
  }, [header])

  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: header,
        }}
      />
      <Stack.Screen
        name="Add"
        component={AddEventScreen}
        options={{
          presentation: 'modal',
          headerTitle: 'Event',
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  )
}
