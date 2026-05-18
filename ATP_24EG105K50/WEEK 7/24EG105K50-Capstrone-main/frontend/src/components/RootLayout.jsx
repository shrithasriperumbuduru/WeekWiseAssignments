import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default RootLayout;