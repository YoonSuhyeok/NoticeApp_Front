/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React, { useCallback } from 'react';
// react-native-vector-icons/Ionicons otherwise.
import Ionicons from 'react-native-vector-icons/Ionicons';
import { QueryClient, QueryClientProvider } from 'react-query';

import SelectScreen from './page/SelectScreen';
import HomeScreen from './page/homeScreen';

export const queryClient = new QueryClient();

const Tab = createBottomTabNavigator();

function App() {
    const HomeIcon = useCallback(() => <Ionicons name="home" size={30} />, []);
    const CollegeIcon = useCallback(
        () => <Ionicons name="add" size={30} />,
        [],
    );

    return (
        <QueryClientProvider client={queryClient}>
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={() => ({
                        headerShown: false,
                        unmountOnBlur: true,
                    })}>
                    <Tab.Screen
                        name="Home"
                        component={HomeScreen}
                        options={{
                            tabBarIcon: HomeIcon,
                        }}
                    />
                    <Tab.Screen
                        name="College"
                        component={SelectScreen}
                        options={{
                            tabBarIcon: CollegeIcon,
                        }}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        </QueryClientProvider>
    );
}

export default App;
