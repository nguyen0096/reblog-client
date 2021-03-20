import React, { useState, createContext } from 'react';

import { THEMES } from './constants';

interface ThemeContextValues {
    themes: Array<any>,
    currentTheme: any,
    changeTheme: Function,
}

export const ThemeContext = createContext<ThemeContextValues>({
    themes: THEMES,
    currentTheme: THEMES[0],
    changeTheme: () => { },
});

export const ThemeProvider = (props: { children: React.ReactNode }) => {
    const themes = THEMES;
    const [currentTheme, setCurrentTheme] = useState<Object>(THEMES[0]);

    const changeTheme = (name: string) => {
        const newTheme = THEMES.find(item => item['name'] === name);
        newTheme && setCurrentTheme(newTheme);
    };

    return (
        <ThemeContext.Provider value={{ themes, currentTheme, changeTheme }}>
            {props.children}
        </ThemeContext.Provider>
    );
};
