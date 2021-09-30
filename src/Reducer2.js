import './App.css';
import { useReducer } from 'react';

const initialState = {
    name:"Ramesh",
    wish: ['shop','eat','celebrate']
};

const reducer = (state, action) => {
  switch(action.type){
    case 'CHANGE_NAME': 
      return {
          ...state,
          name: action.payload
      }
    default :
      return state;
  }
}

function Reducer2() {

  const [data,dispatch] = useReducer(reducer,initialState);

  return (
    <div className="App">
      <h3>Reducer 2 Demonstration : Change name with object</h3>
      <br />
      My Name : {data.name}<br />
      My Wish : {data.wish[1]}
      <br />
      <button onClick={() => dispatch({type:"CHANGE_NAME",payload:"suresh2"})}>Change name</button>
    </div>
  );
}

export default Reducer2;