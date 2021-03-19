import './Container.scss';

import * as React from 'react';

interface Props {
    children?: any;
    width?: string;
    height?: string;
}

// A div toP
export const Container = (props: Props) => {
    const styleObj = {};
    if (props.width) Object.assign(styleObj, { width: props.width });
    if (props.height) Object.assign(styleObj, { height: props.height });

    return (
        <div className="container" style={styleObj}>
            {props.children}
        </div>
    );
};
