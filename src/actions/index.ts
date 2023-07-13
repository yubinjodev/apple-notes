import { Note, Notes } from "../types/notes";
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

export const importNotes = (notes: Notes) => {
  return {
    type: "IMPORT_NOTES",
    payload: notes,
  };
};

export const saveNote = (note: any) => {
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

export const selectNote = (note: any) => {
  return {
    type: "SELECT_NOTE",
    payload: note,
  };
};
