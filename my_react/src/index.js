import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider, connect} from "react-redux"
import {createStore} from 'redux'

var ADD_CONTACT = "ADD_CONTACT";
var data = ["Alicia", "Vincent", "king", "Desmond"];

let initialState = {
contacts: data
}
const actionCreator = (jina) => {
return {
type : ADD_CONTACT,
name : jina
};

};

const reducer = (state=initialState, action) => {
switch (action.type){
case ADD_CONTACT:
    return {
     ...state,
    contacts: [...state.contacts, action.name]
    }
default:
   return state
}
}

const mapStateToProps = state => {
return {
    contacts: state.contacts
}
}

const mapDispatchToProps =  {
actionCreator
}

const Data = (props) => {

return <div>
{props.contacts.map((data_point, index) => {
return (
<div key={index}>
<p>{data_point}</p>
</div>
);
})}
<h3>what's popping</h3>
</div>;
}

let reduxStore = createStore(reducer);
let ConnectedData = connect(mapStateToProps)(Data);
let el = <Provider store={reduxStore}>
<ConnectedData/>
</Provider>

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
el
)


