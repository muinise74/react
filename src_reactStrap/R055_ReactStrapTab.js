import React,{Component} from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';

class ReactStrapTab extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tabState : 'React'
        }
    }

    toggle = (tabnum) => {
        if(this.state.tabState !== tabnum) this.setState({tabState:tabnum})
    }

    render() {
        return(
            <>
                <Nav tabs>
                    <NavItem>
                        <NavLink onClick = {() => {this.toggle('React');}}>First Tab</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink onClick = {() => {this.toggle('200');}}>Second Tab</NavLink>                
                    </NavItem>
                </Nav>
                <TabContent activeTab = {this.state.tabState}>
                    <TabPane tabId = 'React'><h3>React</h3></TabPane>
                    <TabPane tabId = '200'><h3>200</h3></TabPane>
                </TabContent>
            </>
        )
    }

}

export default ReactStrapTab;