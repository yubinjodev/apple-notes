import { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm, { SignUpFormProps } from "./SignUpForm";

import {useSelector} from "react-redux"

type ScreenId = "LoginForm" | "SignUpForm" | "Editor";

export default function NotesEditor() {
  const [screenId, setScreenId] = useState<ScreenId>("LoginForm");
  const [signUpFormProps, setSignUpFormProps] = useState<SignUpFormProps>();

  const userState = useSelector((state: any) => state.userState);

  const openSignInForm = ()=>{
    setScreenId("LoginForm")
  }

  const openEditor = ()=>{
    setScreenId("Editor")
  }

  const openSignUpForm = ()=>{
    setScreenId("SignUpForm")
    setSignUpFormProps({
      openEditor:openEditor,
      openSignInForm:openSignInForm
    })
  }

  return (
    <main className="noteseditor container">
      {userState ? "logged in" : "not logged in"}

      {screenId === "LoginForm" &&<LoginForm openSignUpForm={openSignUpForm}/>}
      {screenId === "SignUpForm" && signUpFormProps && <SignUpForm {...signUpFormProps}/>}
    </main>
  );
}
