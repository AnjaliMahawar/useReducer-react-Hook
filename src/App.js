//Import Area
import logo from './logo.svg';
import './App.css';

//import { namedImport } from 'somelibary';
import { useReducer } from 'react';


let intialData = {
  name:'ANIL',
  surname:"DOLLOR"
};


// Define the reducer function here

const anjali = (oldState,action)=>{
    let newState = oldState;

    if(action.type === 'CHANGE_MY_NAME'){
        newState = {
          ...oldState,
          name:action.payload
        }
    }
    if(action.type === 'CHANGE_MY_SURNAME'){
      newState = {
        ...oldState,
        surname:action.payload
      }
    }



  //Every function return something

  return newState;
}


// Functional Component
function App() {
  //1. State/Hook Variable
  const [data,dispatch] = useReducer(anjali,intialData);

  //2. Function defination area
  const handleClick = ()=>{  //HOF
    //console.log('OKOKKOKOKO');

    // I have to dispatch some actions from here

    dispatch({
      type:"CHANGE_MY_NAME",
      payload:"ANJALI"
    });
  }

  //3. Return statement JSX
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >


          Learn React
        </a>
        <h1>{data.name} {data.surname}</h1>
        <button onClick={ ()=>{ handleClick() } }>Change My Name!</button>
      </header>
      
    </div>
  );
}

export default App;
