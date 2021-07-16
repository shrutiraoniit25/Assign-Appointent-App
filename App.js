import React from 'react';
import { View , Text} from 'react-native';

//All navigation Imports
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Screen Imports
import HomeScreen from './Src/HomeScreen';
import Slots from './Src/Slots';
import Booked from './Src/Booked';

const Stack = createStackNavigator();

export default function App () {
    return(
        <NavigationContainer >
            <Stack.Navigator initialRouteName = "Home">
                <Stack.Screen name="Home" component={HomeScreen} options={{headerShown : false}}></Stack.Screen>
                <Stack.Screen name="Slots" component={Slots} options={{headerShown : false}}></Stack.Screen>
                <Stack.Screen name="Booked" component={Booked} options={{headerShown : false}}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}