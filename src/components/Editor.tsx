import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearEditor, selectNote } from "../actions";
import { useUserNotes } from "../hooks/useUserNotes";
import {
  addNoteToNotesTable,
  deleteNote,
  editNote,
} from "../service/apiService";
import { Note, NoteNode } from "../types/notes";
import { RootState } from "../types/store";
import EditorMenu from "./EditorMenu";

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
      setOpenMenu(false);
      window.location.reload();

      return response;
    }
  };

  const handleClickDelete = async () => {
    const response = await deleteNote(userState, editorState);

    if (response) {
      setOpenMenu(false);
      window.location.reload();
      dispatch(clearEditor());

      return response;
    }
  };

  const handleClickEdit = async () => {
    const response = await editNote(userState, editorState, note as NoteNode);

    if (response) {
      setOpenMenu(false);
      window.location.reload();
      dispatch(selectNote(note));

      return response;
    }
  };

  const handleClickNewNote = () => {
    dispatch(clearEditor());

    setNote((prev: Note) => ({
      ...prev,
      date: new Date(),
      details: "",
    }));
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

      <button
        className="editor-menu rounded-circle d-flex align-items-center justify-content-center position-absolute end-0 bg-transparent"
        style={{ height: 24, width: 24, border: "none", bottom: 24 }}
        onClick={handleClickNewNote}
      >
        <i className="bi bi-pencil-square text-warning fs-5"></i>
      </button>

      {openMenu && (
        <EditorMenu
          handleClickEdit={handleClickEdit}
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
