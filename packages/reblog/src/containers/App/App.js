import './app.scss';

import React from 'react';

import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import PrivateRoute from 'containers/Route/PrivateRoute';
import Dashboard from 'containers/Dashboard/Dashboard';
import Login from 'containers/Auth/Login';
import PublicRoute from '../Route/PublicRoute';

import { Container } from '@mana/base';
import { NotFoundPage } from 'components/NotFoundPage/NotFoundPage';

const App = (props) => {
    const authStore = props.appStore?.authStore || {};

    return (
        <Container>
                <Router>
                    <Switch>
                        <PublicRoute
                            path="/login"
                            component={Login}
                            restrictCondition={authStore.isLoggedIn}
                            redirectPath={'/dashboard'}
                        />
                        
                        <PrivateRoute
                            path="/dashboard"
                            component={Dashboard}
                        />     

                        {/* Fallback path */}
                        <PublicRoute
                            path="/"
                            component={NotFoundPage}
                        />
                    </Switch>
                </Router>
        </Container>
    );
};

export default inject('appStore')(observer(App));
