import React from "react";
import { Link } from "gatsby";
import "./Layout.scss";

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <Link to="/about">About</Link>
      </header>
      {children}
    </div>
  );
};

export default Layout;
