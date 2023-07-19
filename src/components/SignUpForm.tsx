import React from "react";
import { useSignUpForm } from "../hooks/useSignUpForm";
import { SignUpFormProps } from "../types/user";

export default function SignUpForm(props: SignUpFormProps) {
  const {
    email,
    pw,
    error,
    loading,
    handleChangeEmail,
    handleChangePw,
    handleClickSignUp,
    openSignInForm,
  } = useSignUpForm(props);

  return (
    <>
      <h1 className="display-3 text-center mb-5">Apple Notes</h1>

      <form
        className="loginform-root container-sm form-container"
        onSubmit={handleClickSignUp}
      >
        <div className="row">
          <p className="text-danger text-center">{error}</p>
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
            {!loading ? (
              "Sign Up"
            ) : (
              <div
                className="spinner-border spinner-border-sm text-light"
                role="status"
              >
                <span className="sr-only"></span>
              </div>
            )}
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
