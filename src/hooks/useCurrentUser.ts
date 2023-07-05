import { useEffect, useState } from "react";
import { User } from "../types/user";
import { useUsers } from "./useUsers";
import { useSelector } from "react-redux";
import { RootState } from "../types/store";

export const useCurrentUser = () => {
  const { users } = useUsers();
  const userState: User = useSelector((state: RootState) => state.userReducer);
  const [currentUser, setCurrentUser] = useState<User>(null);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      if (users && userState) {
        const userResult =  await users.filter(
          (user) => user?.email === userState.email
        );

        setCurrentUser(userResult[0]);
      }
    };

    fetchCurrentUser();
  }, [users]);


  return { currentUser };
};
