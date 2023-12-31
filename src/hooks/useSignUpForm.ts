import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../actions";
import {
  addUserToNotesTable,
  addUserToUsersTable,
  fetchUsers,
} from "../service/apiService";
import { SignUpFormProps } from "../types/user";

export const useSignUpForm = ({ openSignInForm }: SignUpFormProps) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleChangePw = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPw(e.target.value);
  };

  const signUp = async () => {
    setLoading(true);

    try {
      const users = await fetchUsers();

      if (users[email]) {
        setError("An account with that email already exists.");
        setLoading(false);
      } else if (pw.length < 4) {
        setError("Your password should be at least 4 characters long.");
        setLoading(false);
      } else {
        const response = await addUserToUsersTable({ email, pw });

        if (response) {
          const finalConfirmation = await addUserToNotesTable(email);
          if (finalConfirmation) {
            const loginConfirmation = dispatch(login({ email, pw }));
            if (loginConfirmation) {
              setLoading(false);
            }
          }
        }
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const handleClickSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email && pw) {
      signUp();
    }
  };

  return {
    email,
    pw,
    error,
    loading,
    handleChangeEmail,
    handleChangePw,
    handleClickSignUp,
    openSignInForm,
  };
};
