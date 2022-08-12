import React from "react";
import { Consumer } from "./R077_ContextAPI2";

class ContextChildren3 extends React.Component {

    render() {
        return (
            <Consumer>
                {contextValue => 
                    <button onClick = {e => contextValue.setStateFunc("react200")}>
                        {contextValue.name}_button
                    </button>
                }
            </Consumer>
        )
    }

}

export default ContextChildren3;