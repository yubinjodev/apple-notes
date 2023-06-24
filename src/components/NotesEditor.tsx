import { useState } from "react";

import LoginForm from "./LoginForm";
import SignUpForm, { SignUpFormProps } from "./SignUpForm";
import Editor from "./Editor";

import {useSelector} from "react-redux"

type ScreenId = "LoginForm" | "SignUpForm" | "Editor";

export default function NotesEditor() {
  const [screenId, setScreenId] = useState<ScreenId>("LoginForm");
  const [signUpFormProps, setSignUpFormProps] = useState<SignUpFormProps>();

  const userState = useSelector((state: any) => state.userReducer);

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
      {userState ? "online" : "offline"} 
      {screenId === "LoginForm" &&<LoginForm openSignUpForm={openSignUpForm}/>}
      {screenId === "SignUpForm" && signUpFormProps && <SignUpForm {...signUpFormProps}/>}
      {screenId === "Editor" && <Editor />}
    </main>
  );
}
