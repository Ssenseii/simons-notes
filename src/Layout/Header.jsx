import React from "react";
import Logo from "../Components/Header/Logo";
import MenuButton from "../Components/Header/MenuButton";
import Actions from "../Components/Header/Actions";

const Header = ({
  toggleMenu,
  setToggleMenu,
  setToggleFont,
  toggleFont,
  darkMode,
  setDarkMode,
}) => {
  return (
    <div className="header">
      <Logo text={`${toggleMenu ? "MENU" : "SIMONS-NOTES"}`} />
      <MenuButton toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      {window.innerWidth >= 768 && (
        <Actions
          toggleFont={toggleFont}
          setToggleFont={setToggleFont}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      )}
    </div>
  );
};

export default Header;
