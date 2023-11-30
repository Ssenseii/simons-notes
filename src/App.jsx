import React, { useEffect, useState } from "react";
import Header from "./Layout/Header";
import Main from "./Layout/Main";
import Sidebar from "./Layout/Sidebar";

import Actions from "./Components/Header/Actions";
import { BrowserRouter } from "react-router-dom";

function App() {
    const [toggleFont, setToggleFont] = useState(true);
    const [darkMode, setDarkMode] = useState(false);
    const [postName, setPostName] = useState("Post0");
    const [toggleMenu, setToggleMenu] = useState(false);
    const [resizeValue, setResizeValue] = useState(window.innerWidth);

    const handlePostName = (string) => {
        setPostName(string);
    };

    useEffect(() => {
        window.addEventListener("resize", () => {
            setResizeValue(window.innerWidth);
        });

        if (darkMode) {
            document.documentElement.style.setProperty("--color", "#D11E30");
            document.documentElement.style.setProperty("--bg", "#011925");
            document.documentElement.style.setProperty("--accent", "#5da8c9");
        } else {
            document.documentElement.style.setProperty("--bg", "#ffffff");
            document.documentElement.style.setProperty("--color", "#000000");
            document.documentElement.style.setProperty("--accent", "#f50032");
        }

        return () => {
            window.removeEventListener("resize", () => {});
        };
    }, [resizeValue, darkMode]);

    /// returns

    if (resizeValue >= 768) {
        /// DESKTOP
        return (
            <BrowserRouter>
                <div className={toggleFont ? "app-fonted" : "app"}>
                    <Header
                        darkMode={darkMode}
                        setDarkMode={setDarkMode}
                        setToggleFont={setToggleFont}
                        toggleFont={toggleFont}
                    />

                    <div className="wrapper">
                        <Sidebar handlePostName={handlePostName} />
                        <Main postName={postName} />
                    </div>
                </div>
            </BrowserRouter>
        );
    }

    return (
        /// MOBILE
        <BrowserRouter>
            <div className={toggleFont ? "app-fonted" : "app"}>
                <Header
                    toggleFont={toggleFont}
                    setFontToggle={setToggleFont}
                    resizeValue={resizeValue}
                    toggleMenu={toggleMenu}
                    setToggleMenu={setToggleMenu}
                />
                {toggleMenu ? ( /// gotta fix this by making a wrapper and putting the actions and sidebar above the main somehow
                    <div className="mobile__actions">
                        <Actions
                            darkMode={darkMode}
                            setDarkMode={setDarkMode}
                            toggleFont={toggleFont}
                            setToggleFont={setToggleFont}
                        />
                        <Sidebar
                            toggleMenu={toggleMenu}
                            setToggleMenu={setToggleMenu}
                            handlePostName={handlePostName}
                        />
                    </div>
                ) : (
                    <Main postName={postName} />
                )}
            </div>
        </BrowserRouter>
    );
}

export default App;
