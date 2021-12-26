import React from "react";

function Counter(props){

    const AddOne = ()=>{
        props.setCount( props.count+1 );

    }

    const SubOne = ()=>{
        props.setCount( props.count-1 );

    }

    const MulByTwo = ()=>{
        props.setCount( props.count*2 );

    }

    return (
        <div>
            <h1>Counter {props.count}</h1>
            <button onClick={AddOne}>add</button>
            <button onClick={SubOne}>sub</button>
            <button onClick={MulByTwo}>mul</button>
        </div>
       
    )
}

export default Counter;