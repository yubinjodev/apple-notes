import { useState } from "react";
import axios from "axios";

import { useDispatch } from "react-redux";
import { login } from "../actions";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { SignUpFormProps, User } from "../types/user";
import { POST_CONFIG, BASEURL } from "../utils/api";

export default function SignUpForm(props: SignUpFormProps) {
  const dispatch = useDispatch();

  const { openSignInForm } = props;

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
      await axios.post(BASEURL, signUpInfo, POST_CONFIG);

      alert("Sign Up Successful");

      if (signUpInfo) {
        dispatch(login(signUpInfo));
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleClickSignUp = () => {
    if (email && pw) {
      setSignupInfo({ email, pw });
      signUp();
    }
  };

  return (
    <>
      <h1 className="display-3 text-center mb-5">Apple Notes</h1>
      <form
        className="loginform-root container-sm form-container"
        onSubmit={handleClickSignUp}
      >
        <div className="row">
          <input
            value={email}
            className="form-control"
            type="email"
            placeholder="Email"
            onChange={handleChangeEmail}
          />
        </div>

        <div className="row mb-3">
          <input
            value={pw}
            className="form-control"
            type="password"
            placeholder="Password"
            onChange={handleChangePw}
          />
        </div>

        <div className="row mb-3">
          <button className="btn bg-transparent" type="submit">
            Sign Up
          </button>
        </div>

        <div className="row text-center">
          <div>
            Already have an account?{" "}
            <span
              className="text-warning"
              onClick={openSignInForm}
              role="button"
            >
              Sign In
            </span>
          </div>
        </div>
      </form>
    </>
  );
}
