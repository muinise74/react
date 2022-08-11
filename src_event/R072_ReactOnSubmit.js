import React,{Component} from "react";

class onSubmit extends Component {

    Submit = (e) => {
        let inputValue = document.getElementById('inputId').value;
        console.log("inputValue : "+inputValue);
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.Submit}>
                <input type = 'text' name = 'inputName' id = 'inputId'/>
                <input type = 'submit' value = 'Submit'/>
            </form>
        )
    }

}

export default onSubmit;