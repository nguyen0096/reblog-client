import React from 'react';

import { FAIcon, IconTypes } from './FAIcon';

export default {
    title: 'Icon/FAIcon',
    component: FAIcon,
};

export const Default = (props: Object) => {
    return <FAIcon {...props} type={IconTypes.SOLID} icon="home" />;
};
