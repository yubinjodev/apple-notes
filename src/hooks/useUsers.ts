import axios from "axios";
import { useEffect, useState } from "react";
import { BIN_ID, GET_CONFIG, baseURL } from "../utils/api";

export const useUsers = () => {
  const [users, setUsers] = useState(null);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(baseURL + BIN_ID, GET_CONFIG);
      const data = await response.data.record.users;

      setUsers(data)
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return {users}
};
