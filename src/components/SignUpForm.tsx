import { useState } from "react";
import axios from "axios";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export type SignUpFormProps = {
  openSignInForm:()=>void;
}

export type User = {
  email: string | undefined;
  pw: string | undefined;
}

const URL = "https://api.jsonbin.io/v3/b"
const config = {
  headers:{
    'Content-Type': 'application/json',
    'X-Master-Key': '$2b$10$r6LNY8lMtQvXzRP/ZfPasuJg9AW.ThYLsXWivowsi5kpi2NF4T2Ka',
    'X-Access-Key': '$2b$10$.N5NTNbEHsXaUAILlE99Q./3FLOOq2izzW1IFpsKLb0LaX8BtD3oO',
  }
}

export default function SignUpForm(props: SignUpFormProps) {
  const {openSignInForm} = props;

  const [email, setEmail] = useState<string>()
  const [pw, setPw] = useState<string>()
  const [signUpInfo, setSignupInfo] = useState<User>()

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>)=>{
    setEmail(e.target.value)
  }

  const handleChangePw = (e: React.ChangeEvent<HTMLInputElement>)=>{
    setPw(e.target.value)
  }

  const signUp = async () =>{
    try{
      await axios.post(URL, signUpInfo, config);
    }catch(e){
      console.log(e);
    }

    alert("Sign Up Successful")
  }

  const handleClickSignUp = ()=>{
    setSignupInfo({email, pw})
    signUp()
  }

  return (
    <Form className="signupform container">
      <Form.Group>
        <Form.Control type="email" placeholder="Email" onChange={handleChangeEmail}/>
        <Form.Control type="password" placeholder="Password" onChange={handleChangePw} />

        <Button variant="primary" type="submit" onClick={handleClickSignUp}>
          Sign Up
        </Button>

        <div>
          Already have an account? <span onClick={openSignInForm}>Sign In</span>
        </div>
      </Form.Group>
    </Form>
  );
}
