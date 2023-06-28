import { useEffect, useState } from "react";
import { User } from "../types/user";
import { useUsers } from "./useUsers";
import { useSelector } from "react-redux";

export const useCurrentUser = () => {
  const { users } = useUsers();
  const userState: User = useSelector((state: any) => state.userReducer);
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

  useEffect(()=>{
    console.log("useCurrentUser",currentUser);
  },[currentUser])

  return { currentUser };
};
