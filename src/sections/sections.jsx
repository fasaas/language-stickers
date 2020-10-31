import React from 'react';
import { Section } from './section';

export const Sections = ({ sections }) => {

    return (
        sections.map((section, index) => {
            const { type, initialState } = section;

            return <Section key={`section-${type}-${index}`} type={type} initialState={initialState} />
        })
    )
}