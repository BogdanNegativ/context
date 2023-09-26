import React, { useContext } from "react";
import { ThemeContext } from "../../context";

const Profile = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`profile ${theme}-theme`}>
      <h2>Profile... theme: {theme}</h2>
    </div>
  );
};

export default Profile;
