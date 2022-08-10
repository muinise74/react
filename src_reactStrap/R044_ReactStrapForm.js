import React,{Component} from "react";
import { Form, Label, Input, Row, Col, FormGroup } from "reactstrap";

class ReactStrapForm extends Component {
    render() {
        return (
            <Form style = {{padding : "0px"}}>
                <Label for = "exampleGender">Gender</Label>
                <Input type ='select' bsSize = 'sm'>
                    <option>no select</option>
                    <option>male</option>
                    <option>female</option>
                </Input>
                <Row Form>
                    <Col md = {6}>
                        <FormGroup>
                            <Label for = 'exampleAddress'>address</Label>
                            <Input type = 'text' name = 'address' id = 'address'/>
                        </FormGroup>
                    </Col>
                    <Col md = {4}>
                        <FormGroup>
                            <Label for = 'exampleMobile'>mobile</Label>
                            <Input type = 'text' name = 'mobile' id ='mobile'/>
                        </FormGroup>
                    </Col>
                    <Col md = {2}>
                        <FormGroup>
                            <Label for =  "exampleAge">age</Label>
                            <Input type = 'int' name = 'age' id = 'age'/>
                        </FormGroup>
                    </Col>
                </Row>
            </Form>
        )
    }
}

export default ReactStrapForm;