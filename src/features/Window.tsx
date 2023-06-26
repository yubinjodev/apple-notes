import { useDispatch, useSelector } from "react-redux";
import NotesEditor from "../components/NotesEditor";
import Searchbar from "../components/Searchbar";
import Sidebar from "../components/Sidebar";
import WindowControl from "../components/WindowControl";

import { logout } from "../actions";

export default function Window() {
  const dispatch = useDispatch();
  const userState = useSelector((state: any) => state.userReducer);

  const handleClickLogOut = () => {
    dispatch(logout());
  };

  return (
    <main className="window-root container-sm bg-transparent rounded-3 shadow">
        <div className="row bg-transparent-darker p-2 rounded-top">
          <div className="col-6  d-flex align-items-center">
            <WindowControl />
          </div>
          <div className="col-6 ps-5">
            <Searchbar />
          </div>
          {/* <div className="col">
            {userState && <button onClick={handleClickLogOut}>log out</button>}
          </div> */}
        </div>

        <div className="row">
          <div className="col-2">
            <Sidebar />
          </div>
          <div className="col-10 bg-transparent-dark rounded-end">
            <NotesEditor />
          </div>
        </div>
    </main>
  );
}
