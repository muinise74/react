import React,{Component} from "react";

class BtnOnClick extends Component {

    BtnClick = (param) => {
        if (typeof param != 'string') param = 'Click a'
        console.log('param : '+param);
    }

    render() {
        return (
            <>
                <button onClick = {e => this.BtnClick("Click Button")}>
                    Click Button
                </button>
                <div onClick = {e => this.BtnClick("Click Div")}>
                    CLick Div
                </div>
                <a onClick = {e => this.BtnClick()}>
                    Click a
                </a>
            </>
        )
    }

}

export default BtnOnClick;