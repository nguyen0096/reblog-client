import React, { useContext, useRef, useState } from 'react';

import {
    Button, MenuItem, MenuList, Popper,
} from '@material-ui/core';
import { ThemeContext } from './ThemeProvider';

export const ThemeChanger = () => {
    const { themes, changeTheme } = useContext(ThemeContext);
    const anchorRef = useRef();
    const [open, setOpen] = useState<boolean>(false);

    const handleToggle = () => {
        setOpen(!open);
    };

    return (
        <div className="theme_changer">
            <Button
                ref={anchorRef}
            >
                Change theme
            </Button>
            <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                style={{
                    backgroundColor: 'cyan',
                }}
            >
                <MenuList>
                    {Object.keys(themes).map((key) => {
                        return <MenuItem key={themes[key].id}>{themes[key].name}</MenuItem>;
                    })}
                </MenuList>
            </Popper>
        </div>
    );
};

export default ThemeChanger;
