import React,{Component} from 'react';

class R073_ReactRef extends Component {

    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }

    RefFocus = (e) => {
        this.inputRef.current.focus()
    }

    JSFocus() {
        document.getElementById('id').focus();
    }

    render() {
        return (
            <>
                <input id = 'id' type = 'text' ref = {this.inputRef} />
                <input type= 'button' value = 'Ref Focus' onClick = {this.RefFocus} />
                <input type = 'button' value = 'Js Focus' onClick = {this.JSFocus} />
            </>
        )
    }

}

export default R073_ReactRef;