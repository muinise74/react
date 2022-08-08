import React,{Component} from 'react';

class R005_LifeCycleEx extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        console.log("1. Constructor Call");
    }

    render() {
        console.log("3. render Call");
        return (
            <h2>[This is constructor function.]</h2>
        )   
    }
}

export default R005_LifeCycleEx;