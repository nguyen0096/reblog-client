import React from 'react';

import { GlowButton } from './GlowButton';

export default {
    title: 'Input/Button/GlowButton',
    component: GlowButton,
};

export const Default = (args) => {
    return (
        <GlowButton {...args} label="Submit"/>
    );
}