import { useState } from "react";

import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import Editor from "./Editor";

import {useSelector} from "react-redux"
import { SignUpFormProps } from "../types/user";
import { RootState } from "../types/store";

type ScreenId = "LoginForm" | "SignUpForm" | "Editor";

export default function NotesEditor() {
  const [screenId, setScreenId] = useState<ScreenId>("LoginForm");
  const [signUpFormProps, setSignUpFormProps] = useState<SignUpFormProps>();

  const userState = useSelector((state: RootState) => state.userReducer);

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
    <div className="noteseditor-root container-fluid full-height d-flex flex-column justify-content-center align-items-center">
      
      {userState ? <Editor/> : <LoginForm openSignUpForm={openSignUpForm}/>} 

      {/* {screenId === "LoginForm" &&<LoginForm openSignUpForm={openSignUpForm}/>}
      {screenId === "SignUpForm" && signUpFormProps && <SignUpForm {...signUpFormProps}/>}
      {screenId === "Editor" && <Editor />} */}
    </div>
  );
}
