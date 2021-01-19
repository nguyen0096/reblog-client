import './app.scss';

import React, { useState } from 'react';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Button, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { inject, observer } from 'mobx-react';

import { ExampleComponent } from '@mana/base';

import AppContainer from 'components/AppContainer';
import FAIcon from 'components/Icon/FAIcon';
import PrivateRoute from 'containers/Route/PrivateRoute';
import Dashboard from 'containers/Dashboard/Dashboard';
import Login from 'containers/Login/Login';
import PublicRoute from '../Route/PublicRoute';

const App = (props) => {
    const [isDrawerOpening, setIsDrawerOpening] = useState(false);
    return (
        <AppContainer>
            <nav style={{ width: '100%', backgroundColor: '#efefef'}}>
                <Button onClick={() => setIsDrawerOpening(!isDrawerOpening)}>Menu</Button>
                <ExampleComponent text="Monorepo runs well!"/>
            </nav>
            
            <Drawer anchor={'left'} open={isDrawerOpening} onClose={() => setIsDrawerOpening(!isDrawerOpening)}>
                <List>
                    {['Login', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon><FAIcon type="solid" icon="home" /></ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                    ))}
                </List>
            </Drawer>

            <Router>
                <Switch>
                    <PublicRoute 
                        restricted
                        path="/login"
                        component={Login}
                    />

                    <PublicRoute exact path="/" redirectPath="/dashboard" />
                    
                    <PrivateRoute
                        path="/dashboard"
                        component={Dashboard}
                    />     
                </Switch>
            </Router>
        </AppContainer>
    );
};

export default inject('appStore')(observer(App));
