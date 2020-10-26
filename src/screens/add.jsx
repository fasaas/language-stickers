import React from 'react';
import { Text } from 'react-native';
import { useSettingsContext } from '../context/settings';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Add = ({ navigation, route }) => {
    console.log("Add -> route", route)
    const context = useSettingsContext();

    return (
        <SafeAreaView>
            <Text>Add screen</Text>
        </SafeAreaView>
    );
}