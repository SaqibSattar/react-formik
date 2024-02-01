import { useState } from "react";
import "./App.css";
import YoutubeForm from "./components/YoutubeForm";
import FormikContainer from "./components/FormikContainer";
import LoginForm from "./components/LoginForm";
import RegistrationForm from "./components/RegistrationForm";
import EnrollmentForm from "./components/EnrollmentForm";
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <div className="App">
    {/* <YoutubeForm /> 
    <FormikContainer />
    <RegistrationForm /> 
    <EnrollmentForm />*/}
    <ChakraProvider>
      <LoginForm />
    </ChakraProvider>
    </div>
  );
}

export default App;
