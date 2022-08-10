import React, {Component} from 'react';
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';

class ReactStrapListGroup extends Component {

    render() {
        return (
            <>
                <listGroup>
                    <ListGroupItem color = 'danger' className = 'justify-content-between'>
                        Badge
                        <Badge pill>200</Badge>
                    </ListGroupItem>
                    <ListGroupItem disabled tag = 'a' href = "#">Disabled</ListGroupItem>
                    <ListGroupItem tag = 'a' href = "http://example.com">Link</ListGroupItem>
                    <ListGroupItem tag = 'button' action onClick={e => alert('button')}>Button</ListGroupItem>
                </listGroup>
            </>
        )
    }

}

export default ReactStrapListGroup;