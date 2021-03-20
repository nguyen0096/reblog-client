import React from 'react';

export enum IconTypes {
    SOLID = 'fas',
    LIGHT = 'fal',
    DUOTONE = 'fad',
    REGULAR = 'far',
}

interface FAIconProps {
    type: IconTypes;
    icon: string;
}

export function FAIcon(props: FAIconProps) {
    const classes = [];

    classes.push(props.type || IconTypes.REGULAR);
    classes.push(`fa-${props.icon}`);
    return <i className={classes.join(' ')} aria-hidden="true" />;
}

export default FAIcon;
