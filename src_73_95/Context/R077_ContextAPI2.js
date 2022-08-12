import React from 'react';
import Children from './ContextChildren3';

const {Provider, Consumer} = React.createContext();
export {Consumer};

class ContextAPI2 extends React.Component {

    constructor(props) {
        super(props);
        this.setStateFunc = this.setStateFunc.bind(this)
    }

    setStateFunc(value) {
        this.setState({name : value});
    }

    render() {
        const content = {
            ...this.state,
            setStateFunc : this.setStateFunc
        }

        return (
            <Provider value = {content}>
                <Children />
            </Provider>
        )
    }

}

export default ContextAPI2;