import React, { useContext } from "react";
import { UilMoon, UilSun } from '@iconscout/react-unicons'; // Import both icons from the same path
import "./Toggle.css";
import { themeContext } from "../../Context";

const Toggle = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const handleClick = () => {
    theme.dispatch({ type: "toggle" });
  };

  return (
    <div className="toggle" onClick={handleClick}>
      <UilMoon /> {/* Use UilMoon here */}
      <UilSun />  {/* Use UilSun here */}
      <div
        className="t-button"
        style={darkMode ? { left: "2px" } : { right: "2px" }}
      ></div>
    </div>
  );
};

export default Toggle;
