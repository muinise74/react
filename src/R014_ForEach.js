import React, {Component} from 'react';

class ForEach extends Component {

    componentDidMount() {
        let forArr = [3,2,8,8];
        let forNewArr = [];

        for (let i = 0; i < forArr.length ; i++){
            forNewArr.push(forArr[i]);
        }

        console.log("1. forNewArr : ["+forNewArr+"]");

        let forEachArr = [3,2,8,8];
        let forEachNewArr = [];
        forEachArr.forEach((result) => {
            forEachNewArr.push(result);
        })

        console.log("2. forEachNewArr : ["+forEachNewArr+"]");
    }

    render() {
        return (
            <h2>[This is ForEach]</h2>
        )
    }

}

export default ForEach;