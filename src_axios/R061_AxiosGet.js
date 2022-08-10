import React,{Component} from "react";
import axios from 'axios';

class AxiosGet extends Component {

    componentDidMount() {
        axios.get('http://date.jsontest.com/').then(
            response => {
                console.log(response);
                console.log(response.data);
                console.log(response.data.date);
                alert(response.data.date)
            }
        )
    }

    render() {
        return (
            <h1>AxiosGet</h1>
        )
    }

}

export default AxiosGet;