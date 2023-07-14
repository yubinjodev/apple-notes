import { useState } from "react";

type EditorMenuProps = {
  handleClickSave: () => Promise<true | undefined>;
  handleClickDelete: () => Promise<true | undefined>;
};

type LoadingId = "delete" | "save" | null;

export default function EditorMenu(props: EditorMenuProps) {
  const { handleClickSave, handleClickDelete } = props;
  const [loading, setLoading] = useState(false);
  const [loadingId, setLoadingId] = useState<LoadingId>(null);

  const handleClickSaveButton = async () => {
    setLoading(true);
    setLoadingId("save");

    try {
      await handleClickSave();
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
      setLoadingId(null);
    }
  };

  const handleClickDeleteButton = async () => {
    setLoading(true);
    setLoadingId("delete");

    try {
      await handleClickDelete();
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
      setLoadingId(null);
    }
  };

  return (
    <div
      className="editormenu-root container bg-transparent p-2 rounded position-absolute top-0 end-0 my-4"
      style={{ width: 240 }}
    >
      <div
        className=" container d-flex flex-row justify-content-between align-items-center"
        style={{ cursor: "pointer" }}
        onClick={handleClickSaveButton}
      >
        <div>Save</div>
        {!loading && (
          <i
            className="bi bi-cloud-plus fs-4"
            style={{ width: "fit-content" }}
          ></i>
        )}
        {loading && loadingId === "save" && (
          <div
            className="spinner-border spinner-border-sm text-light"
            role="status"
          >
            <span className="sr-only"></span>
          </div>
        )}
      </div>

      <hr style={{ marginTop: 8, marginBottom: 8 }} />

      <div
        className=" container d-flex flex-row justify-content-between align-items-center"
        style={{ cursor: "pointer" }}
        onClick={handleClickDeleteButton}
      >
        <div className="text-danger">Delete</div>

        {!loading && (
          <i
            className="bi bi-trash3 fs-5 text-danger"
            style={{ width: "fit-content" }}
          ></i>
        )}
        {loading && loadingId === "delete" && (
          <div
            className="spinner-border spinner-border-sm text-danger"
            role="status"
          >
            <span className="sr-only"></span>
          </div>
        )}
      </div>
    </div>
  );
}
