import axios from "axios";
import { useEffect, useState } from "react";
import { GET_CONFIG, BASEURL } from "../utils/api";
import { useSelector } from "react-redux";
import { Users } from "../types/user";
import { RootState } from "../types/store";

export const useUsers = () => {
  const [users, setUsers] = useState<Users>(null);
  const userState = useSelector((state: RootState) => state.userReducer);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        if (userState) {
          const response = await axios.get(
            BASEURL + process.env.REACT_APP_USER_BIN_ID,
            GET_CONFIG
          );
          const data = await response.data.record.users;

          setUsers(data);
        }
      } catch (e) {
        console.error(e);
      }
    };

    fetchUsers();
  }, []);

  return { users };
};
