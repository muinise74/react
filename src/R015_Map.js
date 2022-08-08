import React,{Component} from "react";

class Map extends Component {

    componentDidMount() {
        let mapArr = [3,2,8,8]
        let mapNewArr = mapArr.map(x => x)
        console.log('1. mapNewArr : ['+mapNewArr+"]")

        let mapMultiArr = mapArr.map(x => x*2)
        console.log('2. mapMultiArr : ['+mapMultiArr+']');

        var objArr = [{key:'react',value:'200'},{key:'리액트',value:'TwoHundred'}];
        let mapObjArr = objArr.map((obj,idx) => {
            console.log((idx+3)+". obj : "+JSON.stringify(obj))
            var Obj = {};
            Obj[obj.key] = obj.value;
            return Obj;
        })
        console.log('5. mapObjArr : ['+mapObjArr+']');
    }

    render() {
        return (
            <h2>[This is map.]</h2>
        )
    }

}

export default Map;