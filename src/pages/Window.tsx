import { useState } from "react";
import NotesEditor from "../components/NotesEditor";
import Searchbar from "../components/Searchbar";
import Sidebar from "../components/Sidebar";
import WindowControl from "../components/WindowControl";
import { useIsMobile } from "../hooks/useIsMobile";

export default function Window() {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);
  const { isMobile } = useIsMobile();

  return (
    <main className="window-root container-sm bg-transparent rounded-3 shadow overflow-hidden position-relative">
      <div className="row bg-transparent-darker p-2 rounded-top position-sticky top-0 z-1">
        <div className="col-6 col-lg-9  d-flex align-items-center">
          <WindowControl />
        </div>
        <div className="col-6 col-lg-3">
          <Searchbar />
        </div>
      </div>

      <div className="row full-height" style={{ height: "93%" }}>
        {!isMobile && (
          <>
            <div className="col-6 col-lg-2 py-3">
              <Sidebar />
            </div>
            <div className="col-6 col-lg-10 bg-transparent-dark rounded-end d-flex justify-content-center align-items-center">
              <NotesEditor />
            </div>
          </>
        )}

        {isMobile && (
          <div style={{ position: "relative" }}>
            <button
              className="d-flex align-items-center justify-content-center text-warning fs-6"
              style={{
                border: "none",
                top: 0,
                background: "transparent",
                zIndex: 2,
                width: "fit-content",
                position: "absolute",
                ...(openSidebar ? { right: 0 } : { left: 0 }),
              }}
              onClick={() => setOpenSidebar(!openSidebar)}
            >
              {openSidebar && (
                <>
                  Back
                  <i className="bi bi-arrow-right-short text-warning fs-5"></i>
                </>
              )}

              {!openSidebar && (
                <>
                  <i className="bi bi-arrow-left-short text-warning fs-5"></i>
                  View All Notes
                </>
              )}
            </button>
            {openSidebar ? <Sidebar /> : <NotesEditor />}
          </div>
        )}
      </div>
    </main>
  );
}
