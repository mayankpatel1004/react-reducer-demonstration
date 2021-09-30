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

function Reducer3() {

  const [data,dispatch] = useReducer(reducer,initialState);
  const [data2,dispatch2] = useReducer(reducer,initialState);

  const getName = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(res2 => {
        dispatch({type:'CHANGE_NAME',payload:res2[0].name});
    })
 }

  return (
    <div className="App">
      <br />
      <h3>Reducer 3 Demonstration : Change name with api and object (2 ways change name)</h3>
      My Name : {data.name}<br />
      My Wish : {data.wish[1]}
      <br />
      <button onClick={() => getName()}>Change name</button>
      <br />
      My Name : {data2.name}<br />
      My Wish : {data2.wish[2]}
      <br />
      <button onClick={() => dispatch2({type:'CHANGE_NAME',payload:'Hitesh'})}>Change name</button>
    </div>
  );
}

export default Reducer3;