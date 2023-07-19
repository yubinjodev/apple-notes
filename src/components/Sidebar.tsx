import { useSelector } from "react-redux";
import { useIsMobile } from "../hooks/useIsMobile";
import { useSidebar } from "../hooks/useSidebar";
import { RootState } from "../types/store";
import SidebarPreview from "./SidebarPreview";

type SidebarProps = {
  closeSidebar?: () => void;
};

export default function Sidebar(props: SidebarProps) {
  const { closeSidebar } = props;
  const { isMobile } = useIsMobile();
  const userState = useSelector((state: RootState) => state.userReducer);
  const { parsedNotes } = useSidebar();

  return (
    <aside
      className="sidebar-root"
      style={{
        marginTop: `${isMobile ? "24px" : 0}`,
      }}
    >
      {parsedNotes &&
        parsedNotes.map((note) => {
          if (note && note.date && note.details) {
            return (
              <SidebarPreview
                closeSidebar={closeSidebar}
                key={note.date + note.details}
                date={note.date}
                details={note.details}
              />
            );
          }
          return null;
        })}

      {userState && parsedNotes.length < 1 && (
        <div className="placeholder-glow">
          <div>
            <h1 className="placeholder col-6 placeholder-lg">{}</h1>
            <p className="placeholder col-12 placeholder-lg"></p>
            <hr />
          </div>

          <div>
            <h1 className="placeholder col-6 placeholder-lg">{}</h1>
            <p className="placeholder col-12 placeholder-lg"></p>
            <hr />
          </div>

          <div>
            <h1 className="placeholder col-6 placeholder-lg">{}</h1>
            <p className="placeholder col-12 placeholder-lg"></p>
            <hr />
          </div>
        </div>
      )}
    </aside>
  );
}
