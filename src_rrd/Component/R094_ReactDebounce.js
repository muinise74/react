import React,{ Component } from "react";
import { debounce } from "lodash";

class Debounce extends Component {

    debounceFunc = debounce(() => {
        console.log("Debounce API Call");
    }, 1000);

    render() {
        return (
            <>
                <h2>검색어 입력</h2>
                <input type = 'text' onChange={this.debounceFunc}/>
            </>
        )
    }

}

export default Debounce;