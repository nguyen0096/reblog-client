import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeTypes } from './constants';

export function FAIcon(props) {
    let classNames = [];
    classNames.push(FontAwesomeTypes[props.type || 'regular']);
    classNames.push(props.type);
    return (
        <i
            className={classNames.join(' ')}
            aria-hidden="true"
        />
    )
}

FAIcon.propTypes = {
    type: PropTypes.oneOf(Object.keys(FontAwesomeTypes)),
    icon: PropTypes.string.isRequired,
}

export default FAIcon;