import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class reactRouter extends Component {
    
    render() {
        return (
            <>
                <h1>path = '/'</h1>
                <h3>R089_ReactRouter</h3>
                <h3>R090_ReactRouterLink</h3>
                <Link to = {'/reactRouter2'}>reactRouter2</Link>
            </>
        )
    }

}

export default reactRouter;