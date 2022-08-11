import React,{Component} from "react";

class onMouseOver extends Component {

    mouseOver = (tag) => {
        console.log('Tag : '+tag);
    }

    render() {
        return (
            <>
                <div onMouseOver = {e => this.mouseOver("div")}>
                    <h3>Div onMouseOver</h3>
                </div>
                <input onMouseOver = {e => this.mouseOver("input")}/>
                <select onMouseOver = {e => this.mouseOver("select")}>
                    <option>"react"</option>
                    <option>200</option>
                </select>
            </>
        )
    }

}

export default onMouseOver;