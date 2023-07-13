import { useState } from "react";
import { useSelector } from "react-redux";
import { useUserNotes } from "../hooks/useUserNotes";
import { addNoteToNotesTable } from "../service/apiService";
import { RootState } from "../types/store";
import EditorMenu from "./EditorMenu";

export default function Editor() {
  const [note, setNote] = useState<any>("");
  const [openMenu, setOpenMenu] = useState(false);
  const userState = useSelector((state: RootState) => state.userReducer);
  const { userNotes } = useUserNotes();

  const handleChangeInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNote((prev: any) => ({
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

  return (
    <main className="editor-root position-relative container-fluid full-height">
      <button
        className="editor-menu border border-warning rounded-circle d-flex align-items-center justify-content-center position-absolute top-0 end-0 bg-transparent"
        style={{ height: 24, width: 24 }}
        onClick={() => setOpenMenu(!openMenu)}
      >
        <i className="bi bi-three-dots text-warning fs-5"></i>
      </button>
      {openMenu && <EditorMenu handleClickSave={handleClickSave} />}

      <textarea
        value={note.details}
        className="editor-root form-control py-5"
        onChange={handleChangeInput}
      />
    </main>
  );
}
