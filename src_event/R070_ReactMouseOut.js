import React,{Component} from "react";

class onMouseOut extends Component {

    mouseOut = (tag) => {
        console.log('Tag : '+tag);
    }

    render() {
        return (
            <>
                <div onMouseOut = {e => this.mouseOut("div")}>
                    <h3>Div onMouseOver</h3>
                </div>
                <input onMouseOut = {e => this.mouseOut("input")}/>
                <select onMouseOut = {e => this.mouseOut("select")}>
                    <option>"react"</option>
                    <option>200</option>
                </select>
            </>
        )
    }

}

export default onMouseOut;