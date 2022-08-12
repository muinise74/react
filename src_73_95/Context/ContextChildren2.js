import React from "react";
import {Consumer} from "./R076_ContextAPI";

class ContextChildren2 extends React.Component {
    render () {
        return (
            <Consumer>
                {contextValue => <h3>{`contextValue : ${contextValue}`}</h3>}
            </Consumer>
        )
    }
}

export default ContextChildren2;