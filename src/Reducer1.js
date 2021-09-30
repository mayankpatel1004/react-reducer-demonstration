import './App.css';
import { useReducer } from 'react';

const iState = "Ramesh";
const reducer = (state, action) => {
  switch(action){
    case 'CHANGE_NAME' : 
      return "Suresh";
    default :
      return state;
  }
}

function Reducer1() {

  const [name,dispatch] = useReducer(reducer,iState);

  return (
    <div className="App">
      <h3>Reducer 1 Demonstration : Simply change single name</h3>
      Hello World {name}
      <button onClick={() => dispatch("CHANGE_NAME")}>Change name</button>
    </div>
  );
}

export default Reducer1;