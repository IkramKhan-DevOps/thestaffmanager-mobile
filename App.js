import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigation from "./navigation/BottomNavigation";

export default function App() {
    return (
        <NavigationContainer>
            <BottomNavigation/>
        </NavigationContainer>
    );
}