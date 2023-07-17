import React,{useState} from "react";


function UpdatedComponent(OriginalComponent){
   function NewComponent(){
    const [money,setMoney]=useState(10);
    const abc=()=>{
        setMoney(money*2);

    };
    return <OriginalComponent abc={abc} money={money}/>
   }
   return NewComponent;
}
export default UpdatedComponent;
