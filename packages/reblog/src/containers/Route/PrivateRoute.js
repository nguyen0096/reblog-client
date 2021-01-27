import React from 'react';
import { inject, observer } from 'mobx-react';
import { Redirect, Route } from 'react-router-dom';

export function PrivateRoute(props) {
    const {component: Component, appStore, ...rest} = props;
    const authStore = appStore?.authStore || {};

    return (
        <Route {...rest} render={(route) => (
            authStore.isLoggedIn
            ?
                <Component {...route} />
            : 
            <Redirect
                to={{   
                pathname: "/login",
                state: { from: route.location }
                }}
            />
        )} />
    )
}

export default inject('appStore')(observer(PrivateRoute));
