import axios from "axios";
import { useEffect, useState } from "react";

import { LoginFormProps, Users } from "../types/user";

import { useDispatch } from "react-redux";

import { importNotes, login } from "../actions";
import { GET_CONFIG, BASEURL } from "../utils/api";

export default function LoginForm(props: LoginFormProps) {
  const dispatch = useDispatch();

  const { openSignUpForm } = props;

  const [email, setEmail] = useState<string>("");
  const [pw, setPw] = useState<string>("");
  const [users, setUsers] = useState<any>([]);

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleChangePw = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPw(e.target.value);
  };

  const handleClickSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        BASEURL + process.env.REACT_APP_USER_BIN_ID,
        GET_CONFIG
      );
      const userData = await response.data.record;

      for (const id in userData) {
        users.push({ [id]: userData[id] });
      }

      users.forEach((user: any) => {
        const id = Object.keys(user).toString();
        const dbPw = Object.values(user).toString();
        if (id === email && dbPw === pw) {
          dispatch(login({ email: id, pw: dbPw }));
        }
      });
    } catch (e) {
      console.error(e);
    }
  };
  console.log(GET_CONFIG);
  return (
    <>
      <h1 className="display-3 text-center mb-5">Apple Notes</h1>
      <form
        className="loginform-root container-sm form-container"
        onSubmit={handleClickSignIn}
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
            Sign In
          </button>
        </div>

        <div className="row text-center">
          <div>
            Don't have an account?{" "}
            <span className="text-warning" onClick={openSignUpForm}>
              Sign Up
            </span>
          </div>
        </div>
      </form>
    </>
  );
}
