import React,{Component} from "react";
import {Button,ButtonGroup} from 'reactstrap';

class ReactStrapButtonGroup extends Component {

    constructor(props) {
        super(props);
        this.state = {number : 10};
    }

    move = (type,e) => {
        if (type === 'left') {
            this.setState({number:this.state.number - 1})
        } else if (type === 'right') {
            this.setState({number :this.state.number + 1})
        }
    }

    render() {
        return (
            <div style = {{padding:"0px"}}>
                <ButtonGroup style={{padding : "0px"}}>
                    <Button onClick = {e => this.move("left")}>left</Button>
                    <Button onClick = {e => this.move("middle")}>middle</Button>
                    <Button onClick = {e => this.move("right")}>right</Button>
                </ButtonGroup>
                <br/>
                {this.state.number}
            </div>
        )
    }

}

export default ReactStrapButtonGroup;