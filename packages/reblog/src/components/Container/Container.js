import './AppContainer.scss';

import React from 'react';
import PropTypes from 'prop-types';

export const Container = (props) => {
    let classNames = ['container'];
    props.className && classNames.concat(this.props.classNames);
    return (
        <div className={classNames.join(' ')}>
            {props.children}
        </div>
    );
};

Container.propTypes = {
    classNames: PropTypes.array,
};

export default Container;
