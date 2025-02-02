import { Outlet, useNavigation } from "react-router-dom";
import NavBar from "../components/NavBar";

const LayoutPublic = () => {
  const navigation = useNavigation();

  return (
    <div>
      <NavBar />
      <main className="container">
        {navigation.state === "loading" && (
          <div className="alert alert-info my-5">Loading...</div>
        )}
        <Outlet />
        {/* Se trae el elemento del archivo de configuración, el element (Home, Blog, About)*/}
      </main>
      <footer className="container text-center">Footer</footer>
    </div>
  );
};

export default LayoutPublic;
