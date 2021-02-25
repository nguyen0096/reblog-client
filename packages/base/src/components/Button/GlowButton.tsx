import './GlowButton.scss';

import * as React from 'react';
import PropTypes from 'prop-types';

interface Props {
    label?: string,
    height?: string,
    width?: string,
}

// A div to
export const GlowButton = (props : Props) => {
    return (
        <button
            className="btn-glow"
            style={{
                height: props.height,
                width: props.width,
            }}
        >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            {props.label}
        </button>
    );
}

GlowButton.propTypes = {
    label: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
}

GlowButton.defaultProps = {
    label: '<empty>',
    width: 'auto',
    height: 'auto',
}
