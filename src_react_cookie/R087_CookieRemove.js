import React,{Component} from "react";
import cookie from 'react-cookies';
import { render } from "react-dom";

class CookieRemove extends Component {

    componentDidMount() {

        const expires = new Date()
        expires.setMinutes(expires.getMinutes() + 60)
        cookie.save("userid",'react200',{
            path : '/',
            expires,
            // secure : true,
            // httpOnly : true
        })

        setTimeout(() => {
            cookie.remove('userid',{ path : "/"})
        }, 10000);

        setTimeout(function() {
            alert(cookie.load('userid'))
        },12000)

    }

    render() {
        return (
            <>
                <h3>
                    react-cookies Remove : {cookie.load("userid")}
                </h3>
            </>
        )
    }

}

export default CookieRemove;