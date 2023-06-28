import axios from "axios";
import { useEffect, useState } from "react";
import { BIN_ID, GET_CONFIG, baseURL } from "../utils/api";
import { useSelector } from "react-redux";
import { Users } from "../types/user";

export const useUsers = () => {
  const [users, setUsers] = useState<Users>(null);
  const userState = useSelector((state: any) => state.userReducer);

  useEffect(() => {
    const fetchUsers = async () => {
        try {
          if (userState) {
            const response = await axios.get(baseURL + BIN_ID, GET_CONFIG);
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
