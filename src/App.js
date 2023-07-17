import React, { useReducer, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Digit from './Digit';
import OperationButton from './OperationButton';

export const ACTIONS={
  ADD_DIGIT:"add_digit",
  CHOOSE_OPERATION:'choose-operation',
  CLEAR:'clear',
  DELETE_DIGIT:"delete_digit",
  EVALUATE:"evaluate"
}
function reducer(state,{type,payload}){
  console.log(payload)
  switch(type){
   case(ACTIONS.ADD_DIGIT):
   if(state.overwrite){
    return{
      ...state,
      current:payload.digit,
      overwrite:false
    }
   }
   if(payload.digit==="0" && state.current==="0"){return state}
   if(payload.digit==="." && state.current.includes(".")){return state}
   return {
    ...state,
    current:`${state.current|| ""}${payload.digit}`
   }
   case(ACTIONS.CLEAR):
   return{}
   case(ACTIONS.CHOOSE_OPERATION):
   if(state.current==null &&state.previous==null){
    return state
   }
   if(state.current==null){
    return{
      ...state,operation:payload.operation,
      
    }
   }
   if(state.previous==null){
    return{
      ...state,operation:payload.operation,
      previous:state.current,
      current:null
    }
   }
   return{
...state,
previous:evaluate(state),
operation:payload.operation,
current:null
   }
case (ACTIONS.EVALUATE):
  if(state.operation==null ||state.current==null || state.previous==null){
    return state
  }
  return{
    ...state,
    operation:null,
    previous:null,
    current:evaluate(state)
  }
  case (ACTIONS.DELETE_DIGIT):
    if(state.overwrite){
      return {
        ...state,
        overwrite:false,
        current:null
      }
    }
    if(state.current===null)return state;
    if(state.current.length===1){
      return{...state,current:null}
    }
    return{
      ...state,
      current:state.current.slice(0,-1)
    }
  }

}
function evaluate({current,previous,operation}){
  const prev=parseFloat(previous);
  const curr=parseFloat(current);
  if(isNaN(prev) || isNaN(curr)){
    return "";
  }
  let compute="";
  switch(operation){
    case"+":
    compute=prev+curr
    break;
    case"-":
    compute=prev-curr;
    break;
    case"*":
    compute=prev*curr;
    break;
    case"/":
    compute=prev*curr;
    break;
  }
  return compute;
}
function App() {
 const[{current,previous,operation},dispatch]=useReducer(reducer,{});


  return (
   <>
 <div className='calculator'>
  <div className='output'>
    <div className='prev-op'>{previous} {operation}</div>
    <div className='curr-op'>{current}</div>
  </div>
  <button className='two' onClick={()=>{dispatch({type:ACTIONS.CLEAR})}}>Ac</button>
  <button onClick={()=>{dispatch({type:ACTIONS.DELETE_DIGIT})}}>del</button>
  <OperationButton operation="/" dispatch={dispatch}/>
  <Digit digit="1" dispatch={dispatch}/>
  <Digit digit="2" dispatch={dispatch}/>
  <Digit digit="3" dispatch={dispatch}/>
  <OperationButton operation="+" dispatch={dispatch}/>
  <Digit digit="4" dispatch={dispatch}/>
  <Digit digit="5" dispatch={dispatch}/>
  <Digit digit="6" dispatch={dispatch}/>
  <OperationButton operation="*" dispatch={dispatch}/>
  <Digit digit="7" dispatch={dispatch}/>
  <Digit digit="8" dispatch={dispatch}/>
  <Digit digit="9" dispatch={dispatch}/>
  <OperationButton operation="-" dispatch={dispatch}/>
  <Digit digit="." dispatch={dispatch}/>
  <Digit digit="0" dispatch={dispatch}/>
  <button className='two' onClick={()=>{dispatch({type:ACTIONS.EVALUATE})}}>=</button>
  

 </div>
   </>
  );
}

export default App;
