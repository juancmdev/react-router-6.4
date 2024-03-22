import { Outlet } from "react-router-dom";

const LayoutPublic = () => {
  return (
    <div>
      <nav>NavBar</nav>
      <main>
        <Outlet />
        {/* Se trae el elemento del archivo de configuración, el element (Home, Blog, About)*/}
      </main>
      <footer>Footer</footer>
    </div>
  );
};

export default LayoutPublic;
