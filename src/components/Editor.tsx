import { useEffect, useState } from "react";
import { Note, Notes } from "../types/notes";
import { useDispatch, useSelector } from "react-redux";
import { saveNote } from "../actions";
import axios from "axios";
import { POST_CONFIG, BASEURL } from "../utils/api";
import { RootState } from "../types/store";

export default function Editor() {
  const [note, setNote] = useState<Note>(null);
  const dispatch = useDispatch();
  const notesReducer = useSelector((state: RootState) => state?.notesReducer);

  const handleChangeInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNote((prev) => ({
      ...prev,
      date: new Date(),
      details: e.target.value,
    }));
  };

  const postNote = () => {
    try {
      axios.put(
        "https://api.jsonbin.io/v3/b/649be4b29d312622a3771749",
        notesReducer,
        {
          headers: {
            "Content-Type": "application/json",
            "X-Master-Key": process.env.REACT_APP_X_MASTER_KEY,
            "X-Access-Key": process.env.REACT_APP_X_ACCESS_KEY,
          },
        }
      );
      alert("Saved");
    } catch (e) {
      console.error(e);
    }
  };

  const handleClickSaveNote = () => {
    if (note) {
      const noteObj = { [note.date.toString()]: note.details.toString() };
      dispatch(saveNote(noteObj));
      postNote();
    }
  };

  return (
    <>
      <button onClick={handleClickSaveNote}>save</button>
      <textarea
        className="editor-root form-control py-5"
        onChange={handleChangeInput}
      />
    </>
  );
}

// useEffect(() => {
//   if(note){
//     dispatch(saveNote(note))
//   }
// }, [note]);
