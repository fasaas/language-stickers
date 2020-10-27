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
    sections: [
        'Sentence',
        'Adjective',
        'Verb'
    ]
}

const SettingsContext = createContext();

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