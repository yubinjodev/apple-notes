import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../types/store";
import { BASEURL, GET_CONFIG } from "../utils/api";
import EditorMenu from "./EditorMenu";
import { useFetchNotes } from "../hooks/useFetchNotes";

export default function Editor() {
  const [note, setNote] = useState<any>(null);
  const dispatch = useDispatch();
  const notesReducer = useSelector((state: RootState) => state?.notesReducer);
  const [openMenu, setOpenMenu] = useState(false);
  const { notes } = useFetchNotes();

  const handleChangeInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNote((prev: any) => ({
      ...prev,
      date: new Date(),
      details: e.target.value,
    }));
  };

  const postNote = async (notes: any) => {};

  const fetchNotes = () => {
    if (note) {
      notes[note.date] = note.details;
      postNote(notes);
    }
  };

  const handleClickSave = async () => {
    fetchNotes();
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
        className="editor-root form-control py-5"
        onChange={handleChangeInput}
      />
    </main>
  );
}
