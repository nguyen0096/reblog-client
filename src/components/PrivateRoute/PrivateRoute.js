import React from 'react';
import { inject, observer } from 'mobx-react';
import { Redirect, Route } from 'react-router-dom';

console.log("teststs");

export function PrivateRoute(props) {

    const profile = props.appStore?.userStore?.profile;
    const {component: Component, ...rest} = props;
    console.log("test");
    return (
        <Route {...rest} render={props => (
            profile && Object.keys(profile) > 0 ?
                <Component {...props} />
            : <Redirect to="/login" />
        )} />
    )
}

export default inject('appStore')(observer(PrivateRoute));
