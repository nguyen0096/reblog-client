import React from 'react';
import { inject, observer } from 'mobx-react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

export function PublicRoute(props) {

    // console.log("PublicRoute");
    const {
        appStore,
        component: Component, 
        render, 
        children, 
        redirectPath, 
        redirectPush, 
        restricted, 
        ...rest
    } = props;
    const profile = appStore?.userStore?.profile;

    const defaultRender = render || function(route){
        if (restricted && profile && Object.keys(profile).length > 0) {
            return <Redirect
                to={{
                    pathname: '/dashboard',
                    state: { from: route.location },
                }}
            />
        }

        if (redirectPath) {
            return <Redirect 
                push={redirectPush}
                to={{
                    pathname: redirectPath,
                    state: { from: route.location },
                }}
            />
        }

        if (render)
            return render(route);

        if (Component) {
            return <Component {...route}/>
        }

        return children;
    };

    return (
        <Route path="/" render={defaultRender} {...rest} />
    )
}

PublicRoute.propTypes = {
    // Children
    render: PropTypes.func,
    component: PropTypes.any,
    children: PropTypes.any,
    // Properties
    restricted: PropTypes.bool,
    // Redirect
    redirectPath: PropTypes.string,
    redirectPush: PropTypes.bool,
}

export default inject('appStore')(observer(PublicRoute));
