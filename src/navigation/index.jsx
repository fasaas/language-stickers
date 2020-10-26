import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Feather } from '@expo/vector-icons';
import { List } from '../screens/list';
import { Add } from '../screens/add';

const Tab = createBottomTabNavigator();

export const Navigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="List"
                    component={List}
                    options={{
                        tabBarLabel: "Archive",
                        tabBarIcon: () => <Feather name="archive" size={24} />
                    }}
                />
                <Tab.Screen
                    name="Add"
                    component={Add}
                    options={{
                        tabBarLabel: "Add",
                        tabBarIcon: () => <AntDesign name="pluscircleo" size={24} color="black" />
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}