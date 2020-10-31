import React from 'react';
import { useSettingsContext } from '../context/settings';
import { Adjective } from './adjective';
import { Sentence } from './sentence';
import { Verb } from './verb';


export const Section = ({ type }) => {
    const { sectionTypes } = useSettingsContext();

    if (type === sectionTypes.Sentence) {
        return <Sentence />
    }

    if (type === sectionTypes.Adjective) {
        return <Adjective />
    }

    if (type === sectionTypes.Verb) {
        return <Verb />
    }

    return null
}