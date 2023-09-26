import React, { useContext } from "react";
import { ThemeContext, UserContext } from "../../context";

const Contact = () => {
  const { theme } = useContext(ThemeContext);
  const user = useContext(UserContext);

  return (
    <div className={`contact ${theme}-theme`}>
      <h2>Contact... theme: {theme}</h2>
      <p>first name: {user.firstName}</p>
      <p>last name: {user.lastName}</p>
    </div>
  );
};

export default Contact;
