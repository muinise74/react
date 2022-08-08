import React, {Component} from 'react'

class R009_Es6 extends Component {

    constructor(props){
        super(props);
        this.state = {};
    }
    
    componentDidMount() {
        let jsString1 = 'JavaScript'
        let jsString2 = '입니다.\n다음 줄입니다.'
        console.log(jsString1+"문자열"+jsString2);

        let es6String1 = 'Es6'
        let es6String2 = '입니다'
        // ES6 에서는 개행문자 필요 없음
        console.log(`${es6String1} 문자열${es6String2}!!
____다음 줄 입니다.`);

        let longString = "ES6에 추가된 String 함수 들입니다.";
        console.log("startsWith : "+longString.startsWith("ES6에 추가"));
        console.log("endsWith : "+longString.endsWith("함수들입니다."));
        console.log("includes : "+longString.includes("추가된 String"));
    }

    render() {
        return(
            <h2>[This is ES6 stirng.]</h2>
        )
    }

}

export default R009_Es6;