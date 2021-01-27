import './Container.scss';

import * as React from 'react';

interface Props {
  children?: any,
  width?: string,
  height?: string,
}

export const Container = (props: Props) => {

    // Compute styling object
    let styleObj = {};
    if (props.width) Object.assign(styleObj, { width: props.width });
    if (props.height) Object.assign(styleObj, { height: props.height });

    return (
        <div
            className="container"
            style={styleObj}
        >
            {props.children}
        </div>
    );
}
