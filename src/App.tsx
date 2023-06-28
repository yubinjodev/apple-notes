import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css'
import "./styles/__custom.scss" 

import Window from "./pages/Window";

export default function App() {
  return (
    <div className="bg-body d-flex justify-content-center align-items-center">
      <Window/>
    </div>
  );
}
