import React,{Component} from "react";
import axios from 'axios';

class AxiosPost extends Component {

    componentDidMount() {
        axios.post("http://date.jsontest.com",{a : 'react', b: 200}).then(
            (result) => {
                console.log(result);
                console.log(result.data);
                console.log(result.data.date);
                alert(result.data.date)
            }
        )
    }

    render () {
        return (
            <h1>AxiosPost</h1>
        )
    }

}

export default AxiosPost;