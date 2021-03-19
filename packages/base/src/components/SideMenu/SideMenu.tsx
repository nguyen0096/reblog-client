import './SideMenu.scss';

import React, { useCallback, useEffect } from 'react';

interface Props {
    children?: any;
    open?: boolean;
}
export const SideMenu = (props: Props) => {
    useEffect(() => {
        window.addEventListener('resize', handleResizeWindow);
        return () => {
            window.removeEventListener('resize', handleResizeWindow);
        };
    }, []);

    const handleResizeWindow = useCallback(() => {
        console.log('nguyen');
    }, []);

    return (
        <div className="side_menu-container">
            <div
                className="side_menu"
                style={{
                    marginLeft: props.open ? '-200px' : '0px',
                }}
            >
                <div className="side_menu-item">Item 1</div>
                <div className="side_menu-item">Item 2</div>
            </div>
        </div>
    );
};
