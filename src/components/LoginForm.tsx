import axios from "axios";
import { useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { User, X_ACCESS_KEY, X_MASTER_KEY, baseURL } from "./SignUpForm";
import { useDispatch } from "react-redux";
import { login } from "../actions";

export type LoginFormProps = {
  openSignUpForm: () => void;
};

type Users = User[];

export const BIN_ID = "6496c4129d312622a374cf7b";
export const GET_CONFIG = {
  headers: {
    "X-Master-Key": X_MASTER_KEY,
    "X-Access-Key": X_ACCESS_KEY,
  },
};

export default function LoginForm(props: LoginFormProps) {
  const dispatch = useDispatch();

  const { openSignUpForm } = props;

  const [email, setEmail] = useState<string>();
  const [pw, setPw] = useState<string>();
  const [users, setUsers] = useState<Users>();

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleChangePw = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPw(e.target.value);
  };

  const handleClickSignIn = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.get(baseURL + BIN_ID, GET_CONFIG);
      setUsers(response.data.record.users);
      users?.forEach((user) => {
        if (user?.email === email && user?.pw === pw) {
          if (email && pw) {
            dispatch(login({ email, pw, online: true }));
          }
        }
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <h1 className="display-3 text-center mb-5">Apple Notes</h1>
      <form className="loginform-root container-sm form-container">
        <div className="row">
          <input
            className="form-control"
            type="email"
            placeholder="Email"
            onChange={handleChangeEmail}
          />
        </div>

        <div className="row mb-3">
          <input
            className="form-control"
            type="password"
            placeholder="Password"
            onChange={handleChangePw}
          />
        </div>

        <div className="row mb-3">
          <button
            className="btn bg-transparent"
            type="submit"
            onClick={handleClickSignIn}
          >
            Sign In
          </button>
        </div>

        <div className="row text-center">
          <div>
            Don't have an account? <span className="text-warning" onClick={openSignUpForm}>Sign Up</span>
          </div>
        </div>
      </form>
    </>
  );
}
