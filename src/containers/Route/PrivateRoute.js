import React from 'react';
import { inject, observer } from 'mobx-react';
import { Redirect, Route } from 'react-router-dom';

export function PrivateRoute(props) {
    
    // console.log("PrivateRoute");
    const {component: Component, appStore, ...rest} = props;
    const profile = appStore?.userStore?.profile;

    return (
        <Route {...rest} render={(route) => (
            profile && Object.keys(profile).length > 0 
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
