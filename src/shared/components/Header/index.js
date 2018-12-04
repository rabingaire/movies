import React from "react";
import { Link } from "@reach/router";

import "./styles.css";

const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      return {
        style: {
          color: isCurrent ? "#98ccd3" : "#ffffff"
        }
      };
    }}
  />
);

const Header = () => (
  <div className="header_wrapper">
    <NavLink to="/">Home</NavLink>
    <span>&nbsp;</span>
    <NavLink to="trending">Trending</NavLink>
  </div>
);

export default Header;
