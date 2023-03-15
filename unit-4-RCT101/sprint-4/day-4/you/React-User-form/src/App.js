App.js
import { useState,useReducer } from "react";
import { UserRow } from "./Component/UserRow";
import "./App.css";
import {Box,Button,Center,Checkbox,FormControl,Heading,FormLabel,Input,Select} from "@chakra-ui/react"
const initialState = {
  name: "",
  gender: "Male",
  role: "FrontEnd Developer",
  maritalStatus: false,
};

//should have the cases "name", "gender", "role", "maritalStatus", and "reset" along with the default cases
const reducer = (state, action) => {
  switch(action.type){
    case "name":{
      return {...state, name:action.payload}
    }
    case "gender":{
     
      return {...state, gender:action.payload}
    }
    case "role":{
     
      return {...state, role:action.payload}
    }
    case "maritalStatus":{
      return {...state, maritalStatus:action.payload}
    }
    case "reset":{
  
      return action.payload
    }
    default:{
      return state
    }
  }
};

function App() {
  // note : Remove below const and instead import them from chakra import the following components from
  // const Box = () => <div />;
  // const Button = () => <div />;
  // const Center = () => <div />;
  // const Checkbox = () => <div />;
  // const FormControl = () => <div />;
  // const Heading = () => <div />;
  // const FormLabel = () => <div />;
  // const Input = () => <div />;
  // const Select = () => <div />;
  // use Table Component from chakra ui to display the details
  // const TableContainer = () => <div />;

  // import and use the useReducer hook here, with the reducer function and the initialState.

  //store the data in this object variable when you click on the submit button, to render, the data in the UI.
  const [submittedData, setSubmittedData] = useState(initialState);
  const [state,dispatch] = useReducer(reducer,initialState)

  const handleSubmit=()=>{
    dispatch({
      type:"name",
      payload:submittedData.name
    })
    dispatch({
      type:"gender",
      payload:submittedData.gender
    })
    dispatch({
      type:"role",
      payload:submittedData.role
    })
    dispatch({
      type:"maritalStatus",
      payload:submittedData.maritalStatus
    })

  }
  
  return (
    <div className="App">
      <Heading as="h1">Login Form</Heading>
      <Box>
        <form data-testid="form-element" onSubmit={handleSubmit} >
          <FormControl>
            <FormLabel>Name</FormLabel>

            <Input type="text" name="name" onChange={(e)=>(setSubmittedData({...submittedData,name:e.target.value}))} />
            <FormLabel>Gender</FormLabel>
            <Select name="gender" data-testid="gender-select" onChange={(e)=>(setSubmittedData({...submittedData,gender:e.target.value}))}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Prefer Not to Say">Prefer Not to Say</option>
            </Select>
            <FormLabel>Role</FormLabel>
            <Select name="role" data-testid="role-select" onChange={(e)=>(setSubmittedData({...submittedData,role:e.target.value}))}>
              <option value="FrontEnd Developer">FrontEnd Developer</option>
              <option value="BackEnd Developer">BackEnd Developer</option>
              <option value="FullStack Developer">FullStack Developer</option>
            </Select>

            <Checkbox name="maritalStatus">Married</Checkbox>
            <Center>
              <Button variant="solid" type="submit">
                SUBMIT
              </Button>
            </Center>
          </FormControl>
        </form>
      </Box>
      {/* map through the submittedData and render UserRow component to display the data in tabular format ELSE print "no users found"  in there is no user data */}

      <Heading data-testid="no-user-container">no users found</Heading>
     
    </div>
  );
}


// DO NOT change/modify the exports
export default App;
export { reducer, initialState };