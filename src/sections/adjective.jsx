import React, { useReducer, useState } from 'react';
import { TextInput, View } from 'react-native';
import { useSettingsContext } from '../context/settings';

const reducer = (state, action) => {
    const { gender, value } = action;

    return { ...state, [gender]: value };
}

export const Adjective = () => {
    const { genders } = useSettingsContext();
    console.log("Adjective -> genders", genders)
    const [state, dispatch] = useReducer(reducer, {});

    return (
        <View>
            {genders.map((gender) => {
                return <TextInput placeholder={gender} value={state[gender]} onChangeText={(value) => dispatch({ gender, value })} />
            })}
        </View>
    )
}