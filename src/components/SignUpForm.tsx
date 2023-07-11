import axios from "axios";
import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { importNotes, login } from "../actions";

import { SignUpFormProps } from "../types/user";
import { BASEURL, GET_CONFIG, POST_CONFIG } from "../utils/api";
import { useFetchNotes } from "../hooks/useFetchNotes";

export default function SignUpForm(props: SignUpFormProps) {
  const dispatch = useDispatch();

  const { openSignInForm } = props;

  const [email, setEmail] = useState<string>("");
  const [pw, setPw] = useState<string>("");
  const [users, setUsers] = useState<any>(null);
  const [error, setError] = useState<string>("");
  const { notes } = useFetchNotes();

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

      if (userData) {
        setUsers(userData);

        infoValidation(userData);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const addUser = () => {
    setUsers((prev: any) => ({
      ...prev,
      [email]: pw,
    }));
  };

  const signUp = () => {
    fetchUsers();
  };

  const infoValidation = (userData: object) => {
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

  const saveNewNotesTableWithNewUser = (data: any) => {
    try {
      axios.put(
        BASEURL + process.env.REACT_APP_NOTES_BIN_ID,
        data,
        POST_CONFIG
      );
    } catch (e) {
      console.error(e);
    }
  };

  const insertUserToNotesTable = (data: any) => {
    data[email] = {};
    saveNewNotesTableWithNewUser(data);
  };

  const fetchNotes = async () => {
    try {
      const response = await axios.get(
        BASEURL + process.env.REACT_APP_NOTES_BIN_ID,
        GET_CONFIG
      );
      const data = await response.data.record;
      if (data) {
        insertUserToNotesTable(data);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const addUserToNotesTable = () => {
    fetchNotes();
  };

  useEffect(() => {
    if (error === "none") {
      addUser();
    }
  }, [error]);

  useEffect(() => {
    const postUser = async () => {
      if (error === "none" && users) {
        try {
          const response = await axios.put(
            BASEURL + process.env.REACT_APP_USER_BIN_ID,
            users,
            POST_CONFIG
          );
          const status = await response.status;
          if (status === 200) {
            alert("Sign Up Successful.");
            dispatch(login({ email, pw }));
            addUserToNotesTable();
          }
        } catch (e) {
          console.error(e);
        }
      }
    };

    postUser();
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
