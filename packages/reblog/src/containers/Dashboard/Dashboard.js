import React, { useState } from 'react';

import { Button, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import FAIcon from 'components/Icon/FAIcon';
import { ChatBox } from '@mana/base';

import  TodoList from 'containers/Todo/TodoList';

export const Dashboard = (props) => {
    const [isDrawerOpening, setIsDrawerOpening] = useState(false);

    return (
        <>
            <nav style={{ width: '100%', backgroundColor: '#efefef'}}>
                <Button onClick={() => setIsDrawerOpening(!isDrawerOpening)}>Menu</Button>
            </nav>
            
            <Drawer anchor={'left'} open={isDrawerOpening} onClose={() => setIsDrawerOpening(!isDrawerOpening)}>
                <List>
                    {/* {['Login', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon><FAIcon type="solid" icon="home" /></ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                    ))} */}
                    <ListItem button key={'logout'}>
                        <ListItemIcon><FAIcon type="solid" icon="sign-out-alt"/></ListItemIcon>
                        <ListItemText primary={'Logout'} />
                    </ListItem>
                </List>
            </Drawer>

            <div>
                <center>
                    <h2>Dashboard</h2>
                    
                </center>
                <TodoList />
                <div style={{
                    float: 'right',
                    width: '200px',
                    background: 'cyan',
                }}>
                    <ChatBox />
                </div>
            </div>
        </>
    )
}

export default Dashboard;