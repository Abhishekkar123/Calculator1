import React, { useState } from "react";

import UpdatedComponent from "./Hoc";

function P1(props){
    // const [money,setMoney]=useState(10);
    // const abc=()=>{
    //     setMoney(money*2);

    // }
    console.log("p1 ",props)
    return(
        <>
        <div>
            <h1>X is offering {props.money}</h1>
            <button onClick={props.abc}>Increase money</button>
        </div>
        </>
    )
}
export default UpdatedComponent(P1);