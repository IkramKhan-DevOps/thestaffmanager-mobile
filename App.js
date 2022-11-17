import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashboardScreen from "./screens/DashboardScreen";
import LoginScreen from "./screens/LoginScreen";
import PasswordChangeScreen from "./screens/PasswordChangeScreen";
import PasswordResetScreen from "./screens/PasswordResetScreen";
import ProfileUpdateScreen from "./screens/ProfileUpdateScreen";
import ShiftsScreen from "./screens/ShiftsScreen";
import ShiftDetailsScreen from "./screens/ShiftDetailsScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Dashboard">
          <Stack.Screen name="Dashboard" component={DashboardScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="PasswordChangeScreen" component={PasswordChangeScreen} />
          <Stack.Screen name="PasswordResetScreen" component={PasswordResetScreen} />
          <Stack.Screen name="ProfileUpdateScreen" component={ProfileUpdateScreen} />
          <Stack.Screen name="ShiftsScreen" component={ShiftsScreen} />
          <Stack.Screen name="ShiftDetailsScreen" component={ShiftDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;