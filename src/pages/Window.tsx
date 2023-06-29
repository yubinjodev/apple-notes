import { useDispatch, useSelector } from "react-redux";
import NotesEditor from "../components/NotesEditor";
import Searchbar from "../components/Searchbar";
import Sidebar from "../components/Sidebar";
import WindowControl from "../components/WindowControl";

import { logout } from "../actions";
import { RootState } from "../types/store";

export default function Window() {
  const dispatch = useDispatch();
  const userState = useSelector((state: RootState) => state.userReducer);

  const handleClickLogOut = () => {
    dispatch(logout());
  };

  return (
    <main className="window-root container-sm bg-transparent rounded-3 shadow overflow-hidden">
      <div className="row bg-transparent-darker p-2 rounded-top">
        <div className="col-6  d-flex align-items-center">
          <WindowControl />
        </div>
        <div className="col-6 ps-5">
          <Searchbar />
        </div>
        <div className="col">
            {userState && <button onClick={handleClickLogOut}>log out</button>}
          </div>
      </div>

      <div className="row full-height">
        <div className="col-2 py-3">
          <Sidebar />
        </div>
        <div className="col-10 bg-transparent-dark rounded-end d-flex justify-content-center align-items-center">
          <NotesEditor />
        </div>
      </div>
    </main>
  );
}
