import React, { useState } from 'react';

import { SideMenu } from './SideMenu';

export default {
    title: 'Navigation/SideMenu',
    component: SideMenu,
};

export const Default = () => {
    return <SideMenu>Button</SideMenu>;
};

export const InABox = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div
            style={{
                backgroundColor: 'yellow',
                border: '1px solid black',
                height: '300px',
            }}
        >
            <SideMenu open={isOpen}>Button</SideMenu>
            This content should be visible
            <input
                type="button"
                style={{
                    float: 'right',
                }}
                onClick={() => {
                    setIsOpen(!isOpen);
                }}
            />
        </div>
    );
};
