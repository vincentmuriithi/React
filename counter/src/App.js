import React, {useEffect, useState} from "react";
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
const handleReduction = () =>{
props.increment(-1)
}

const keypressHandler = event => keysHandler(event, props);
useEffect(() => {
document.addEventListener("keydown", keypressHandler);
return () => document.removeEventListener("keydown", keypressHandler);
},[]
)
  return (
    <div className="App">
     <p>{props.count}</p>
     <button style={{padding: "10px", backgroundColor: "#fade70", borderRadius: "14px", fontFamily: "Aerial", width: "90px", textAlign: "center"}}
     onClick={handleChange}>Add</button>
     <br/>
     <button style={{marginTop: "10px", padding: "10px", backgroundColor: "#fade70", borderRadius: "14px", fontFamily: "Aerial", width: "90px", textAlign: "center"}}
     onClick={handleReduction}>Reduce</button>
    </div>
  );
}

//handling the up and bottom keys event 
const keysHandler = (event, additionalData) => {
switch (event.key){
case "ArrowUp":
        additionalData.increment(1);
        break;
case "ArrowRight":
        additionalData.increment(1);
        break;
case "ArrowLeft":
        additionalData.increment(-1);
        break;
case "ArrowDown":
        additionalData.increment(-1);
        break;

   


}

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
