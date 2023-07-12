import axios from "axios";
import { BASEURL, GET_CONFIG, POST_CONFIG } from "../utils/api";

export const fetchUsers = async () => {
  try {
    const response = await axios.get(
      BASEURL + process.env.REACT_APP_USER_BIN_ID,
      GET_CONFIG
    );
    return response.data.record;
  } catch (e) {
    console.log("fetchUsers error");
    console.error(e);
  }
};

export const fetchNotes = async () => {
  try {
    const response = await axios.get(
      BASEURL + process.env.REACT_APP_NOTES_BIN_ID,
      GET_CONFIG
    );
    return response.data.record;
  } catch (e) {
    console.log("fetchNotes error");
    console.error(e);
  }
};

export const addUserToUsersTable = async (user: any) => {
  const users = await fetchUsers();
  if (users) {
    users[user.email] = user.pw;

    try {
      const response = await axios.put(
        BASEURL + process.env.REACT_APP_USER_BIN_ID,
        users,
        POST_CONFIG
      );
      return response.status === 200;
    } catch (e) {
      console.log("addUserToUsersTable error");
      console.error(e);
    }
  }
};

export const addUserToNotesTable = async (email: string) => {
  const notes = await fetchNotes();
  if (notes) {
    notes[email] = {};

    try {
      const response = await axios.put(
        BASEURL + process.env.REACT_APP_NOTES_BIN_ID,
        notes,
        POST_CONFIG
      );
      return response.status === 200;
    } catch (e) {
      console.log("saveUserToNotesTable error");
      console.error(e);
    }
  }
};

export const addNoteToNotesTable = async (note: any, user: any) => {
  const notes = await fetchNotes();
  if (notes) {
    notes[user.email][note.date] = note.details;

    try {
      const response = await axios.put(
        BASEURL + process.env.REACT_APP_NOTES_BIN_ID,
        notes,
        POST_CONFIG
      );
      return response.status === 200;
    } catch (e) {
      console.log("addNoteToNotesTable error");
      console.error(e);
    }
  }
};
