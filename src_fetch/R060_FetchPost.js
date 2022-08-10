import React,{Component} from "react";

class FetchPost extends Component {

    componentDidMount = async () => {
        const response = await fetch('http://data.jsontest.com',{
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : {
                a : "react",
                b : 200
            }
        })
    }

    render() {
        return (
            <h1>FetchPost</h1>
        )
    }

}

export default FetchPost;