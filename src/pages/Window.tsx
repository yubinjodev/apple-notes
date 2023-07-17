import NotesEditor from "../components/NotesEditor";
import Searchbar from "../components/Searchbar";
import Sidebar from "../components/Sidebar";
import WindowControl from "../components/WindowControl";

export default function Window() {
  return (
    <main className="window-root container-sm bg-transparent rounded-3 shadow overflow-hidden position-relative">
      <div className="row bg-transparent-darker p-2 rounded-top position-sticky top-0 z-1">
        <div className="col-7  d-flex align-items-center">
          <WindowControl />
        </div>
        <div className="col-2 d-flex justify-content-end"></div>
        <div className="col-3">
          <Searchbar />
        </div>
      </div>

      <div className="row full-height" style={{ height: "93%" }}>
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
