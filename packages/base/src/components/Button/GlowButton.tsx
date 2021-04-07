import './GlowButton.scss';

import * as React from 'react';

export interface Props {
    label?: string;
    height?: string;
    width?: string;
}

    export const GlowButton = (props: Props) => {
    return (
        <button
            className="btn-glow"
            style={{
                height: props.height,
                width: props.width,
            }}
        >
            <span />
            <span />
            <span />
            <span />
            {props.label}
        </button>
    );
};
