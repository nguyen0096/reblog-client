import './SideMenu.scss';

import React, { memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {
    SwipeableDrawer, List, ListItem, ListItemIcon, ListItemText,
} from '@material-ui/core';
import { createStructuredSelector } from 'reselect';

import useInjectReducer from 'utils/injectReducer';
import reducer from './reducer';
import { makeSelectIsOpen } from './selectors';
import { toggle } from './actions';

export const key = 'side_menu';

interface SideMenuProps {
    toggle: Function,
    open: boolean,
}

export const SideMenu = (props: SideMenuProps) => {
    useInjectReducer({ key, reducer });

    const open: boolean = (typeof props.open === 'boolean') ? props.open : false;

    return (
        <div className="side_menu">
            <SwipeableDrawer
                anchor="left"
                open={open}
                onOpen={() => props.toggle && props.toggle()}
                onClose={() => props.toggle && props.toggle()}
            >
                <List>
                    <ListItem button>
                        <ListItemIcon>icon</ListItemIcon>
                        <ListItemText primary="Logout" />
                    </ListItem>
                </List>
            </SwipeableDrawer>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    open: makeSelectIsOpen(),
});

const mapDispatchToProps = (dispatch: Function) => {
    return {
        toggle: (value?: boolean) => dispatch(toggle(value)),
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
