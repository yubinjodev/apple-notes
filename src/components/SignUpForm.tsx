import axios from "axios";
import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { login } from "../actions";

import { SignUpFormProps, User, Users } from "../types/user";
import { BASEURL, GET_CONFIG, POST_CONFIG } from "../utils/api";

export default function SignUpForm(props: SignUpFormProps) {
  const dispatch = useDispatch();

  const { openSignInForm } = props;

  const [email, setEmail] = useState<string>("");
  const [pw, setPw] = useState<string>("");
  const [users, setUsers] = useState<any>(null);

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleChangePw = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPw(e.target.value);
  };

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        BASEURL + process.env.REACT_APP_USER_BIN_ID,
        GET_CONFIG
      );
      const userData = await response.data.record;

      setUsers(userData);

      addUser();
    } catch (e) {
      console.error(e);
    }
  };

  const addUser = () => {
    if (users) {
      setUsers((prev: any) => ({
        ...prev,
        [email]: pw,
      }));

      try {
        axios.put(
          BASEURL + process.env.REACT_APP_USER_BIN_ID,
          users,
          POST_CONFIG
        );
        dispatch(login({ email, pw }));
      } catch (e) {
        console.error(e);
      }
    }
  };

  const signUp = () => {
    fetchUsers();
  };

  const handleClickSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && pw) {
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
