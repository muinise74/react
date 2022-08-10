import React,{Component} from "react";

class CallbackFunc extends Component {

    componentDidMount() {
        this.logprint(1, function(return1) {
            console.log("return1 : " + return1);
            this.logprint(return1, function(return2) {
                console.log("return2 : " + return2);
            })
        }.bind(this))
    }

    logprint(param, callback) {
        console.log("logPrint param : "+param);
        param += param
        callback(param);
    }

    render() {
        return (
            <h1>Callback Function</h1>
        )
    }

}

export default CallbackFunc;