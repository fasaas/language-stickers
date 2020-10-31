import React, { createContext, useContext } from 'react';

const defaultValue = {
    from: 'ru-RU',
    to: 'es-ES',
    tenses: [
        "Настоящее (presente)",
        "Прошедшее (pasado)",
        "Будущее (futuro)"
    ],
    subjects: [
        "Я",
        "Ты",
        "Он",
        "Она",
        "Оно",
        "Мы",
        "Вы",
        "Они"
    ],
    genders: [
        "Мужской",
        "Женская",
        "Средное",
        "Множественное число"
    ],
    sectionTypes: {
        Sentence: 'Sentence',
        Adjective: 'Adjective',
        Verb: 'Verb'
    }
}

const SettingsContext = createContext(defaultValue);

export const SettingsProvider = ({ children }) => {

    return (
        <SettingsContext.Provider value={defaultValue}>
            {children}
        </SettingsContext.Provider>
    )
}

export const useSettingsContext = () => {
    const context = useContext(SettingsContext);
    if (context === undefined) {
        throw new Error("useSettingsContext must be used within <SettingsProvider>");
    }
    return context;
}