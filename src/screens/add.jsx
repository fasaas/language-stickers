import React, { useState } from 'react';
import { Button, ScrollView, Text, TextInput, View } from 'react-native';
import { useSettingsContext } from '../context/settings';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Add = ({ navigation, route }) => {
    const { sections } = useSettingsContext();

    const [title, setTitle] = useState('');

    return (
        <SafeAreaView>
            <ScrollView>
                <View key='title'>
                    <TextInput
                        placeholder="Title"
                        value={title}
                        onChangeText={setTitle}
                    />
                </View>
                <View key=''>

                </View>
                <View key='submit'>
                    <Button
                        title='Save note'
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
