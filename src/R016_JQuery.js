import React,{Component} from "react";
import $ from 'jquery';

class JQuery extends Component{

    inputAlert = (e) => {
        var inputVal = $('#inputId').val();
        alert(inputVal);
    }

    render() {
        return(
            <div>
                <h2>[This is JQuery]</h2>
                <input id = 'inputId' name = 'inputName'/>
                <button id = 'buttonId' onClick={e => this.inputAlert(e)}JQuery> Button</button>
            </div>
        )
    }

}

export default JQuery;