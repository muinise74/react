import React, { Component } from 'react';

class APIGetJson extends Component {

    componentDidMount = async () => {

        const res = await fetch('/user2');
        const body = await res.json();
        console.log("body.msg : " + body.msg);

    }

    render() {
        return (
            <>
                <h1>
                    Call Node API Get
                </h1>
            </>
        )
    }

}

export default APIGetJson;