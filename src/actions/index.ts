import { DBNote, Note } from "../types/notes";
import { User } from "../types/user";

export const login = (userInfo: User) => {
  return {
    type: "LOGIN",
    payload: userInfo,
  };
};

export const logout = () => {
  return {
    type: "LOGOUT",
  };
};

export const importNotes = (notes: DBNote) => {
  return {
    type: "IMPORT_NOTES",
    payload: notes,
  };
};

export const saveNote = (note: Note) => {
  return {
    type: "SAVE_NOTE",
    payload: note,
  };
};

export const clearNotes = () => {
  return {
    type: "CLEAR_NOTES",
  };
};

export const selectNote = (note: Note) => {
  return {
    type: "SELECT_NOTE",
    payload: note,
  };
};

export const clearEditor = () => {
  return {
    type: "CLEAR_EDITOR",
  };
};
