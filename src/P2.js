import React, { useState } from "react";

import UpdatedComponent from "./Hoc";
function P2({money,abc}){
    // const [money,setMoney]=useState(10);
    // const abc=()=>{
    //     setMoney(money*2);

    // }
    return(
        <>
        <div>
            <h1>Y is offering ${money}</h1>
            <button onClick={abc} > Increase money</button>
        </div>
        </>
    )
}
export default UpdatedComponent(P2);