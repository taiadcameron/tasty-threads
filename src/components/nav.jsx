import { Bell, Search } from "lucide-react";
import logo from "../Images/logott.svg";

const Navbar = () => {
  return (
    <nav className="navbar flex justify-between items-center py-6 px-8 ">
      <div className="navbar-left flex items-center gap-20 w-full">
        <img src={logo} alt="logo" className="h-24 rounded-3xl" />
        <div className="relative w-1/4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full h-12 bg-white border-2 border-primary-dark drop-shadow-md rounded-xl px-4  focus:outline-none focus:border-primary-light focus:ring-2 focus:ring-primary-light"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>
      <div className="navbar-right flex items-center gap-6 ">
        <Bell className="navbar-bell " />
        <img
          src={logo}
          alt="Profile"
          className="navbar-profile-pic h-10 rounded-full"
        />
      </div>
    </nav>
  );
};

export default Navbar;
