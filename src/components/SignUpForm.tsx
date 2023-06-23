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
  email: string | undefined;
  pw: string | undefined;
};

const URL = "https://api.jsonbin.io/v3/b";
const config = {
  headers: {
    "Content-Type": process.env.URL,
    "X-Master-Key": process.env.X_MASTER_KEY,
    "X-Access-Key":process.env.X_ACCESS_KEY,
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
      await axios.post(URL, signUpInfo, config);
    } catch (e) {
      console.log(e);
    }

    alert("Sign Up Successful");
    dispatch(login());
    openEditor();
  };

  const handleClickSignUp = () => {
    setSignupInfo({ email, pw });
    signUp();
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
