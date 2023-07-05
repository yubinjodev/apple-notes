import { Notes } from "../types/notes";

type SidebarPreviewProps = {
  date: Date;
  details: string;
};

export default function SidebarPreview(props: SidebarPreviewProps) {
  const { date, details } = props;

  return (
    <section className="sidebarpreview-root container">
      <div className="row fs-5">
        <div className="col">{details}</div>
      </div>

      <div className="row fs-6">
        <div className="col pe-0 text-warning">Public</div>
        <div className="col px-0 text-center">&#183;</div>
        <div className="col ps-0 text-muted">{date?.toString()}</div>
      </div>
      <hr />
    </section>
  );
}
