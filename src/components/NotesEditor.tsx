import { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

type ScreenId = "LoginForm" | "SignUpForm" | "Editor";

export default function NotesEditor() {
  const [screenId, setScreenId] = useState<ScreenId>("LoginForm");

  const openSignInForm = ()=>{
    setScreenId("LoginForm")
  }

  const openSignUpForm = ()=>{
    setScreenId("SignUpForm")
  }

  return (
    <main className="noteseditor container">
      {screenId === "LoginForm" && <LoginForm openSignUpForm={openSignUpForm}/>}
      {screenId === "SignUpForm" && <SignUpForm openSignInForm={openSignInForm}/>}
    </main>
  );
}
