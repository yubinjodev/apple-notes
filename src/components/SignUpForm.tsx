import { useState } from "react";
import axios from "axios";

import { useDispatch } from "react-redux";
import { login } from "../actions";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export type SignUpFormProps = {
  openSignInForm: () => void;
  openEditor: () => void;
};

export type User = {
  email: string;
  pw: string;
} | null;

const URL = "https://api.jsonbin.io/v3/b";
// const URL: string = (process.env.REACT_APP_URL as string);
const CONFIG = {
  headers: {
    "Content-Type": "application/json",
    // "X-Master-Key": (process.env.REACT_APP_X_MASTER_KEY as string),
    // "X-Access-Key": (process.env.REACT_APP_X_ACCESS_KEY as string),
    "X-Master-Key": "$2b$10$r6LNY8lMtQvXzRP/ZfPasuJg9AW.ThYLsXWivowsi5kpi2NF4T2Ka",
    "X-Access-Key": "$2b$10$.N5NTNbEHsXaUAILlE99Q./3FLOOq2izzW1IFpsKLb0LaX8BtD3oO",
  },
};

export default function SignUpForm(props: SignUpFormProps) {
  const dispatch = useDispatch();

  const { openSignInForm, openEditor } = props;

  const [email, setEmail] = useState<string>();
  const [pw, setPw] = useState<string>();
  const [signUpInfo, setSignupInfo] = useState<User>();

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleChangePw = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPw(e.target.value);
  };

  const signUp = async () => {
    try {
      await axios.post(URL, signUpInfo, CONFIG);

      alert("Sign Up Successful");

      if (signUpInfo) {
        dispatch(login(signUpInfo));
        openEditor();
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleClickSignUp = () => {
    if (email && pw) {
      setSignupInfo({ email, pw });
      signUp();
    }
  };

  return (
    <Form className="signupform container">
      <Form.Group>
        <Form.Control
          type="email"
          placeholder="Email"
          onChange={handleChangeEmail}
        />
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={handleChangePw}
        />

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
