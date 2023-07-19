import Editor from "./Editor";

import { useSelector } from "react-redux";
import { RootState } from "../types/store";
import Authentication from "./Authentication";

export default function NotesEditor() {
  const userState = useSelector((state: RootState) => state.userReducer);

  return (
    <div className="noteseditor-root container-fluid full-height d-flex flex-column justify-content-center align-items-center">
      {userState ? <Editor /> : <Authentication />}
    </div>
  );
}
