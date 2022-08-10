import React,{Component} from "react";
import { UncontrolledCollapse, Button, CardBody, Card } from "reactstrap";

class ReactStrapCollapse extends Component {

    render() {
        return (
            <div style={{padding : "0px"}}>
                <Button color = 'warning' id = 'toggle'>
                    펼치기/접기
                </Button>
                <UncontrolledCollapse toggler = "#toggle">
                    <Card>
                        <CardBody>
                            React 200
                        </CardBody>
                    </Card>
                </UncontrolledCollapse>
            </div>
        )
    }

}

export default ReactStrapCollapse;