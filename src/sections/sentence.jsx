import React, { useState } from 'react';
import { TextInput, View } from 'react-native';

export const Sentence = () => {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');

    return (
        <View>
            <TextInput placeholder='From' value={from} onChangeText={setFrom} />
            <TextInput placeholder='To' value={to} onChangeText={setTo} />
        </View>
    )
}