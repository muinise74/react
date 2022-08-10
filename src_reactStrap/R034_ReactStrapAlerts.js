import React,{Component} from "react";
import {Alert, UncontrolledAlert} from 'reactstrap';

class ReactStrapAlert extends Component {

    render() {
        return (
            <div style ={{padding:"0px"}}>
                <Alert color = 'light'>
                    Simple Alert [color : light]
                </Alert>
                <UncontrolledAlert color = 'warning'>
                    UncontrolledAlert [color : warning]
                </UncontrolledAlert>
            </div>
        )
    }

}

export default ReactStrapAlert;