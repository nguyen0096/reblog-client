import React from 'react';

import { GlowButton } from './GlowButton';

export default {
    title: 'Input/Button/GlowButton',
    component: GlowButton,
};

export const Default = (props: Object) => {
    return (
        <GlowButton {...props} label="Submit"/>
    );
}