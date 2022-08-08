import React, {Component} from 'react';

class PropsBoolean extends Component{

    render() {
        let {TrueFalse} = this.props
        return (
            <div style={{padding:"0px"}}>
                {TrueFalse? '2. ':'1. '}
                {TrueFalse.toString()}
            </div>
        )
    }

}

export default PropsBoolean;