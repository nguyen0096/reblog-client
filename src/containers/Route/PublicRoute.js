import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

export function PublicRoute(props) {

    console.log("PublicRoute");
    const {component: Component, render, children, redirectPath, redirectPush, ...rest} = props;
    const defaultRender = render || function(route){
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
    // Default behaviors
    render: PropTypes.func,
    component: PropTypes.any,
    children: PropTypes.any,
    // Redirect
    redirectPath: PropTypes.string,
    redirectPush: PropTypes.bool,
}

export default PublicRoute;
