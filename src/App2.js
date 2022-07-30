import React, { useReducer } from 'react'


let initialData={
    name:"Anjali",
    surName:"Mahawar"
}
//2
let reducer=(oldState,action)=>{
let newState =oldState;
if(action.type==='CHANGE_NAME'){
 newState={
    ...oldState,
    name:action.payload1
 }

}
if(action.type==='CHANGE_SURNAME'){
    newState={
        ...oldState,
        surName:action.payload2
    }
}

//reducer function return newstate

 return newState;
}
export default function App2() {
    //state/hook
//3
  const[data,dispatch]=useReducer(reducer,initialData)


    //function
    let changeData=()=>{

        console.log('button is working')
        //4
        dispatch({
            type:"CHANGE_NAME" ,
        
            payload1:"Aanchal",
            //payload2:"Patidar"
        })
        dispatch({
            type:"CHANGE_SURNAME",
            payload2:"patidar"
        })
    }


    //return
  return (
   <>
     <div>App2</div>
     <button onClick={()=>{changeData()}}>Change the data</button>
     <h1>{data.name} {data.surName}</h1>
      
   </>
  )
}
