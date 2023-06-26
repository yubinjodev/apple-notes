import { useDispatch, useSelector } from "react-redux";
import NotesEditor from "../components/NotesEditor";
import Searchbar from "../components/Searchbar";
import Sidebar from "../components/Sidebar";
import WindowControl from "../components/WindowControl";

import Stack from "react-bootstrap/Stack";
import { logout } from "../actions";

export default function Window() {
  const dispatch = useDispatch();
  const userState = useSelector((state: any) => state.userReducer);

  const handleClickLogOut = () => {
    dispatch(logout());
  };

  return (
    <main className="window-root container-lg bg-transparent rounded-3 shadow">
      <Stack className="container" direction="vertical">
        <Stack
          direction="horizontal"
          className="bg-primary justify-content-between p-1"
        >
          <WindowControl />
          <Searchbar />
          {userState && <button onClick={handleClickLogOut}>log out</button>}
        </Stack>

        <Stack direction="horizontal">
          <Sidebar />
          <NotesEditor />
        </Stack>
      </Stack>
    </main>
  );
}
