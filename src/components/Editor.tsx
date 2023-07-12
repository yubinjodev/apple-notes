import { useEffect, useState } from "react";
import { Note, Notes } from "../types/notes";
import { useDispatch, useSelector } from "react-redux";
import { saveNote } from "../actions";
import axios from "axios";
import { POST_CONFIG, BASEURL } from "../utils/api";
import { RootState } from "../types/store";
import EditorMenu from "./EditorMenu";

export default function Editor() {
  const [note, setNote] = useState<any>(null);
  const dispatch = useDispatch();
  const notesReducer = useSelector((state: RootState) => state?.notesReducer);
  const [openMenu, setOpenMenu] = useState(false);

  const handleChangeInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNote((prev: any) => ({
      ...prev,
      date: new Date(),
      details: e.target.value,
    }));
  };

  const postNote = () => {
    // try {
    //   axios.put(
    //     "https://api.jsonbin.io/v3/b/649be4b29d312622a3771749",
    //     notesReducer,
    //     {
    //       headers: {
    //         "Content-Type": "application/json",
    //         "X-Master-Key": process.env.REACT_APP_X_MASTER_KEY,
    //         "X-Access-Key": process.env.REACT_APP_X_ACCESS_KEY,
    //       },
    //     }
    //   );
    //   alert("Saved");
    // } catch (e) {
    //   console.error(e);
    // }
  };

  const handleClickSaveNote = () => {
    if (note) {
      const noteObj = { [note.date.toString()]: note.details.toString() };
      dispatch(saveNote(noteObj));
      postNote();
    }
  };

  return (
    <main className="editor-root position-relative container-fluid full-height">
      {/* <button onClick={handleClickSaveNote}>save</button> */}
      <button
        className="editor-menu border border-warning rounded-circle d-flex align-items-center justify-content-center position-absolute top-0 end-0 bg-transparent"
        style={{ height: 24, width: 24 }}
        onClick={() => setOpenMenu(!openMenu)}
      >
        <i className="bi bi-three-dots text-warning fs-5"></i>
      </button>
      {openMenu && <EditorMenu />}

      <textarea
        className="editor-root form-control py-5"
        onChange={handleChangeInput}
      />
    </main>
  );
}
