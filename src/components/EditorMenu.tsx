type EditorMenuProps = {
  handleClickSave: () => void;
};

export default function EditorMenu(props: EditorMenuProps) {
  const { handleClickSave } = props;
  return (
    <div
      className="editormenu-root container bg-transparent p-2 rounded position-absolute top-0 end-0 my-4"
      style={{ width: 240 }}
    >
      <div
        className=" container d-flex flex-row justify-content-between align-items-center"
        style={{ cursor: "pointer" }}
        onClick={handleClickSave}
      >
        <div>Save</div>
        <i
          className="bi bi-cloud-plus fs-4"
          style={{ width: "fit-content" }}
        ></i>
      </div>

      <hr style={{ marginTop: 8, marginBottom: 8 }} />

      <div
        className=" container d-flex flex-row justify-content-between align-items-center"
        style={{ cursor: "pointer" }}
      >
        <div className="text-danger">Delete</div>
        <i
          className="bi bi-trash3 fs-5 text-danger"
          style={{ width: "fit-content" }}
        ></i>
      </div>
    </div>
  );
}
