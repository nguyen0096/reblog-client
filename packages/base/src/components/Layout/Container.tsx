import './Container.scss';

import * as React from 'react';

export interface Props {
    className?: string;
    children?: any;
    [key:string]: unknown;
}

export const Container = (props: Props) => {
    const { className, ...others } = props;

    return (
        <div
            {...others}
            className={`container${className? ' ' + className : ''}`}
        >
            {props.children}
        </div>
    );
};
