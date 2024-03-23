import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const LayoutPublic = () => {
  return (
    <div>
      <main className="container">
        <NavBar />
        <Outlet />
        {/* Se trae el elemento del archivo de configuración, el element (Home, Blog, About)*/}
      </main>
      <footer className="container text-center">Footer</footer>
    </div>
  );
};

export default LayoutPublic;
