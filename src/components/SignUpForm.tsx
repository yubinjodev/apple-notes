import { useState } from "react";
import axios from "axios";

import { useDispatch } from "react-redux";
import { login } from "../actions";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { SignUpFormProps, User } from "../types/user";
import { POST_CONFIG, baseURL } from "../utils/api";


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
      await axios.post(baseURL, signUpInfo, POST_CONFIG);

      alert("Sign Up Successful");

      if (signUpInfo) {
        dispatch(login(signUpInfo));
        openEditor();
      }
    } catch (e) {
      console.error(e);
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
