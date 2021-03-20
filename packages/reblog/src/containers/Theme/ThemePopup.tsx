import React, {
    RefObject, useContext,
} from 'react';

import {
    MenuItem, MenuList, Popover,
} from '@material-ui/core';
import { ThemeContext } from './ThemeProvider';

interface ThemePopupProps {
    anchorRef: RefObject<HTMLElement>,
    isOpen: boolean;
    onClose: Function;
}

export const ThemePopup = (props: ThemePopupProps) => {
    const { themeList, changeTheme } = useContext(ThemeContext);

    return (
        <div className="theme_changer">
            <Popover
                open={props.isOpen}
                anchorEl={props.anchorRef}
                // anchorReference="anchorPosition"
                // anchorPosition={{
                //     left: 200,
                //     top: 200,
                // }}
                onClose={() => props.onClose()}
            >
                <MenuList>
                    {Object.keys(themeList).map((key) => {
                        return (
                            <MenuItem key={themeList[key].id}>
                                {themeList[key].name}
                            </MenuItem>
                        );
                    })}
                </MenuList>
            </Popover>
        </div>
    );
};

export default ThemePopup;
