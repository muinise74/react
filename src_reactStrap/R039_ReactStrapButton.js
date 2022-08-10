import React,{Component} from "react";
import {Button} from 'reactstrap';

class ReactStrapButton extends Component {

    render() {
        return (
            <div style={{padding : "0px"}}>
                <Button color = "primary">blue</Button>        
                <Button color = "info">teal</Button>
                <Button color = "success">green</Button>
                <Button color = "warning">yellow</Button>
                <Button color = "danger">red</Button>
                <Button color = "dark">black</Button>
                <Button color = "secondary">gray</Button>
                <Button color = "light">white</Button>
            </div>        
        )
    }

}

export default ReactStrapButton;