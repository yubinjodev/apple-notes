import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/__custom.scss" 

import Window from "./features/Window";

export default function App() {
  return (
    <div className="bg-body d-flex justify-content-center align-items-center">
      <Window/>
    </div>
  );
}
