import React,{Component} from "react";

class Props extends Component {

    render() {
        let props_val = this.props.props_val;
        props_val += ' from App.js';
        return(
            <div style={{padding:"0px"}}>{props_val}</div>
        )
    }

}

export default Props;