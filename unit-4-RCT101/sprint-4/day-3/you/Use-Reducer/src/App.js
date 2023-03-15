import { useState ,useReducer } from "react";
import "./App.css";

const initialState = {
  email: "",
  password: "",
};

//should have the cases "email", "password", and "reset", along with the default cases
const reducer = (state, action) => {
   switch(action.type) {
     case "email":{
        state.email = action.payload
        state.password = ""
         return state
};
     case "password":{
        state.email = ""
        state.password = action.payload
       return state

 }

      case "reset":{
        state.email = ""
        state.password = ""
        return state

}
 default :{
  return state
    }
   }
  }

function App() {
  // import and use the useReducer hook here, with the reducer function and the initialState.

  //store the data in this object variable when you click on the submit button, to render, the data in the UI.
  const [submittedData, setSubmittedData] = useState(initialState)
  const [state , dispatch] = useReducer(reducer,initialState)
  const [text, setText] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData({email:text.email,password:text.password})
    dispatch(submittedData)
}
   const handleChange = () => {
    setText({...text,[e.target.type]:e.target.value})
   }
  return (
    <div className="App">
      <h2>useReducer Hook</h2>
      <form className="form-wrapper" data-testid="form-wrapper" onSubmit = {handleSubmit}>
        <div className="useremail-wrapper">
          <label>User Email</label>
          <input type="email" data-testid="user-email" 
          onChange={handleChange} />
        </div>
        <div className="userpassword-wrapper">
          <label>User Password</label>
          <input type="password" 
          data-testid="user-password" 
          onChange={handleChange} 
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {/* IF there is data in the submittedData variable after submitting the form, show the data here ELSE show the No details found div. */}
      <div>
        <div data-testid="submitted-data-email">User Email:{submittedData.email}</div>
        <div data-testid="submitted-data-password">User Password:{submittedData.password}</div>
      </div>

      <div data-testid="no-details-container">no details found</div>
    </div>
  );
}

// DO NOT change/modify the exports
export default App;
export { reducer, initialState };
