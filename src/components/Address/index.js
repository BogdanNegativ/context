import React, { useContext } from "react";
import { ThemeContext } from "../../context";

const Address = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`address ${theme}-theme`}>
      <h2>Address...</h2>
    </div>
  );
};

export default Address;
