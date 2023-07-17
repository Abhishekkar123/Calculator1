import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function Weather() {
  const [data,setData]=useState("")
    const url="https://randomuser.me/api";
    const abc=async ()=>{
        console.log("hey we are using the api for random user")
        let x= await axios.get(url).then((res)=>{
          setData(res.data);
          console.log(res.data);
        }).catch((err)=>{
          console.log("err",err)
        })
    }

   useEffect(()=>{
    abc();
   },[])
  return (
    <>
    <button onClick={abc}>Click ME</button>

   <div>
   {data && <div>{data.results[0].email}</div>}
   </div>
    </>
  )
}
