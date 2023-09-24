import NavBar from "./components/NavBar";

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
      <div className="gradient_bg" />
    </div>
  );
};

export default Layout;
