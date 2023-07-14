import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useUserNotes } from "../hooks/useUserNotes";
import { addNoteToNotesTable, deleteNote } from "../service/apiService";
import { RootState } from "../types/store";
import EditorMenu from "./EditorMenu";
import { Note } from "../types/notes";
import { User } from "../types/user";
import { clearEditor } from "../actions";

export default function Editor() {
  const [note, setNote] = useState<Note>("");
  const [openMenu, setOpenMenu] = useState(false);
  const userState = useSelector((state: RootState) => state.userReducer);
  const { userNotes } = useUserNotes();
  const editorState = useSelector((state: RootState) => state.editorReducer);
  const dispatch = useDispatch();

  const handleChangeInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNote((prev: Note) => ({
      ...prev,
      date: new Date(),
      details: e.target.value,
    }));
  };

  const handleClickSave = async () => {
    const response = await addNoteToNotesTable(note, userState);
    if (response && userNotes) {
      alert("Note saved.");
      setOpenMenu(false);
      window.location.reload();
    }
  };

  const handleClickDelete = async () => {
    const response = await deleteNote(userState, editorState);

    // console.log(response);
    if (response) {
      alert("Note deleted.");
      setOpenMenu(false);
      window.location.reload();
      dispatch(clearEditor());
    }
  };

  useEffect(() => {
    setNote((prev: Note) => ({
      ...prev,
      date: editorState.date,
      details: editorState.details,
    }));
  }, [editorState]);

  return (
    <main className="editor-root position-relative container-fluid full-height">
      <button
        className="editor-menu border border-warning rounded-circle d-flex align-items-center justify-content-center position-absolute top-0 end-0 bg-transparent"
        style={{ height: 24, width: 24 }}
        onClick={() => setOpenMenu(!openMenu)}
      >
        <i className="bi bi-three-dots text-warning fs-5"></i>
      </button>
      {openMenu && (
        <EditorMenu
          handleClickSave={handleClickSave}
          handleClickDelete={handleClickDelete}
        />
      )}

      {note && (
        <textarea
          value={note.details}
          className="editor-root form-control py-5"
          onChange={handleChangeInput}
        />
      )}
    </main>
  );
}
