export default function SidebarPreview() {
  return (
    <section className="sidebarpreview-root container">
      <div className="row fs-5">
        <div className="col">Title</div>
      </div>

      <div className="row fs-6">
        <div className="col pe-0 text-warning">Public</div>
        <div className="col px-0 text-center">-</div>
        <div className="col ps-0 text-muted">Date</div>
      </div>
      <hr />
    </section>
  );
}
