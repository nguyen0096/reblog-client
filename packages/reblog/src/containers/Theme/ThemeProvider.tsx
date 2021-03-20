import React, { useState, createContext } from 'react';

import { THEMES as themeList } from './constants';

interface ThemeContextValues {
    themeList: Array<any>,
    currentTheme: any,
    changeTheme: Function,
}

export const ThemeContext = createContext<ThemeContextValues>({
    themeList,
    currentTheme: themeList[0],
    changeTheme: () => { },
});

export const ThemeProvider = (props: { children: React.ReactNode }) => {
    const [currentTheme, setCurrentTheme] = useState<Object>(themeList[0]);

    const changeTheme = (name: string) => {
        const newTheme = themeList.find((item) => item.name === name);
        newTheme && setCurrentTheme(newTheme);
    };

    return (
        <ThemeContext.Provider value={{ themeList, currentTheme, changeTheme }}>
            {props.children}
        </ThemeContext.Provider>
    );
};
