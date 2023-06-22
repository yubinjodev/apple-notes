import "bootstrap/dist/css/bootstrap.min.css";

import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import SidebarPreview from "./components/SidebarPreview";

export default function App() {
  return (
    <main className="main container">
      <LoginForm/>
      <SignUpForm/>
      <SidebarPreview/>
    </main>
  );
}
