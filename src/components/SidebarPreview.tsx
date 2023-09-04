import { useDispatch } from "react-redux";
import { selectNote } from "../actions";

type SidebarPreviewProps = {
  date: Date;
  details: string;
  closeSidebar?: () => void;
};

export default function SidebarPreview(props: SidebarPreviewProps) {
  const { date, details, closeSidebar } = props;
  const dispatch = useDispatch();

  const handleClickPreview = () => {
    dispatch(selectNote({ date, details }));
    if (closeSidebar) {
      closeSidebar();
    }
  };

  return (
    <section
      className="sidebarpreview-root container"
      style={{ cursor: "pointer" }}
      onClick={handleClickPreview}
    >
      <div className="row fs-5">
        <h1 className="col text-truncate" style={{ fontSize: "1rem" }}>
          {details}
        </h1>
      </div>
      <div className="row fs-6">
        <div className="col pe-0 text-warning">Public</div>
        <div className="col px-0 text-center">&#183;</div>
        <div className="col ps-0 text-muted">
          {new Date(date).toLocaleDateString("en-us", {
            year: "numeric",
            month: "numeric",
            day: "numeric",
          })}
        </div>
      </div>
      <hr />
    </section>
  );
}
