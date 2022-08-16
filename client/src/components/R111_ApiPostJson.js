import React,{Component} from "react";
const axios = require('axios');

class APIPostJson extends Component {

    componentDidMount() {
        axios.post("/users3",{}).then(response => {
            console.log("response.data.msg : "+response.data.msg);
        })
    }
    
    render() {
        return (
            <>
                <h1>
                    Call Node API Post
                </h1>
            </>
        )
    }
}

export default APIPostJson;