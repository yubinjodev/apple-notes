import { useEffect, useState } from "react";
import { Note, Notes } from "../types/notes";
import { useDispatch, useSelector } from "react-redux";
import { saveNote } from "../actions";
import axios from "axios";
import { POST_CONFIG, X_ACCESS_KEY, X_MASTER_KEY, baseURL } from "../utils/api";

export default function Editor() {
  const [note, setNote] = useState<Note>(null);
  const dispatch = useDispatch();
  const notesReducer = useSelector((state: any) => state?.notesReducer);

  const handleChangeInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNote((prev) => ({
      ...prev,
      date: new Date(),
      details: e.target.value,
    }));
  };

  const postNote = () => {
    try {
      // axios.put(baseURL, notesReducer, POST_CONFIG)
      axios.put(
        "https://api.jsonbin.io/v3/b/649be4b29d312622a3771749",
        note,
        {
          headers: {
            "Content-Type": "application/json",
            "X-Master-Key": X_MASTER_KEY,
            "X-Access-Key": X_ACCESS_KEY,
          },
        }
      );
    } catch (e) {
      console.error(e);
    }
  };

  const handleClickSaveNote = () => {
    if (note) {
      dispatch(saveNote(note));
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
