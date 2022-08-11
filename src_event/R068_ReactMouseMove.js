import React,{Component} from "react";

class ReactMouseMove extends Component {

    MouseMove = (tag) => {
        console.log(`Tag : ${tag}`);
    }

    render () {
        return(
            <>
                <div onMouseMove={e => this.MouseMove("div")}>
                    <h3>Div onMouseMove</h3>
                </div>
                <input type = 'text' onMouseMove = {e => this.MouseMove("input")}/>
                <select onMouseMove = {e => this.MouseMove("select")}>
                    <option>'react'</option>
                    <option>200</option>
                </select>
            </>
        )
    }
}

export default ReactMouseMove;