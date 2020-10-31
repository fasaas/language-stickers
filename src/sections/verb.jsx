import { Picker } from '@react-native-picker/picker';
import React, { useReducer, useState } from 'react';
import { TextInput, View } from 'react-native';
import { useSettingsContext } from '../context/settings';

const reducer = (state, action) => {
    const { tense, subject, value } = action;
    state[tense][subject] = value;
    return { ...state };
}

const getInitState = ({ tenses, subjects }) => {
    const initState = {};

    tenses.forEach(tense => {
        initState[tense] = {};
        subjects.forEach(subject => {
            initState[tense][subject] = '';
        });
    });

    return initState;
}

export const Verb = () => {
    const { tenses, subjects } = useSettingsContext();

    const [tense, setTense] = useState(tenses[0]);
    const [state, dispatch] = useReducer(reducer, getInitState({ tenses, subjects }));

    return (
        <View>
            <View key='verb-section-tense-picker'>
                <Picker selectedValue={tense} onValueChange={setTense}>
                    {tenses.map((tense) => <Picker.Item key={`verb-section-picker-${tense}`} label={tense} value={tense} />)}
                </Picker>
            </View>
            <View key='verb-section-tenses'>
                {
                    subjects.map((subject) =>
                        <TextInput
                            key={`verb-${state[tense]}-${subject}`}
                            placeholder={subject}
                            value={state[tense][subject]}
                            onChangeText={(value) => dispatch({ tense, subject, value })} />
                    )
                }
            </View>
        </View>
    )
}