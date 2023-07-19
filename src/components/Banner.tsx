import { useState } from "react";
import BannerMenu from "./BannerMenu";
import { clearEditor, clearNotes, logout } from "../actions";
import { useDispatch } from "react-redux";

export default function Banner() {
  const [openMenu, setOpenMenu] = useState(false);
  const dispatch = useDispatch();

  const handleClickLogOut = () => {
    dispatch(logout());
    dispatch(clearNotes());
    dispatch(clearEditor());
    window.location.reload();
    setOpenMenu(false);
  };

  return (
    <div
      className="banner-root bg-transparent position-fixed d-flex justify-content-end px-3"
      style={{ width: "100%", zIndex: 999 }}
    >
      <i
        className="bi bi-person-circle fs-4"
        style={{ width: "fit-content", cursor: "pointer" }}
        onClick={() => setOpenMenu(!openMenu)}
      ></i>
      {openMenu && <BannerMenu handleClickLogOut={handleClickLogOut} />}
    </div>
  );
}
