type SidebarPreviewProps = {
  date: Date;
  details: string;
};

export default function SidebarPreview(props: SidebarPreviewProps) {
  const { date, details } = props;

  return (
    <section
      className="sidebarpreview-root container"
      style={{ cursor: "pointer" }}
    >
      <div className="row fs-5">
        <div className="col text-truncate">{details}</div>
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
