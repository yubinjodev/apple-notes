import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./styles/__custom.scss";

import Window from "./pages/Window";
import Banner from "./components/Banner";
import { useSelector } from "react-redux";
import { RootState } from "./types/store";

export default function App() {
  const userState = useSelector((state: RootState) => state.userReducer);
  return (
    <>
      {userState && <Banner />}
      <div className="bg-body d-flex justify-content-center align-items-center">
        <Window />
      </div>
    </>
  );
}
