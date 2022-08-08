import React,{Component} from "react";
import dtype from 'prop-types';

class PropsObjVal extends Component {

    render() {
        let {ObjectJson} = this.props
        return (
            <div style = {{padding : "0px"}}>
                {JSON.stringify(ObjectJson)}
            </div>
        )
    }
}

PropsObjVal.propTypes = {
    ObjectJson:dtype.shape({
        react: dtype.string,
        twoHundred: dtype.number
    })
}

export default PropsObjVal;