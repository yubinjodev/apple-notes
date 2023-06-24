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
  online: boolean;
} | null;

export const baseURL = "https://api.jsonbin.io/v3/b/";
export const X_MASTER_KEY = "$2b$10$r6LNY8lMtQvXzRP/ZfPasuJg9AW.ThYLsXWivowsi5kpi2NF4T2Ka";
export const X_ACCESS_KEY = "$2b$10$.N5NTNbEHsXaUAILlE99Q./3FLOOq2izzW1IFpsKLb0LaX8BtD3oO"
const CONFIG = {
  headers: {
    "Content-Type": "application/json",
    "X-Master-Key":X_MASTER_KEY,
    "X-Access-Key":X_ACCESS_KEY,
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
      await axios.post(baseURL, signUpInfo, CONFIG);

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
      setSignupInfo({ email, pw, online: true });
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
