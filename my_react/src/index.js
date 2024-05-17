import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider, connect} from "react-redux"
import {createStore} from 'redux'
import ConnectedContacts, {store} from "./my_module1"

var data = ["Alicia", "Vincent", "king", "Desmond"];

let el = <Provider store={store}>
<ConnectedContacts numbers={data}/>
</Provider>

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
el
)


