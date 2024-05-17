import React from "react";
import './App.css';
import {connect, Provider} from "react-redux";
import {createStore} from "redux"

const INC = "INC";

const increment = (data) => {
return {
type: INC,
num: data
}
}

let initialState = {
count: 0
}

function App(props) {
const handleChange = () =>{
props.increment(1)
}
  return (
    <div className="App">
     <p>{props.count}</p>
     <button style={{padding: "10px", backgroundColor: "#fade70", borderRadius: "14px", fontFamily: "Aerial", width: "90px", textAlign: "center"}}
     onClick={handleChange}>Add</button>
    </div>
  );
}

//creating the reducer function which handles the action
const reducer = (state=initialState, action) =>{
switch (action.type){
case INC:
    return {
        ...state,
        count: state.count + action.num
}
default:
    return state    
}
}

const mapStateToProps = state => {
return {
count: state.count
}
}
// the initial state of our object-state


const mapDispatchToProps = {
increment
}

export const store = createStore(reducer);
const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
export default ConnectedApp;
