import {connect} from "react-redux";
import {createStore} from "redux";
const ADD_CONTACT = "ADD_CONTACT";


var initialState = {
contacts: [" "]

}
const actionCreator = (new_contact) => {
return {
type: ADD_CONTACT,
name: new_contact
}
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

const ContactsList = (props) => {

const adder = () => {
for (let k of props.numbers){
if (!props.contacts.includes(k))
        props.actionCreator(k)
}
}

return (
<div>
{props.contacts.map((contact, index) => {
return (
<p key={index}>{contact}</p>
)
console.log("running" + Math.random());
}
)
}
<button style={{padding: "8px", backgroundColor: "#fabcde", borderRadius: "14px"}} onClick={adder}>
Add</button>
</div>
)// end of first return
}

const mapStateToProps = state => {
return {
contacts: state.contacts
}
};

const mapDispatchToProps = {
actionCreator
};


export  let store = createStore(reducer);

const ConnectedContacts = connect(mapStateToProps, mapDispatchToProps)(ContactsList);
export default ConnectedContacts;


