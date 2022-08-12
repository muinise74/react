import React from 'react'
import withHocComponent from './withHocComponent';

class ReactHoc extends React.Component {
    render() {
        console.log("2. HocComponent render");
        return (
            <h2>props.name {this.props.name}</h2>
        )
    }
}

export default withHocComponent(ReactHoc,'ReactHoc');