import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

/**
 * Componenet renders the header and footer along with
 * <Outlet /> that renders a different element depending
 * on the current path
 */
const SharedLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default SharedLayout;
