import React,{Component} from "react";
import dtype from 'prop-types'

class datatype extends Component {

    render() {
        let {String, Number, Boolean, Array, ObjectJson, Function} = this.props
        return (
            <div style={{padding:"0px"}}>
                <p>StringProps : {String}</p>
                <p>NumberProps : {Number}</p>
                <p>BooleanProps : {Boolean.toString()}</p>
                <p>ArrayProps : {Array.toString()}</p>
                <p>Object_JsonProps : {JSON.stringify(ObjectJson)}</p>
                <p>FunctionProps: {Function}</p>
            </div>
        )

    }

}

datatype.propTypes = {
    String : dtype.string,
    Number : dtype.number,
    Boolean : dtype.bool,
    Array : dtype.array,
    ObjectJson : dtype.object,
    Function : dtype.func
}

export default datatype;