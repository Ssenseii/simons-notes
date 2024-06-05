import React from "react";
import { Theme, Font, Home, Mail } from "../../constants/images";

const Actions = ({ toggleFont, setToggleFont, darkMode, setDarkMode }) => {
  return (
    <div className="header__actions">
      <button title={"SIMONSLAB"} className="header__actions-action">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://simons-portfolio.vercel.app/"
        >
          {Home}
        </a>
      </button>
      <button title={"EMAIL ME"} className="header__actions-action">
        <a href="mailto: saadabou.study@gmail.com">{Mail}</a>
      </button>
      <button
        title={"TOGGLE FONT"}
        className="header__actions-action"
        onClick={() => {
          setToggleFont(!toggleFont);
        }}
      >
        {Font}
      </button>
      <button
        title={"TOGGLE THEME"}
        className="header__actions-action"
        onClick={() => {
          setDarkMode(!darkMode);
        }}
      >
        {Theme}
      </button>
    </div>
  );
};

export default Actions;
