import React,{Component} from "react";
import { ButtonDropdown,DropdownToggle,DropdownMenu,DropdownItem } from "reactstrap";

class ButtonDropDown extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dropdownOpen : false
        }
    }

    toggle = (e) => {
        this.setState({dropdownOpen : !this.state.dropdownOpen})
    }

    render() {
        return (
            <ButtonDropdown style = {{padding:"0px"}} isOpen = {this.state.dropdownOpen} toggle = {this.toggle}>
                <DropdownToggle caret> DropDown Button</DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem diabled>Disalble Button</DropdownItem>
                    <a href = "http://example.com/">
                        <DropdownItem>example 웹 사이트로 이동</DropdownItem>
                    </a>
                </DropdownMenu>
            </ButtonDropdown>
        )       
    }

}

export default ButtonDropDown