import './AppContainer.scss';

import React from 'react';
import PropTypes from 'prop-types';

export const AppContainer = (props) => {
    let classNames = ['container'];
    props.className && classNames.push(props.className);
    return (
        <div className={classNames.join(' ')}>
            {props.children}
        </div>
    );
};

AppContainer.propTypes = {
    className: PropTypes.string,
};

export default AppContainer;
