import { createSelector } from 'reselect';
import { key } from './SideMenu';

const selectSideMenu = (state) => state[key];

const makeSelectIsOpen = () => createSelector(
    selectSideMenu,
    (sideMenu) => sideMenu?.isOpen,
);

export { makeSelectIsOpen };
