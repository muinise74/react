import React,{Component} from "react";
import { InputGroup, InputGroupText, Input, Button } from "reactstrap";

class ReactStrapInputGroup extends Component {
    // 책에는 InputGroupAddon 을 사용하라고 하지만 ReactStrap 9.0.0부터 사라짐
    // 그냥 쓰면 된다.
    render() {
        return(
            <>
            <InputGroup>
                <Input placeholder="userid"/>
                <InputGroupText>@reactmail.com</InputGroupText>
            </InputGroup>
            <InputGroup>
                <Button>Button</Button>
                <Input />
            </InputGroup>
            </>
        )
    }

}

export default ReactStrapInputGroup;