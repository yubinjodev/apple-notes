import { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

type ScreenId = "LoginForm" | "SignUpForm";

export default function Authentication() {
  const [screenId, setScreenId] = useState<ScreenId>("LoginForm");

  const openSignUpForm = () => {
    setScreenId("SignUpForm");
  };

  const openSignInForm = () => {
    setScreenId("LoginForm");
  };

  return (
    <>
      {screenId === "LoginForm" && (
        <LoginForm openSignUpForm={openSignUpForm} />
      )}
      {screenId === "SignUpForm" && (
        <SignUpForm openSignInForm={openSignInForm} />
      )}
    </>
  );
}
