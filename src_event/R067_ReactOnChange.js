import React,{Component} from "react";

class onChange extends Component {

    change = (e) => {
        let val = e.target.value;
        console.log('param : '+val);
    }

    render() {
        return(
            <>
                <input type = "text" onChange = {this.change}/>
                <select onChange = {this.change}>
                    <option>react</option>
                    <option>200</option>
                </select>
            </>
        )
    }

}

export default onChange;