import React,{Component} from "react";

class PropsDefault extends Component {

    render() {
        let {reactString, reactNumber} = this.props
        return (
            <div style={{padding:"0px"}}>
                {reactString}{reactNumber}
            </div>
        )
    }

}

PropsDefault.defaultProps = {
    reactString : "리액트",
    reactNumber : 400
}

export default PropsDefault;