import React from 'react'

const MenuButton = ({ toggleMenu, setToggleMenu }) => {
  
  function handleToggleMenu(){
    setToggleMenu(!toggleMenu)
  }

  return (
    <div className={toggleMenu? "header__button-active" : "header__button"}>
      <button onClick={handleToggleMenu}></button>
    </div>
  );
};

export default MenuButton