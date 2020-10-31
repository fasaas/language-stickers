import React, { useState } from 'react';
import { Button, ScrollView, Text, TextInput, View } from 'react-native';
import { useSettingsContext } from '../context/settings';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Picker } from '@react-native-picker/picker';
import { Sections } from '../sections/sections';

export const Add = ({ navigation, route }) => {
    const { sectionTypes } = useSettingsContext();
    const [title, setTitle] = useState('');
    const [sectionType, setSectionType] = useState(sectionTypes.Sentence);
    const [sections, setSections] = useState([]);

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
                <View key='sections-display' >
                    <Sections sections={sections} />
                </View>
                <View key='add-section'>
                    <Picker selectedValue={sectionType} onValueChange={setSectionType}>
                        {Object.entries(sectionTypes).map(([key, value]) => <Picker.Item key={`section-picker-${key}`} label={value} value={value} />)}
                    </Picker>
                    <Button
                        title='Add section'
                        onPress={() => setSections(sections.concat({ type: sectionType }))}
                    />
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
