import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigation from "./navigation/BottomNavigation";
import LoginScreen from "./screens/LoginScreen";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
                <Stack.Screen name="BottomNavigation" component={BottomNavigation} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}