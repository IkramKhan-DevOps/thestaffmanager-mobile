import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import DashboardScreen from "../screens/DashboardScreen";
import ShiftsScreen from "../screens/ShiftsScreen";
import ProfileUpdateScreen from "../screens/ProfileUpdateScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import CalenderScreen from "../screens/CalenderScreen";
import PasswordChangeScreen from "../screens/PasswordChangeScreen";
import PasswordResetScreen from "../screens/PasswordResetScreen";

const Tab = createBottomTabNavigator();

const BottomNavigation = ({navigation}) => {


    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;

                    if (route.name === 'Dashboard') {
                        iconName = focused ? 'apps' : 'apps-outline';
                    } else if (route.name === 'Calender') {
                        iconName = focused ? 'calendar' : 'calendar-outline';
                    } else if (route.name === 'Shifts') {
                        iconName = focused ? 'cube' : 'cube-outline';
                    } else if (route.name === 'PasswordChange') {
                        iconName = focused ? 'lock-open' : 'lock-open-outline';
                    } else if (route.name === 'PasswordReset') {
                        iconName = focused ? 'link' : 'link-outline';
                    } else {
                        iconName = focused ? "finger-print" : "finger-print-outline";
                    }

                    return <Ionicons name={iconName} size={size} color={color}/>;
                },
                headerShown: false,
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',

            })}
        >
            <Tab.Screen name="Dashboard" component={DashboardScreen}/>
            <Tab.Screen name="Calender" component={CalenderScreen}/>
            <Tab.Screen name="Shifts" component={ShiftsScreen}/>
            <Tab.Screen name="PasswordChange" component={PasswordChangeScreen}/>
            <Tab.Screen name="PasswordReset" component={PasswordResetScreen}/>
            <Tab.Screen name="Profile" component={ProfileUpdateScreen}/>
        </Tab.Navigator>
    )
}

export default BottomNavigation