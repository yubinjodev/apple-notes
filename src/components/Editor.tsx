import { useEffect, useState } from "react";
import { Note } from "../types/notes";

export default function Editor() {
  const [note, setNote] = useState<Note>(null);

  const handleChangeInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNote((prev) => ({
      ...prev,
      date: new Date(),
      details: e.target.value,
    }));
  };

  useEffect(() => {
    console.log(note);
  }, [note]);

  return <textarea className="editor-root form-control py-5" onChange={handleChangeInput}/>;
}
