import * as React from "react";

import "./Components.css";

const Footer = () => {
  return (
    <div className="footer">
      <p>Todos los derechos reservados {new Date().getFullYear()}</p>
    </div>
  );
};

export default Footer;
