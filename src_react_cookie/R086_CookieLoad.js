import React,{ Component } from 'react';
import cookie from 'react-cookies';

class CookieLoad extends Component {

    componentDidMount() {
        const expires = new Date()
        expires.setMinutes(expires.getMinutes() + 60)
        cookie.save("userid",'react200',{
            path : "/",
            expires,
            // secure : true,
            // httpOnly : true
        });
        setTimeout(function() {
            alert(cookie.load('userid'));
        },1000);
    }

    render() {
        return (
            <>
                <h3>
                    react-cookies load : {cookie.load('userid')}
                </h3>
            </>
        )
    }

}

export default CookieLoad;