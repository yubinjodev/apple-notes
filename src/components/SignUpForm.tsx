import axios from "axios";
import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { login } from "../actions";

import { SignUpFormProps } from "../types/user";
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
    console.log("2 fetch users");
    try {
      const response = await axios.get(
        BASEURL + process.env.REACT_APP_USER_BIN_ID,
        GET_CONFIG
      );
      const userData = await response.data.record;

      if (userData) {
        setUsers(userData);
        addUser();
      }
    } catch (e) {
      console.error(e);
    }
  };

  const addUser = async () => {
    console.log("3 add user");
    await setUsers((prev: any) => ({
      ...prev,
      [email]: pw,
    }));
  };

  const signUp = () => {
    console.log("1 sign up clicked");
    fetchUsers();
  };

  const handleClickSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && pw) {
      signUp();
    }
  };

  useEffect(() => {
    console.log(users);

    if (users) {
      try {
        axios.put(
          BASEURL + process.env.REACT_APP_USER_BIN_ID,
          users,
          POST_CONFIG
        );
        alert("Sign Up Successful.");
        dispatch(login({ email, pw }));
      } catch (e) {
        console.error(e);
      }
    }
  }, [users]);

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
