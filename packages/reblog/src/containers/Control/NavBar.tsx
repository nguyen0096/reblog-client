import './NavBar.scss';

import React, { memo, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import {
    AppBar,
    Button, IconButton, Toolbar, Typography,
} from '@material-ui/core';
import { createStructuredSelector } from 'reselect';
import { FAIcon, IconTypes } from 'components/Icon/FAIcon';

import useInjectReducer from 'utils/injectReducer';
import { ThemePopup } from 'containers/Theme/ThemePopup';

import reducer from './reducer';
import { toggle } from './actions';

export const key = 'nav_bar';

interface NavBarProps {
    toggle: Function,
}

const classes = {
    menuButton: 'nav_bar-button',
    title: 'nav_bar-title',
};

export const SideMenu = (props: NavBarProps) => {
    useInjectReducer({ key, reducer });

    const [openThemePopup, setOpenThemePopup] = useState(false);
    const themeRef = useRef();
    const handleClickThemeBtn = () => {
        setOpenThemePopup(!openThemePopup);
    };

    return (
        <div
            className="nav_bar"
            ref={themeRef}
        >
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        onClick={() => props.toggle && props.toggle()} edge="start"
                        className={classes.menuButton} color="inherit"
                        aria-label="menu"
                    >
                        <FAIcon type={IconTypes.REGULAR} icon="bars" />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Reblog
                    </Typography>
                    <Button color="inherit">Login</Button>
                    <IconButton
                        onClick={handleClickThemeBtn}
                        color="inherit" size="small"
                    >
                        <FAIcon type={IconTypes.REGULAR} icon="palette" />
                    </IconButton>
                    <ThemePopup
                        anchorRef={themeRef} isOpen={openThemePopup}
                        onClose={() => setOpenThemePopup(false)}
                    />
                </Toolbar>
            </AppBar>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
});

const mapDispatchToProps = (dispatch: Function) => {
    return {
        toggle: () => dispatch(toggle()),
    };
};

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
);

export default compose(
    withConnect,
    memo,
)(SideMenu);
