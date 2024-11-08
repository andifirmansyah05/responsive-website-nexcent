import { useState } from "react";
import ListNavbar from "./ListNavbar";
import Logo from "./Logo";
import menuBar from "/public/menuBar.svg";

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(true);

  const handleToggleClick = () => setToggleMenu(!toggleMenu);

  return (
    <div className="bg-silver font-Inter md:flex md:justify-between md:px-2">
      <div className="flex justify-between items-center p-4 ">
        <div>
          <Logo />
        </div>
        <img className="md:hidden" onClick={handleToggleClick} src={menuBar} alt="menu bar" />
      </div>
      <ListNavbar toggleMenu={toggleMenu}/>
    </div>
  );
};

export default NavBar;
