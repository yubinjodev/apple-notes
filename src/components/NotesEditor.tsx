import { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

import {useSelector} from "react-redux"

type ScreenId = "LoginForm" | "SignUpForm" | "Editor";

export default function NotesEditor() {
  const [screenId, setScreenId] = useState<ScreenId>("LoginForm");
  const userState = useSelector((state: any) => state.userState);

  const openSignInForm = ()=>{
    setScreenId("LoginForm")
  }

  const openSignUpForm = ()=>{
    setScreenId("SignUpForm")
  }

  return (
    <main className="noteseditor container">
      {userState ? "logged in" : "not logged in"}

      {screenId === "LoginForm" && <LoginForm openSignUpForm={openSignUpForm}/>}
      {screenId === "SignUpForm" && <SignUpForm openSignInForm={openSignInForm}/>}
    </main>
  );
}
