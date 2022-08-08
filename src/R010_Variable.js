import react,{Component} from 'react';

class R010_Variable extends Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount() {
        var varName = 'react';
        console.log('varName1 : ' +varName);
        var varName = '200'
        console.log("varName2 : "+varName);

        let letName = 'react'
        console.log('letName1 : '+ letName);
        // let letName = '200';
        // Parsing error : Identifier 'letName' has already been declared
        letName = 'react200'
        console.log("letName2 : "+letName);

        const constName = 'react';
        console.log('constName1 : '+constName);
        // const constName = '200';
        // Parsing error : Idenfier 'constName' has already been dec
        // constNane = 'react200';
        // Uncaught TypeError : Assignlment to constant variable
    }

    render() {
        return(
            <h2>[This is Variable.]</h2>
        )
    }
}

export default R010_Variable;