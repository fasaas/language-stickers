import React from 'react';
import { Button } from 'react-native';
import { useSettingsContext } from '../context/settings';
import { SafeAreaView } from 'react-native-safe-area-context';

export const List = ({ navigation }) => {
    const context = useSettingsContext();

    return (
        <SafeAreaView>
            <Button title="go to add" onPress={() => navigation.navigate('Add', { a: 7 })} />
        </SafeAreaView>
    );
}