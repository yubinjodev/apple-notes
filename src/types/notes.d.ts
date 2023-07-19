// export type Note =
//   | {
//       date: Date;
//       details: string;
//     }
//   | ""
//   | null;

type NoteNode = {
  date: Date;
  details: string;
};

export type DBNote = {
  [email: string]: string;
} | null;

export type DBNotes = {
  [email: string]: {
    [date: string]: string;
  };
};

export type Note = NoteNode | "" | null;

// export type Notes = Note[] | "" | null;
