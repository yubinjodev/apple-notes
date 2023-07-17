import { useSelector } from "react-redux";
import { RootState } from "../types/store";

type BannerMenuProps = {
  handleClickLogOut: () => void;
};

export default function BannerMenu(props: BannerMenuProps) {
  const { handleClickLogOut } = props;
  const userState = useSelector((state: RootState) => state.userReducer);

  return (
    <div
      className="bannermenu-root container bg-transparent p-2 rounded position-absolute  end-0 my-4"
      style={{ width: 240, top: "10px" }}
    >
      <div className=" container d-flex flex-row justify-content-between align-items-center">
        <div>{userState?.email}</div>
      </div>

      <hr style={{ marginTop: 8, marginBottom: 8 }} />

      <div
        className=" container d-flex flex-row justify-content-between align-items-center"
        style={{ cursor: "pointer" }}
        onClick={handleClickLogOut}
      >
        <div className="text-danger">Sign Out</div>
      </div>
    </div>
  );
}
