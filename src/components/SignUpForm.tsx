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
  const [error, setError] = useState<string>("");

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

        infoValidation(userData);
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

  const infoValidation = (userData: object) => {
    console.log(userData);

    const emailChecker = () => {
      let flag = 0;
      for (const emailData in userData) {
        if (emailData === email) {
          flag = 1;
        }
      }

      return flag;
    };

    const flag = emailChecker();

    for (const emailData in userData) {
      if (emailData === email) {
        setError("An account with that email already exists.");
      }
      if (pw.length <= 4 && !flag) {
        setError("none");
      }
    }

    if (pw.length < 4) {
      setError("Your password should be at least 4 characters long.");
    }
  };

  const handleClickSignUp = (e: React.FormEvent) => {
    e.preventDefault();

    if (email && pw) {
      signUp();
    }
  };

  useEffect(() => {
    if (error === "none") {
      addUser();
    }
  }, [error]);

  useEffect(() => {
    console.log(users);

    if (error === "none" && users) {
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
          <p className="text-danger text-center">{error !== "none" && error}</p>
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
