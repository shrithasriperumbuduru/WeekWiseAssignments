import { NavLink, useLocation } from "react-router-dom";
import { useAuth } from "../store/authStore";

function Header() {
  const isAuthenticated = useAuth((state) => state.isAuthenticated);
  const user = useAuth((state) => state.currentUser);

  const location = useLocation();

  const isHomePage = location.pathname === "/";

  const getProfilePath = () => {
    if (!user) return "/";
    if (user.role === "AUTHOR") return "/author-profile";
    if (user.role === "ADMIN") return "/admin-profile";
    return "/user-profile";
  };

  return (
    <nav
      className={`w-full z-50 ${
        isHomePage
          ? "absolute top-0 left-0 bg-transparent"
          : "sticky top-0 bg-black border-b border-white/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">

        {/* Logo */}
        <NavLink
          to="/"
          className={`text-4xl font-serif tracking-wide ${
            isHomePage ? "text-white" : "text-white"
          }`}
        >
          MyBlog
        </NavLink>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-10 text-lg font-light text-white">

          <NavLink
            to="/"
            className="hover:text-gray-300 transition duration-300"
          >
            Home
          </NavLink>

          {!isAuthenticated ? (
            <>
              <NavLink
                to="/login"
                className="hover:text-gray-300 transition duration-300"
              >
                Login
              </NavLink>

              <NavLink
                to="/register"
                className="border border-white/30 px-6 py-2 rounded-full hover:bg-white hover:text-black transition duration-300"
              >
                Get Started
              </NavLink>
            </>
          ) : (
            <NavLink
              to={getProfilePath()}
              className="border border-white/30 px-6 py-2 rounded-full hover:bg-white hover:text-black transition duration-300"
            >
              Dashboard
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;