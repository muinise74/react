import React,{Component} from "react";
import dtype from 'prop-types';

class PropsRequired extends Component{

    render() {
        let {reactString, reactNumber} = this.props
        console.log(reactString);
        return(
            <div style={{padding : "0px"}}>
                {reactString}{reactNumber}
            </div>
        )
    }
}

PropsRequired.propTypes = {
    reactString : dtype.isRequired,
}

export default PropsRequired;