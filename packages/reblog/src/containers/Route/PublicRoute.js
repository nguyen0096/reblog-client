import React from 'react';
import { inject, observer } from 'mobx-react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

export function PublicRoute(props) {
    const {
        restrictCondition, 
        redirectPath, 
        redirectPush, 
        ...rest
    } = props;
    
    // Use render to access to route props (match, location, history)
    return (
        <>
            {restrictCondition?
                <Redirect
                    push={redirectPush}
                    to={redirectPath || '/'}
                />
            :
            <Route {...rest} />
            }
        </>
    )
}

PublicRoute.propTypes = {
    restrictCondition: PropTypes.bool,
    redirectPath: PropTypes.string,
    redirectPush: PropTypes.bool,
}

export default PublicRoute;
