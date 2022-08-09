import React,{useState, useEffect} from "react";

function ReactHook(props) {
    const [contents, setContents] = useState('[This is react]')

    useEffect(() => {
        console.log('useEffect');
    });

    return(
        <div style ={{padding:"0px"}}>
            <h2>{contents}</h2>
            <button onClick = {() => setContents('[This is Hook]')}>버튼</button>
        </div>
    )
}

export default ReactHook;